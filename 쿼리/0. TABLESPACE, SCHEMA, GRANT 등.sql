--**************************************************************************************************
--DB 테이블 스페이스, USER 생성 및 권한 부여
--**************************************************************************************************
-- SID확인 select instance from v$thread; 
-- DB이름 확인 : select name,db_unique_name from v$database; 
-- 포트확인 :  select dbms_xdb.gethttpport() from dual; 
-- 포트변경 :  exec dbms_xdb.sethttpport(변경할 숫자);

-- *****테이블 스페이스 생성******
create tablespace KOREA
datafile 'C:\Dev\oracle\oradata\ORCL3\USERS01.DBF'
size 10M 
autoextend on next 10M
maxsize unlimited;
-- 테이블 스페이스 확인 select tablespace_name from dba_tablespaces;



-- *****사용자 계정 생성********
CREATE USER "MAN" 
IDENTIFIED BY  "Man!234" 
DEFAULT TABLESPACE KOREA; 
-- 생성 유저 확인 SELECT USERNAME FROM DBA_USERS; 
-- 2. 비밀번호 변경--ALTER USER [유저이름] IDENTIFIED BY [변경할 비밀번호];
-- ALTER USER "MAN" IDENTIFIED BY "Man!234"; 
-- 3. 유저 삭제--DROP USER[유저이름]
-- DROP USER "MAN"; 
-- SYS의 계정 비밀번호를 바꿔보자.
-- ALTER USER SYS IDENTIFIED BY "Admin!234"
-- SQLPLUS 확인 : CONN SYS/Admin!234
-- 접속확인  : SHOW USER

-- *****권한 부여*****
--GRANT[권한]TO[대상 유저]
GRANT CONNECT,RESOURCE,DBA TO "MAN";

--지구 용량을 채우주자
--ALTER USER MAN DEFAULT TABLESPACE KOREA QUOTA UNLIMITED ON USERS;
*