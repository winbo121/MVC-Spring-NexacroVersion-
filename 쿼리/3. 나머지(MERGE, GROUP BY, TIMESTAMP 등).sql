-----------------------------------------------------------------------------------------
MERGE
-----------------------------------------------------------------------------------------
--단일 테이블
--상황 : 상품테이블에 A0005 상품이 없다면 새롭게 INSERT 이미 있다면 상품명과 수정일자 현재날짜로 업데이트
MERGE 
 INTO TB_ITEM ITEM -- UPDATE 또는 INSERT 대상
USING DUAL         -- 비교군 테이블(비교할 테이블이 필요 없을 경우 DUAL을 씀)
   ON (ITEM.ITEM_CD = 'A0005') --비교 조건
 WHEN MATCHED THEN -- 조건에 일치하는게 존재한다면 UPDATE를
      UPDATE
         SET ITEM.ITEM_NM = '아이오닉7'
		   ,       UPD_DT = SYSDATE 
 WHEN NOT MATCHED THEN -- 조건에 일치하는게 없다면 INSERT를
      INSERT(ITEM_CD, ITEM_NM, REG_DT, UPD_DT)
	  VALUES('A0005', '아이오닉7', SYSDATE, SYSDATE);
	
     
COMMIT;

-----------------------------------------------------------------------------------------
GROUP BY
-----------------------------------------------------------------------------------------
1. 
SELECT COUNT(*)
FROM TB_ORD
WHERE ORD_STAT_CD = 'D';


2. 
SELECT MIN(REG_DT)
FROM TB_ORD
WHERE ORD_STAT_CD = 'D';
   	
SELECT MAX(REG_DT)
FROM TB_ORD
WHERE ORD_STAT_CD = 'D';

3.
SELECT FN_CODE_NM('001',ORD_STAT_CD) AS "설치상태"
, COUNT(*) AS "건수"
FROM TB_ORD
WHERE ORD_STAT_CD IN('B','E')
GROUP BY FN_CODE_NM('001',ORD_STAT_CD);

 4.
SELECT TB_ITEM.ITEM_NM  
, COUNT(*) AS "설치완료건"
FROM TB_ORD 
LEFT JOIN TB_ITEM ON TB_ORD.ITEM_CD = TB_ITEM.ITEM_CD 
WHERE TB_ORD.ORD_STAT_CD = 'D'
GROUP BY TB_ITEM.ITEM_NM 
ORDER BY "설치완료건" DESC; 
 
5. 
SELECT TB_ITEM.ITEM_NM  
, COUNT(*) AS "설치완료건"
FROM TB_ORD 
LEFT JOIN TB_ITEM ON TB_ORD.ITEM_CD = TB_ITEM.ITEM_CD 
WHERE TB_ORD.ORD_STAT_CD = 'D'
GROUP BY TB_ITEM.ITEM_NM
HAVING COUNT(*) > 1
ORDER BY "설치완료건" DESC; 
    
6.
SELECT TB_CUST.CUST_NM 
,  TB_ITEM.ITEM_NM  
, COUNT(*) AS "설치완료건"
FROM TB_ORD 
LEFT JOIN TB_ITEM ON TB_ORD.ITEM_CD = TB_ITEM.ITEM_CD
LEFT JOIN TB_CUST ON TB_ORD.CUST_CD = TB_CUST.CUST_CD
WHERE TB_ORD.ORD_STAT_CD = 'D'
GROUP BY TB_CUST.CUST_NM 
,  TB_ITEM.ITEM_NM 
ORDER BY TB_CUST.CUST_NM; 
   
7. 
SELECT CD_NM, LISTAGG(CD_NM1,', ') 
FROM TB_CD_MST 
GROUP BY CD_NM ;
       
8. 
SELECT ITEM_CD, MIN(REG_DT)
FROM TB_ORD
GROUP BY ITEM_CD
ORDER BY ITEM_CD;
     
9.
SELECT ORD2.ITEM_CD, ORD2.REG_DT, ORD2.ORD_NO 
FROM  (SELECT ITEM_CD, MIN(REG_DT) AS REG_DT
FROM TB_ORD
GROUP BY ITEM_CD
ORDER BY ITEM_CD) ORD 
LEFT JOIN TB_ORD ORD2 ON ORD.ITEM_CD = ORD2.ITEM_CD AND ORD.REG_DT = ORD2.REG_DT;
      
SELECT ITEM_CD
,      MIN(REG_DT)
,      MIN(ORD_NO) KEEP(DENSE_RANK FIRST ORDER BY REG_DT)
FROM TB_ORD
GROUP BY ITEM_CD
ORDER BY ITEM_CD;

---------------------------------------------------------------------------------------
TIMESTAMP
---------------------------------------------------------------------------------------
  DELETE FROM TB_ITEM;
  
  INSERT INTO TB_ITEM
  SELECT * 
   FROM TB_ITEM AS OF TIMESTAMP(SYSTIMESTAMP - INTERVAL '1000' MINUTE);
  
 SELECT * FROM TB_ITEM;

또는

--UPDATE 실수
UPDATE TB_ITEM  
    SET ITEM_NM = 'xxx';

--백업테이블 생성
CREATE TABLE TB_ITEM_BACKUP TABLESPACE KOREA AS
SELECT * FROM TB_ITEM   
AS OF TIMESTAMP(TO_DATE('20221025000000','YYYYMMDDHH24MISS'));

--MERGE
MERGE 
 INTO TB_ITEM ITEM
USING TB_ITEM_BACKUP BACKUP
   ON (ITEM.ITEM_CD = BACKUP.ITEM_CD)
 WHEN MATCHED THEN 
 UPDATE 
    SET ITEM.ITEM_NM = BACKUP.ITEM_NM;

--확인
SELECT * FROM TB_ITEM;
SELECT * FROM TB_ITEM_BACKUP;
---------------------------------------------------------------------------------------
INSERT SELECT
---------------------------------------------------------------------------------------
 SELECT * FROM TB_ITEM;
INSERT INTO TB_ITEM(
  ITEM_CD
  , ITEM_NM
  , REG_DT
  , UPD_DT)
SELECT 'TEST'
     , 'TEST'
     , SYSDATE
     , SYSDATE 
  FROM TB_ORD
 WHERE ROWNUM = 1;
COMMIT;

/*
 * 
 * 넥사크로 연동 pom.xml에 dependency 추가
//로그 라이브러리 추가
<dependency>
		    <groupId>org.apache.logging.log4j</groupId>
		    <artifactId>log4j-api</artifactId>
		    <version>2.0.1</version>
		</dependency>
		
		<dependency>
		    <groupId>org.apache.logging.log4j</groupId>
		    <artifactId>log4j-core</artifactId>
		    <version>2.0.1</version>
		</dependency>


//hibernate 아래껄로 체인지
<dependency>
            <groupId>org.hibernate.validator</groupId>
            <artifactId>hibernate-validator</artifactId>
            <version>6.0.8.Final</version>
        </dependency>

 * 
 * maven-war-plugin version 3.3.1로 change
 * 
 * oracle 
 * <dependency>
		    <groupId>com.oracle.database.jdbc</groupId>
		    <artifactId>ojdbc8</artifactId>
		    <version>19.8.0.0</version>
		</dependency>
		
		
		
* context-dataserouce.cml
* <bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
        <property name="driverClassName" value="oracle.jdbc.driver.OracleDriver"/>
        <property name="url" value="jdbc:oracle:thin:@localhost:1521:ORCL2" />
        <property name="username" value="HMAN"/>
        <property name="password" value="Hman!234"/>
    </bean>
    
  
   		
* context-nexacro.xml에서 oracle 제외 토탈 주석 처리		
* 		
* 
* 
* run on server로 기동할때 톰캣 추가, 실행경로 /로 변경
 */


로그인 페이지 연동

var strSvcId    = "healthCheck";
	var strSvcUrl   = "healthCheck.do";
	var inData      = "";
	var outData     = "dsList=dsList";
	var strArg      = "";
	var callBackFnc = "fnCallback";
	
	this.dsList.clearData();
	//생략가능
	var isAsync   = true;
	var nDataType = 0;	
	
	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
								strSvcUrl , 	// trabsaction을 요청할 주소
								inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
								outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
								strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
								callBackFnc 	// trnsaction의 결과를 받을 Function 이름
								); // 통신방법 정의 [생략가능]z

//스프링쪽
@RequestMapping(value = "/orderBoard/healthCheck.do")
	public NexacroResult healthCheck() throws NexacroException {
		NexacroResult result = new NexacroResult();
		HashMap<String,Object> dsList = new HashMap<String,Object>();
		int userCount = uidapterSampleService.selectUserCount();
		dsList.put("result",userCount);
		
		result.addDataSet("dsList", dsList);
		
		System.out.println("__ok__" + dsList.size());
		return result;
	}
<dependency>
            <groupId>org.mybatis</groupId>
            <artifactId>mybatis-spring</artifactId>
            <version>1.3.2</version>
        </dependency>
        
        <dependency>
            <groupId>org.mybatis</groupId>
            <artifactId>mybatis</artifactId>
            <version>3.4.6</version>
        </dependency>




바탕화면에 있는 라이브러리들 모두 가져와라.

uiadapter 라이브러리 압축해제해서 com.nexacro 밑에다가 넣어라

<dependency>
    <groupId>javax.activation</groupId>
    <artifactId>activation</artifactId>
    <version>1.1</version>
</dependency>