(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Practice1");
            this.set_titletext("연습 1");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("setParam_searchCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("getParam_searchCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("setParam_searchList", this);
            obj._setContents("<ColumnInfo><Column id=\"ORD_STAT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("getParam_searchList", this);
            obj._setContents("<ColumnInfo><Column id=\"ORD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_STAT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","25","23","155","51",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회용 셀렉트 박스");
            obj.set_color("#ff0000");
            obj.set_border("1px solid");
            obj.set_textAlign("center");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_wordWrap("none");
            obj.set_verticalAlign("middle");
            obj.set_textDecoration("none");
            obj.set_background("cyan");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","180","23","530","51",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Combo("testCombo","222","39","302","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("getParam_searchCombo");
            obj.set_codecolumn("CD_VAL1");
            obj.set_datacolumn("CD_NM1");
            obj.set_displaynulltext("선택");
            obj.set_enable("true");
            obj.set_autoselect("false");
            obj.set_autoskip("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("practice_search","593","33","92","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","30","129","691","262",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("getParam_searchList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"186\"/><Column size=\"148\"/><Column size=\"204\"/><Column size=\"153\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"주문번호\"/><Cell col=\"1\" text=\"주문상태\"/><Cell col=\"2\" text=\"고객번호\"/><Cell col=\"3\" text=\"고객명\"/></Band><Band id=\"body\"><Cell text=\"bind:ORD_NO\"/><Cell col=\"1\" text=\"bind:ORD_STAT_NM\"/><Cell col=\"2\" text=\"bind:CUST_NO\"/><Cell col=\"3\" text=\"bind:CUST_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","33","90","117","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("주문등록");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Practice1.xfdl", function() {

        this.sta00_onclick = function(obj,e)
        {

        };

        this.Practice1_onload = function(obj,e)
        {
        	this.setParam_searchCombo.clearData();
        	this.setParam_searchCombo.addRow();
        	this.setParam_searchCombo.setColumn(0,"CD_VAL","001");

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
        };

        this.fnCallback = function(svcID, errorCode, errorMsg){

        	if(errorCode < 0){
        		alert("작업 실패 에러 코드 : " + errorCode);
        		return 0;
        	}

        	switch(svcID)
        	{
        		case "selectCommonCode":
        			this.getParam_searchCombo.insertRow(0);
        			this.getParam_searchCombo.setColumn(0,"CD_VAL1","");
        			this.getParam_searchCombo.setColumn(0,"CD_NM1","전체");
        			break;

        		case "deleteOrdList":
        			alert("삭제 완료");
        			break;
        	}

        }
        this.practice_search_onclick = function(obj,e)
        {
        	this.setParam_searchList.clearData();
        	this.setParam_searchList.addRow();
        	this.setParam_searchList.setColumn(0,"ORD_STAT_CD",this.testCombo.value);

        	trace(this.setParam_searchList.getColumn(0,"ORD_STAT_CD"));

        	var strSvcId    = "selectOrdList";
        	var strSvcUrl   = "selectOrdList.do";
        	var inData      = "ds_searchList=setParam_searchList";
        	var outData     = "getParam_searchList=ds_list";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId  ,
        						 strSvcUrl ,
        						 inData  ,
        						 outData ,
        						 strArg  ,
        						 callBackFnc);
        };

        this.btn00_onclick = function(obj,e)
        {
        	var oArg = {};//팝업을 열 때 부모창에서 가져갈 데이터가 있데면 데이터 세팅
        	              //주문등록시에는 가져갈 데이터가 없으므로 공란으로 지정
        	              //ex) paramTitle:"가나다라", paramCode:"abcd", paramNum:12345
        	var oOption = {};	//top, left를 지정하지 않으면 가운데정렬 //"top=20,left=370"
        	var sPopupCallBack = "fnPopupCallback"; //팝업창을 닫았을 때 후처리 로직 작성하기 위한 callBack 함수 지정
        	this.gfnOpenPopup( "popup","Practice::Practice1_popup.xfdl",oArg,sPopupCallBack,oOption);//팝업으로 띄울 화면 지정 후 팝업 open
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Practice1_onload,this);
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
            this.practice_search.addEventHandler("onclick",this.practice_search_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };
        this.loadIncludeScript("Practice1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
