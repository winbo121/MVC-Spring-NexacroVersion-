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
            this.set_titletext("연습 1 (리스트)");
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


            obj = new Dataset("setParam_delList", this);
            obj._setContents("<ColumnInfo><Column id=\"ORD_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_selecttype("multirow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"186\"/><Column size=\"148\"/><Column size=\"204\"/><Column size=\"153\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"주문번호\"/><Cell col=\"1\" text=\"주문상태\"/><Cell col=\"2\" text=\"고객번호\"/><Cell col=\"3\" text=\"고객명\"/></Band><Band id=\"body\"><Cell text=\"bind:ORD_NO\"/><Cell col=\"1\" text=\"bind:ORD_STAT_NM\"/><Cell col=\"2\" text=\"bind:CUST_NO\"/><Cell col=\"3\" text=\"bind:CUST_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","33","90","117","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("주문등록");
            this.addChild(obj.name, obj);

            obj = new Button("delBtn","180","89","116","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("주문삭제");
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

        //화면로드 될시
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


        //조회버튼 클릭시
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


        //주문조회 팝업
        this.btn00_onclick = function(obj,e)
        {
        	var searchBtn =  this.practice_search
        	var oArg = {searchBtn:searchBtn};//팝업을 열 때 부모창에서 가져갈 데이터가 있데면 데이터 세팅
        	              //주문등록시에는 가져갈 데이터가 없으므로 공란으로 지정
        	              //ex) paramTitle:"가나다라", paramCode:"abcd", paramNum:12345
        	var oOption = {};	//top, left를 지정하지 않으면 가운데정렬 //"top=20,left=370"
        	var sPopupCallBack = "fnPopupCallback"; //팝업창을 닫았을 때 후처리 로직 작성하기 위한 callBack 함수 지정
        	this.gfnOpenPopup( "popup","Practice::Practice1_popup.xfdl",oArg,sPopupCallBack,oOption);//팝업으로 띄울 화면 지정 후 팝업 open
        };


        //리스트중에서 하나 더블클릭할시 상세 조회 팝업
        this.detailView = function(){

        	//alert("주문 수정 팝업 오픈");
        	//그리드에서 현재 선택된 ROW의 ORD_NO 주문번호를 가져온다.
        	var ordNo = this.getParam_searchList.getColumn(this.getParam_searchList.rowposition,"ORD_NO");
        	var custCd = this.getParam_searchList.getColumn(this.getParam_searchList.rowposition,"CUST_NO");
        	var searchBtn =  this.practice_search

        	var oArg = {ordNo:ordNo , custCd:custCd, searchBtn:searchBtn};
        	var oOption = {};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup( "popup","Practice::Practice1_popupDetail.xfdl",oArg,sPopupCallBack,oOption);


        }

        //리스트중 드래그해서 여러개 삭제 기능
        this.delBtn_onclick = function(obj,e)
        {
        	var ds = this.getParam_searchList;  // 대상 Dataset
        	var grid = this.grd00;  // 대상 Grid

        	var selectedRows = grid.getSelectedRows();  // 선택된 행들의 인덱스 배열

        	trace("선택된 행 개수: " + selectedRows.length);

        	if(selectedRows.length == 0){
        		alert("삭제 할 로우를 선택하세요");
        		return;
        	}

        	this.setParam_delList.clearData();

        	for (var i = 0; i < selectedRows.length; i++) {
        		var row = selectedRows[i];
        		trace("선택된 행의 데이터: " + ds.getColumn(row, "CUST_NM"));
        		this.setParam_delList.addRow();
        		this.setParam_delList.setColumn(i,"ORD_NO",ds.getColumn(row, "ORD_NO"));
        	}

        	var strSvcId    = "delOrdList";
        	var strSvcUrl   = "delOrdList.do";
        	var inData      = "setParam_delList=setParam_delList";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId  ,
        						 strSvcUrl ,
        						 inData  ,
        						 outData ,
        						 strArg  ,
        						 callBackFnc);

        };



        /**************************************************************************************************
        * CallBack Function (서버수신)
        ***************************************************************************************************/
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
        		case "delOrdList":
        			alert("삭제완료");
        			this.practice_search.click();
        	}

        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Practice1_onload,this);
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
            this.practice_search.addEventHandler("onclick",this.practice_search_onclick,this);
            this.grd00.addEventHandler("oncelldblclick",this.detailView,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.delBtn.addEventHandler("onclick",this.delBtn_onclick,this);
        };
        this.loadIncludeScript("Practice1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
