
//------------------- 添加HTML界面 模块 -------------------

function add_elements() {
    //添加复制界面html
    var page_div = $('*[class^="page_plug_in "]');
    var className = page_div.prop("class");
    page_div.attr("class",className + " " + "fuceng");//加个浮层
    var page_html = page_div.html();
    var page_plug_in_copy_html = "<div class='page_plug_in_copy " + className + " fuceng" +"'>" + page_html + "</div>";
    $('*[class^="page_plug_in "]').after(page_plug_in_copy_html);

    //添加操作模块界面
    var operatingAreaHTML = operating_area();//操作模板数据
    $('*[class^="page_plug_in "]').after(operatingAreaHTML);

    //添加切换语言模块界面
    var operatingLanHTML = operating_lan();//操作模板数据
    $('*[class^="page_plug_in_copy"]').after(operatingLanHTML);

    //添加控件信息模块界面
    var showInfoViewHTML = show_info_view();//操作模板数据
    $('*[class^="operating_lan_div"]').after(showInfoViewHTML);
}
add_elements();

//------------------- 添加HTML界面 模块 -------------------

//------------------- 显示信息公共方法 模块 -------------------

function info_view_type_lan(text) {
    if (isIOS())return "UI"+upperFirstCase(text);
    if (isANDROID())return upperFirstCase(text);
    if (isFLUTTER())return upperFirstCase(text);
    if (isSWIFT())return "UI"+upperFirstCase(text);
    return text;
}

function chang_to_info_view_type_lan(text) {
    if (isIOS()) {
        if(text.startsWith("UI"))text = text.substring(2,text.length);
        return lowerFirstCase(text);
    }
    if (isANDROID())return lowerFirstCase(text);
    if (isFLUTTER())return lowerFirstCase(text);
    if (isSWIFT()) {
        if(text.startsWith("UI"))text = text.substring(2,text.length);
        return lowerFirstCase(text);
    }
    return text;
}

/**
 * 切换页面
 */
function switch_page(html) {
    //移除某个元素
    $('*[class^="page_plug_in"]').remove();
    //添加新元素
    re_add_elements_for_new_page(html);
    //添加元素事件
    page_element_add_event();

    var lanhu_plug_in = document.getElementById("lanhu_plug_in");
    if (lanhu_plug_in != null) {
        lanhu_plug_in.style.display = "";
    }
}

function re_add_elements_for_new_page(new_page_text) {
    //添加新元素
    var page_html = "<div class=\"page_plug_in plus-in-flex-col\">\n" +new_page_text +"    </div>\n";
    $('*[class^="operating_div"]').before(page_html);
    var page_div = $('*[class^="page_plug_in "]');
    var className = page_div.prop("class");
    page_div.attr("class",className + " " + "fuceng");//加个浮层
    var page_html = page_div.html();
    var page_plug_in_copy_html = "<div class='page_plug_in_copy " + className + " fuceng" +"'>" + page_html + "</div>";
    $('*[class^="operating_div"]').after(page_plug_in_copy_html);
}

//------------------- 显示信息公共方法 模块 -------------------





//------------------- 选择控件后,显示信息到右边的显示面板 模块 -------------------

var info_view_type = document.getElementById('info_view_type');
var info_view_type_bg = document.getElementById('info_view_type_bg');
var info_view_define_name = document.getElementById('info_view_define_name');
var info_view_define_name_bg = document.getElementById('info_view_define_name_bg');
var info_view_layer_union = document.getElementById('info_view_layer_union');
var info_view_layer_union_bg = document.getElementById('info_view_layer_union_bg');
var info_view_code = document.getElementById('info_view_code');

var curSelClassName = "";
var curSelDomView = null;//选中的Dom View控件
var curSelMapView = null;//选中的Json组合数据中的Map节点
var curViews = "";//当前所有控件Map

// 输入框输入事件代理回调
$("input[id='info_view_define_name']").on('change', function () {
    var text = info_view_define_name.value + "";
    db_saveData(curSelClassName,text,Save_Data_Type_Define_Name());
    showToast("命名成功");
    changeViewInfoDone();
});

//切换控件类型事件回调
function switch_view_type_callback(viewType) {
    viewType = removeSpacePrefixSuffixNewLine(viewType);
    showToast("已更改成"+viewType);
    viewType = chang_to_info_view_type_lan(viewType);//要切换成对应的兼容类型
    db_saveData(curSelClassName,viewType,Save_Data_Type_Switch_View_Type());
    changeViewInfoDone();
}

//合并控件类型事件回调
function union_view_type_callback(viewType) {
    showToast("已合成为"+viewType);
    var fatherClassName = curSelMapView.parent;
    union_view_type_func(curSelClassName,fatherClassName,viewType);
}

function union_view_type_func(curSelClassName,fatherClassName,viewType) {
    viewType = removeSpacePrefixSuffixNewLine(viewType);
    viewType = chang_to_info_view_type_lan(viewType);//要切换成对应的兼容类型
    //unionViewType 内容格式:className1,className2,unionViewType
    var unionViewTypeStr = fatherClassName + "," + curSelClassName + ","+viewType;
    db_saveData(fatherClassName,unionViewTypeStr,Save_Data_Type_Union_View_Type());
    db_saveData(curSelClassName,unionViewTypeStr,Save_Data_Type_Union_View_Type());
    changeViewInfoDone();
}

//修改属性成功,并刷新属性信息
function changeViewInfoDone() {
    refresh_show_select_view();
}

info_view_type_bg.onclick = function() {
    if (isIOS()){
        initDefineDialogIos();
        show_ios_switch_view_type_dialog();
    }
    if (isSWIFT()){
        initDefineDialogSwift();
        show_swift_switch_view_type_dialog();
    }
    if (isANDROID()){
        initDefineDialogAndroid();
        show_android_switch_view_type_dialog();
    }
    if (isFLUTTER()){
        initDefineDialogFlutter();
        show_flutter_switch_view_type_dialog()
    }
};
info_view_define_name_bg.onclick = function() {
    $('#info_view_define_name_bg').focus();
};
info_view_layer_union_bg.onclick = function() {
    if (isIOS()){
        initDefineUnionDialogIos();
        show_ios_union_view_type_dialog();
    }
    if (isSWIFT()){
        initDefineUnionDialogSwift();
        show_swift_union_view_type_dialog();
    }
    if (isANDROID()){
        initDefineUnionDialogAndroid();
        show_android_union_view_type_dialog();
    }
    if (isFLUTTER()){
        initDefineUnionDialogFlutter();
        show_flutter_union_view_type_dialog()
    }
};
info_view_code.onclick = function() {
    var text = info_view_code.innerText;
    text = clearCodeSpecialChar(text);
    copyClipboard(text);
};

function info_view_type_bg_can_click(can) {
    if (can) {
        $("#info_view_type_bg").css("pointer-events", "auto");
        $("#info_view_type_bg").attr("title","点击切换控件类型");
        $("#info_view_type_img").css("opacity", 1);
    } else {
        $("#info_view_type_bg").css("pointer-events", "none");
        $("#info_view_type_bg").attr("title","");
        $("#info_view_type_img").css("opacity", 0);
    }
}

function info_view_define_name_bg_can_click(can) {
    if (can) {
        $("#info_view_define_name_bg").css("pointer-events", "auto");
        $("#info_view_define_name_bg").attr("title","点击开始输入名称");
        $("#info_view_define_name_img").css("opacity", 1);
    } else {
        $("#info_view_define_name_bg").css("pointer-events", "none");
        $("#info_view_define_name_bg").attr("title","");
        $("#info_view_define_name_img").css("opacity", 0);
    }
}

function info_view_layer_union_bg_can_click(can) {
    if (can) {
        $("#info_view_layer_union_bg").css("pointer-events", "auto");
        $("#info_view_layer_union_bg").attr("title","点击进行控件合并");
        $("#info_view_layer_union_img").css("opacity", 1);
    } else {
        $("#info_view_layer_union_bg").css("pointer-events", "none");
        $("#info_view_layer_union_bg").attr("title","");
        $("#info_view_layer_union_img").css("opacity", 0);
    }
}

function show_info_view_type(text) {
    if (info_view_type)info_view_type.innerText = text;
}

function show_info_view_define_name(text,placeholder) {
    if (info_view_define_name){
        info_view_define_name.value = text;
        if(placeholder && placeholder.length > 0) info_view_define_name.placeholder = placeholder;
        else info_view_define_name.placeholder = "未命名";
    }
}

function show_info_view_layer_union(text) {
    if (info_view_layer_union)info_view_layer_union.innerText = text;
}

function show_info_view_code(text) {
    if (info_view_code){
        if (isHtmlCode(text))info_view_code.innerHTML = text;
        else info_view_code.innerText = text;
    }
}

function show_select_view_type(view) {
    if (view){
        if (view.viewType) show_info_view_type(info_view_type_lan(view.viewType));
        else show_info_view_type("未知类型");
        info_view_type_bg_can_click(true);
    }else {
        info_view_type_bg_can_click(false);
        show_info_view_type("未选择");
    }
}

function show_select_view_define_name(view) {
    if (view){
        var defineName = db_getData(curSelClassName,Save_Data_Type_Define_Name());
        show_info_view_define_name(defineName,"");
        info_view_define_name_bg_can_click(true);
    }else {
        info_view_define_name_bg_can_click(false);
        show_info_view_define_name("","未选择");
    }
}

function show_select_view_layer_union(view) {
    if (view){
        if (view.viewType && (
            view.viewType == "label" || //ios
            view.viewType == "textView" || //android
            view.viewType == "text" //flutter
        )){
            info_view_layer_union_bg_can_click(true);
            show_info_view_layer_union("支持合成");
        }else{
            info_view_layer_union_bg_can_click(false);
            if (isIOS())show_info_view_layer_union("仅支持UILabel合成");
            if (isSWIFT())show_info_view_layer_union("仅支持UILabel合成");
            if (isANDROID())show_info_view_layer_union("仅支持TextView合成");
            if (isFLUTTER())show_info_view_layer_union("不支持合成");
        }
    }else {
        info_view_layer_union_bg_can_click(false);
        show_info_view_layer_union("未选择");
    }
}

function show_select_view_code(view,click,longClick) {
    if (view){
        var code = "";
        var includeChild = click;//单击,是查看某个控件和其子控件, 长按,是查看某个控件
        code = export_xml_for_selview(curSelMapView,includeChild);
        if (code && code.length > 0) show_info_view_code(code);
        else show_info_view_code("没有生成代码");
    }else {
        show_info_view_code("");
    }
}

//当修改命名,修改控件类型,修改合成控件类型时,需要重新刷新控件信息,包括代码
function refresh_show_select_view() {
    show_select_view(curSelClassName,true,false);
}

/**
 * click:单击,是查看某个控件和其子控件
 * longClick:长按,是查看某个控件
 */
function show_select_view(viewClassName,click,longClick) {
    var views = conversionViewsPure();
    if (views == null) return;
    curViews = views;

    var view = findView_by_className(views,viewClassName);
    //如果该控件是合成控件,就需要选择对应的合成对象控件
    if (view != null && view.union_view) {
        clickSelViewByClassName(view.union_view);
        return;
    }

    curSelMapView = view;
    curSelClassName = view ? viewClassName : "";
    curSelDomView = view ? findDomView(viewClassName) : null;

    show_select_view_type(view);
    show_select_view_define_name(view);
    show_select_view_layer_union(view);
    show_select_view_code(view,click,longClick);

    //控件不存在
    if (viewClassName && viewClassName.length > 0 && view == null) {
        clearSelStatus();
    }
}

//------------------- 选择控件后,显示信息到右边的显示面板 模块 -------------------

