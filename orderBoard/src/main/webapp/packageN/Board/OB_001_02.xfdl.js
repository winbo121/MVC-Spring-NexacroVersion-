(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OB_001_01");
            this.set_titletext("주문수정팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(402,210);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_searchCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ordStatCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_itemCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_updOrd", this);
            obj._setContents("<ColumnInfo><Column id=\"ORD_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Combo("cbo_ordStatNm","184","35","155","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_ordStatCombo");
            obj.set_codecolumn("CD_VAL1");
            obj.set_datacolumn("CD_NM1");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","49","33","96","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_textAlign("center");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_text("주문상태");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00","49","78","96","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("주문상품");
            obj.set_textAlign("center");
            obj.set_font("14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_itemNm","184","80","155","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_itemCombo");
            obj.set_codecolumn("CD_VAL1");
            obj.set_datacolumn("CD_NM1");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_chgOrd","60","138","133","56",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("주문수정");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exit","217","138","133","56",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",402,210,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("OB_001_02.xfdl", function() {

        this.OB_001_01_onload = function(obj,e)
        {
        	//alert(this.getOwnerFrame().ordNo);
        	//주문 수정을 위한 주문상태, 주문상품 콤보박스 초기화
        	//주문 등록에서 진행했던 작업과 동일하다.
        	//콤보박스 초기화를 위해 2개의 사용자 정의 함수를 만들어보자.

        	//1. 주문상태 콤보박스 초기화
        	this.fn_setOrdStatCbo();

        	// 2. 주문상품 콤보박스 초기화
        	this.fn_setItemCbo();
        };

        this.btn_chgOrd_onclick = function(obj,e)
        {
        	//alert("주문 수정 버튼 클릭");
        	//1. 주문수정을 위해 입력받은 2개의 값을 데이터셋에 담아 서버로 전송해야 한다.
        	// 따라서, 데이터셋을 만들고 사용자가 입력한 2개의 값을 세팅한다.
        	this.ds_updOrd.clearData();
        	this.ds_updOrd.addRow();
        	this.ds_updOrd.setColumn(0,"ORD_STAT_CD",this.cbo_ordStatNm.value); //combo에서 .value를 쓸경우 CODE를
        	this.ds_updOrd.setColumn(0,"ITEM_CD",this.cbo_itemNm.value);        //combo에서 .name을 쓸 경우 DATA를 가져온다.
        	this.ds_updOrd.setColumn(0,"ORD_NO",this.getOwnerFrame().ordNo);

        	trace(this.ds_updOrd.getColumn(0,"ORD_STAT_CD"));
        	trace(this.ds_updOrd.getColumn(0,"ITEM_CD"));
        	trace(this.ds_updOrd.getColumn(0,"ORD_NO"));


        	//2. 세팅한 값을 서버로 전송한다.
        	var strSvcId    = "updateOrdList";
        	var strSvcUrl   = "updateOrdList.do";
        	var inData      = "ds_updOrd=ds_updOrd";
        	var outData     = "";// 서버로 부터 받을 값은 따로 없으니 생략하자.
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId  ,
        						 strSvcUrl ,
        						 inData  ,
        						 outData ,
        						 strArg  ,
        						 callBackFnc);
        };

        this.btn_exit_onclick = function(obj,e)
        {
        	//alert("닫기 버튼 클릭");
        	this.close();
        };

        /**************************************************************************************************
        * 사용자 정의 함수
        ***************************************************************************************************/
        this.fn_setOrdStatCbo = function(obj,e)
        {
        	//alert("주문상태 콤보박스 세팅");

        	//ds_searchCombo 데이터셋을 생성하고 서버로 전달한 인자값을 추가해보자.
        	this.ds_searchCombo.clearData(); // 데이터셋 초기화
        	this.ds_searchCombo.addRow();    // 데이터셋에 값을 세팅하기 위해 1줄의 ROW를 추가
        	this.ds_searchCombo.setColumn(0,"CD_VAL","001"); // 추가된 0번쨰 ROW의 CD_VAL 컬럼에 001이라는 값을 세팅한다.

        	//서버로 데이터를 전송하기 전 필요한 값들을 세팅한다.
        	var strSvcId    = "selectCommonCode";
        	var strSvcUrl   = "selectCommonCode.do";
        	var inData      = "ds_search=ds_searchCombo";
        	var outData     = "ds_ordStatCombo=ds_commonCode";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId  ,
        						 strSvcUrl ,
        						 inData  ,
        						 outData ,
        						 strArg  ,
        						 callBackFnc); 	// 세팅한 값을 담아 서버로 데이터 전송
        };

        this.fn_setItemCbo = function(obj,e)
        {
        	//trace("주문상품 콤보박스 세팅");
        	//주문 상품의 경우 프론트에서 별도로 전송해줘야할 값이 없다.
        	//서버에서 보내준 값만 받아서 주문상품 콤보박스에 바인딩만 해주면 된다.

        	var strSvcId    = "selectItemList";
        	var strSvcUrl   = "selectItemList.do";
        	var inData      = "";   //따로 전송할 데이터가 없음
        	var outData     = "ds_itemCombo=ds_itemCombo";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	//넥사크로 N에서 제공하는 서버로 요청하는 공통함수를 쓴다.
        	this.gfnTransaction( strSvcId  ,
        						 strSvcUrl ,
        						 inData  ,
        						 outData ,
        						 strArg  ,
        						 callBackFnc); 	// 세팅한 값을 담아 서버로 데이터 전송

        };

        /**************************************************************************************************
        * CallBack Function (서버수신)
        ***************************************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(errorCode < 0){
        		alert("작업 실패 에러 코드 : " + errorCode);
        		return 0;
        	}
        	switch(svcID)
        	{
        		case "selectCommonCode":
        			trace("주문상태 콤보박스 세팅 완료");
        			break;
        		case "selectItemList":
        			trace("주문상품 콤보박스 세팅 완료");
        			break;
        		case "updateOrdList":
        			alert("주문 수정 완료");
        			this.close(); //팝업닫기
        			break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.OB_001_01_onload,this);
            this.btn_chgOrd.addEventHandler("onclick",this.btn_chgOrd_onclick,this);
            this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);
        };
        this.loadIncludeScript("OB_001_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
