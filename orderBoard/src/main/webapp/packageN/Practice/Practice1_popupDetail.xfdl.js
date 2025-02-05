(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Practice1_popupDetail");
            this.set_titletext("연습1 팝업 (상세조회)");
            if (Form == this.constructor)
            {
                this._setFormPosition(390,360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("setParam_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"ORD_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("getParam_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"BIR_BIZ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GBCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("setParam_searchCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("getParam_searchCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("getParam_searchItems", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta01_01","-1","35","146","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("고객명");
            obj.set_textAlign("center");
            obj.set_font("14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01_00","-1","76","146","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("휴대폰번호");
            obj.set_textAlign("center");
            obj.set_font("14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01_00_00","-1","117","146","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("생년월일/사업자번호");
            obj.set_textAlign("center");
            obj.set_font("14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01_00_00_00","-1","158","146","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("주소");
            obj.set_textAlign("center");
            obj.set_font("14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","24","199","96","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_textAlign("center");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_text("고객구분");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00","24","240","96","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("주문상품");
            obj.set_textAlign("center");
            obj.set_font("14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00","140","291","108","39",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Edit("ordNo","155","35","210","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Edit("phone","155","78","210","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Edit("birth","155","120","210","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Edit("addr","155","158","210","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Combo("custCd","155","199","210","31",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("getParam_searchCombo");
            obj.set_codecolumn("CD_VAL1");
            obj.set_datacolumn("CD_NM1");
            this.addChild(obj.name, obj);

            obj = new Combo("itemCd","155","240","210","31",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("getParam_searchItems");
            obj.set_codecolumn("CD_VAL1");
            obj.set_datacolumn("CD_NM1");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",390,360,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","ordNo","value","getParam_detail","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","phone","value","getParam_detail","PHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","birth","value","getParam_detail","BIR_BIZ_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","addr","value","getParam_detail","ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","custCd","value","getParam_detail","CUST_GBCD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","itemCd","value","getParam_detail","ITEM_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Practice1_popupDetail.xfdl", function() {



        this.Practice1_popupDetail_onload = function(obj,e)
        {
        	//고객구분
        	this.combo1();

        	//고객상품
        	this.combo2();

        	//상세 정보 적용
        	this.detail();
        };


        this.combo1 = function(){

        	this.setParam_searchCombo.clearData();
        	this.setParam_searchCombo.addRow();
        	this.setParam_searchCombo.setColumn(0,"CD_VAL","002");


        	var strSvcId    = "selectCommonCode";
        	var strSvcUrl   = "selectCommonCode.do";
        	var inData      = "ds_search=setParam_searchCombo";
        	var outData     = "getParam_searchCombo=ds_commonCode";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId  ,
        						 strSvcUrl ,
        						 inData  ,
        						 outData ,
        						 strArg  ,
        						 callBackFnc);
        }


        this.combo2 = function(){

        	var strSvcId = "selectItemList";
        	var strSvcUrl = "selectItemList.do";
        	var inData = "";
        	var outData = "getParam_searchItems=ds_itemCombo";
        	var strArg = "";
        	var callBackFnc = "fnCallback";
        	this.gfnTransaction( strSvcId  ,
        						 strSvcUrl ,
        						 inData  ,
        						 outData ,
        						 strArg  ,
        						 callBackFnc);

        }


        this.detail = function(){

        	this.setParam_detail.clearData();
        	this.setParam_detail.addRow();
        	this.setParam_detail.setColumn(0,"ORD_NO",this.getOwnerFrame().ordNo);

        	var strSvcId    = "selectOrdListDetail";
        	var strSvcUrl   = "selectOrdListDetail.do";
        	var inData      = "setParam_detail=setParam_detail";
        	var outData     = "getParam_detail=ord_cd_map";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId  ,
        						 strSvcUrl ,
        						 inData  ,
        						 outData ,
        						 strArg  ,
        						 callBackFnc);


        }

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
        	}
        };


        this.btn00_00_onclick = function(obj,e)
        {
        	this.close();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Practice1_popupDetail_onload,this);
            this.btn00_00.addEventHandler("onclick",this.btn00_00_onclick,this);
            this.itemCd.addEventHandler("onitemchanged",this.cbo00_00_onitemchanged,this);
        };
        this.loadIncludeScript("Practice1_popupDetail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
