
//------------------- 弹窗Html模板 模块 -------------------

function tmpl_define_dialog_father() {
    var string = 
        "      <div style=\"display: flex;flex-direction: column;justify-content: space-between;margin: 9px;\">\n" +
        "                  {% if (o.root.datas) { %}\n" +
        "                  {% var templateValue = tmpl_define_dialog_child();var map = {};map[\"root\"] = o.root.datas; var ret = tmpl(templateValue, map); %}\n" +
        "                  {% if(ret) { %}\n" +
        "                  {%=ret%}\n" +
        "                  {% } %}\n" +
        "                  {% } %}\n" +
        "            </div>";
    return string;
}

function tmpl_define_dialog_child() {
    var string =
        "    {% for (var i=0; i<o.root.length; i++) { %}\n" +
        "          {% var subArr = o.root[i]; %}\n" +
        "          <div style=\"display: flex;flex-direction: row;justify-content: space-between;\">\n" +
        "          {% for (var j=0; j<subArr.length; j++) { %}\n" +
        "            {% var data = subArr[j]; %}\n" +
        "            <div id=\"{%=data.bg_id %}\" class=\"define_view_box_view\">\n" +
        "              <img id=\"{%=data.img_id %}\" class=\"define_view_box_img\" title=\"{%=data.text %}\" src=\"{%=data.src %}\" />\n" +
        "              <span id=\"{%=data.text_id %}\" class=\"define_view_box_title\" title=\"{%=data.text %}\">{%=data.text %}</span>\n" +
        "            </div>\n" +
        "          {% } %}\n" +
        "          </div>\n" +
        "        {% } %}";
    return string;
}

function addDialogHtml() {

    var htmlContent = "";

    //自定义命名,切换控件类型,合成控件类型 模板
    htmlContent +=
        "      <dialog id=\"ios_switch_view_type_dialog\" class=\"fuceng\" style=\"z-index:999999;padding: 1px; border-color: white\">\n" +
        "        </dialog>\n" +
        "    \n" +
        "        <dialog id=\"android_switch_view_type_dialog\" class=\"fuceng\" style=\"z-index:999999;padding: 1px; border-color: white\">\n" +
        "        </dialog>\n" +
        "    \n" +
        "        <dialog id=\"flutter_switch_view_type_dialog\" class=\"fuceng\" style=\"z-index:999999;padding: 1px; border-color: white\">\n" +
        "        </dialog>\n" +
        "    \n" +
        "        <dialog id=\"ios_union_view_type_dialog\" class=\"fuceng\" style=\"z-index:999999;padding: 1px; border-color: white\">\n" +
        "        </dialog>\n" +
        "    \n" +
        "        <dialog id=\"android_union_view_type_dialog\" class=\"fuceng\" style=\"z-index:999999;padding: 1px; border-color: white\">\n" +
        "        </dialog>\n" +
        "    \n" +
        "        <dialog id=\"flutter_union_view_type_dialog\" class=\"fuceng\" style=\"z-index:999999;padding: 1px; border-color: white\">\n" +
        "        </dialog>\n" +
        "    ";

    //设置模板
    htmlContent +=
        "<dialog id=\"software_set_dialog\" class=\"fuceng\" style=\"z-index:999999;padding: 20px; border-color: white\">\n" +
        "    </dialog>";

    $('*[class^="lanhu_plug_in"]').after(htmlContent);
}

addDialogHtml();

//------------------- 弹窗Html模板 模块 -------------------


//------------------- 控件Dialog弹窗显示或隐藏 模块 -------------------

// OC SWIFT

/**
 * 初始化切换控件类型面板数据
 */
var ios_switch_view_type_dialog_is_init = false;
function initDefineDialogIos_OC_Swift(){
    if (ios_switch_view_type_dialog_is_init == true)return;
    ios_switch_view_type_dialog_is_init = true;

    var datas = new Array();
    var data_sub1 = new Array();
    data_sub1.push({"bg_id":"ios_switch_view_type_bg1","img_id":"ios_switch_view_type_img1","text_id":"ios_switch_view_type_text1","text":"UILabel","src":img_Label()});
    data_sub1.push({"bg_id":"ios_switch_view_type_bg2","img_id":"ios_switch_view_type_img2","text_id":"ios_switch_view_type_text2","text":"UIImageView","src":img_ImageView()});
    data_sub1.push({"bg_id":"ios_switch_view_type_bg3","img_id":"ios_switch_view_type_img3","text_id":"ios_switch_view_type_text3","text":"UIButton","src":img_Button()});
    data_sub1.push({"bg_id":"ios_switch_view_type_bg4","img_id":"ios_switch_view_type_img4","text_id":"ios_switch_view_type_text4","text":"UIView","src":img_View()});
    var data_sub2 = new Array();
    data_sub2.push({"bg_id":"ios_switch_view_type_bg5","img_id":"ios_switch_view_type_img5","text_id":"ios_switch_view_type_text5","text":"UITextField","src":img_TextField()});
    data_sub2.push({"bg_id":"ios_switch_view_type_bg6","img_id":"ios_switch_view_type_img6","text_id":"ios_switch_view_type_text6","text":"UITextView","src":img_TextView()});
    data_sub2.push({"bg_id":"ios_switch_view_type_bg7","img_id":"ios_switch_view_type_img7","text_id":"ios_switch_view_type_text7","text":"UIScrollView","src":img_ScrollView()});
    data_sub2.push({"bg_id":"ios_switch_view_type_bg8","img_id":"ios_switch_view_type_img8","text_id":"ios_switch_view_type_text8","text":"UISwitch","src":img_Switch()});
    var data_sub3 = new Array();
    data_sub3.push({"bg_id":"ios_switch_view_type_bg9","img_id":"ios_switch_view_type_img9","text_id":"ios_switch_view_type_text9","text":"UIActivityIndicatorView","src":img_ActivityIndicatorView()});
    data_sub3.push({"bg_id":"ios_switch_view_type_bg10","img_id":"ios_switch_view_type_img10","text_id":"ios_switch_view_type_text10","text":"UIProgressView","src":img_ProgressView()});
    data_sub3.push({"bg_id":"ios_switch_view_type_bg11","img_id":"ios_switch_view_type_img11","text_id":"ios_switch_view_type_text11","text":"UITableView","src":img_TableView()});
    data_sub3.push({"bg_id":"ios_switch_view_type_bg12","img_id":"ios_switch_view_type_img12","text_id":"ios_switch_view_type_text12","text":"UICollectionView","src":img_CollectionView()});
    var data_sub4 = new Array();
    data_sub4.push({"bg_id":"ios_switch_view_type_bg13","img_id":"ios_switch_view_type_img13","text_id":"ios_switch_view_type_text13","text":"UIStepper","src":img_Stepper()});
    data_sub4.push({"bg_id":"ios_switch_view_type_bg14","img_id":"ios_switch_view_type_img14","text_id":"ios_switch_view_type_text14","text":"UIPageControl","src":img_PageControl()});
    data_sub4.push({"bg_id":"ios_switch_view_type_bg15","img_id":"ios_switch_view_type_img15","text_id":"ios_switch_view_type_text15","text":"UIPickerView","src":img_PickerView()});
    data_sub4.push({"bg_id":"ios_switch_view_type_bg16","img_id":"ios_switch_view_type_img16","text_id":"ios_switch_view_type_text16","text":"UIDatePicker","src":img_DatePicker()});
    var data_sub5 = new Array();
    data_sub5.push({"bg_id":"ios_switch_view_type_bg17","img_id":"ios_switch_view_type_img17","text_id":"ios_switch_view_type_text17","text":"UIMapView","src":img_MapView()});
    data_sub5.push({"bg_id":"ios_switch_view_type_bg18","img_id":"ios_switch_view_type_img18","text_id":"ios_switch_view_type_text18","text":"UISearchBar","src":img_SearchBar()});
    data_sub5.push({"bg_id":"ios_switch_view_type_bg19","img_id":"ios_switch_view_type_img19","text_id":"ios_switch_view_type_text19","text":"WKWebView","src":img_WKWebView()});
    data_sub5.push({"bg_id":"ios_switch_view_type_bg20","img_id":"ios_switch_view_type_img20","text_id":"ios_switch_view_type_text20","text":"UISlider","src":img_Slider()});
    datas.push(data_sub1,data_sub2,data_sub3,data_sub4,data_sub5);

    var mapJson = {"root":{"datas":datas}};
    var templateInputValue = tmpl_define_dialog_father().replace(/^\n|\s+$| {6}/g,'');
    var ret = tmpl(templateInputValue, mapJson);
    ret = js_template_escape(ret);
    ret = formatXml_android(ret);
    var dialog = $("#ios_switch_view_type_dialog");
    var info_view_type_bg = $("#info_view_type_bg");
    dialog.append(ret);
    dialog.css("margin-left",(info_view_type_bg.offset().left - 70) + "px");
    dialog.css("margin-top",(info_view_type_bg.offset().top + 40) + "px");
    document.getElementById("ios_switch_view_type_dialog").addEventListener('click', function (ev) {
        if (ev.target.nodeName === 'DIALOG')hide_ios_switch_view_type_dialog();
    });
    //添加点击事件
    dialog.find("*[class*='define_view_box_view']").on({
        click: function (event) {
            var text = $(this).text();
            switch_view_type_callback(text);
            hide_ios_switch_view_type_dialog();
            event.stopPropagation();
        }
    });
}

function show_ios_switch_view_type_dialog() {
    show_dialog("ios_switch_view_type_dialog");
}
function show_swift_switch_view_type_dialog() {
    show_ios_switch_view_type_dialog();
}
function hide_ios_switch_view_type_dialog() {
    hide_dialog("ios_switch_view_type_dialog");
}

function initDefineDialogIos(){
    initDefineDialogIos_OC_Swift();
}

function initDefineDialogSwift(){
    initDefineDialogIos_OC_Swift();
}

// OC SWIFT



// 安卓

/**
 * 初始化切换控件类型面板数据
 */
var android_switch_view_type_dialog_is_init = false;
function initDefineDialogAndroid(){
    if (android_switch_view_type_dialog_is_init == true)return;
    android_switch_view_type_dialog_is_init = true;

    var datas = new Array();
    var data_sub1 = new Array();
    data_sub1.push({"bg_id":"android_switch_view_type_bg1","img_id":"android_switch_view_type_img1","text_id":"android_switch_view_type_text1","text":"TextView","src":img_Label()});
    data_sub1.push({"bg_id":"android_switch_view_type_bg2","img_id":"android_switch_view_type_img2","text_id":"android_switch_view_type_text2","text":"ImageView","src":img_ImageView()});
    data_sub1.push({"bg_id":"android_switch_view_type_bg3","img_id":"android_switch_view_type_img3","text_id":"android_switch_view_type_text3","text":"Button","src":img_Button()});
    data_sub1.push({"bg_id":"android_switch_view_type_bg4","img_id":"android_switch_view_type_img4","text_id":"android_switch_view_type_text4","text":"RelativeLayout","src":img_View()});
    var data_sub2 = new Array();
    data_sub2.push({"bg_id":"android_switch_view_type_bg5","img_id":"android_switch_view_type_img5","text_id":"android_switch_view_type_text5","text":"EditText","src":img_TextField()});
    data_sub2.push({"bg_id":"android_switch_view_type_bg7","img_id":"android_switch_view_type_img7","text_id":"android_switch_view_type_text7","text":"ScrollView","src":img_ScrollView()});
    data_sub2.push({"bg_id":"android_switch_view_type_bg8","img_id":"android_switch_view_type_img8","text_id":"android_switch_view_type_text8","text":"Switch","src":img_Switch()});
    data_sub2.push({"bg_id":"android_switch_view_type_bg10","img_id":"android_switch_view_type_img10","text_id":"android_switch_view_type_text10","text":"ProgressBar","src":img_ProgressView()});
    var data_sub3 = new Array();
    data_sub3.push({"bg_id":"android_switch_view_type_bg11","img_id":"android_switch_view_type_img11","text_id":"android_switch_view_type_text11","text":"RecyclerView","src":img_TableView()});
    data_sub3.push({"bg_id":"android_switch_view_type_bg16","img_id":"android_switch_view_type_img16","text_id":"android_switch_view_type_text16","text":"DatePicker","src":img_DatePicker()});
    data_sub3.push({"bg_id":"android_switch_view_type_bg19","img_id":"android_switch_view_type_img19","text_id":"android_switch_view_type_text19","text":"WebView","src":img_WKWebView()});
    data_sub3.push({"bg_id":"android_switch_view_type_bg20","img_id":"android_switch_view_type_img20","text_id":"android_switch_view_type_text20","text":"SeekBar","src":img_Slider()});
    datas.push(data_sub1,data_sub2,data_sub3);

    var mapJson = {"root":{"datas":datas}};
    var templateInputValue = tmpl_define_dialog_father().replace(/^\n|\s+$| {6}/g,'');
    var ret = tmpl(templateInputValue, mapJson);
    ret = js_template_escape(ret);
    ret = formatXml_android(ret);
    var dialog = $("#android_switch_view_type_dialog");
    var info_view_type_bg = $("#info_view_type_bg");
    dialog.append(ret);
    dialog.css("margin-left",(info_view_type_bg.offset().left - 70) + "px");
    dialog.css("margin-top",(info_view_type_bg.offset().top + 40) + "px");
    document.getElementById("android_switch_view_type_dialog").addEventListener('click', function (ev) {
        if (ev.target.nodeName === 'DIALOG')hide_android_switch_view_type_dialog();
    });
    //添加点击事件
    dialog.find("*[class*='define_view_box_view']").on({
        click: function (event) {
            var text = $(this).text();
            switch_view_type_callback(text);
            hide_android_switch_view_type_dialog();
            event.stopPropagation();
        }
    });
}


function show_android_switch_view_type_dialog() {
    show_dialog("android_switch_view_type_dialog");
}
function hide_android_switch_view_type_dialog() {
    hide_dialog("android_switch_view_type_dialog");
}

// 安卓


// Flutter

/**
 * 初始化切换控件类型面板数据
 */
var flutter_switch_view_type_dialog_is_init = false;
function initDefineDialogFlutter(){
    if (flutter_switch_view_type_dialog_is_init == true)return;
    flutter_switch_view_type_dialog_is_init = true;

    var datas = new Array();
    var data_sub1 = new Array();
    data_sub1.push({"bg_id":"flutter_switch_view_type_bg1","img_id":"flutter_switch_view_type_img1","text_id":"flutter_switch_view_type_text1","text":"Text","src":img_Label()});
    data_sub1.push({"bg_id":"flutter_switch_view_type_bg2","img_id":"flutter_switch_view_type_img2","text_id":"flutter_switch_view_type_text2","text":"Image","src":img_ImageView()});
    data_sub1.push({"bg_id":"flutter_switch_view_type_bg3","img_id":"flutter_switch_view_type_img3","text_id":"flutter_switch_view_type_text3","text":"Button","src":img_Button()});
    data_sub1.push({"bg_id":"flutter_switch_view_type_bg4","img_id":"flutter_switch_view_type_img4","text_id":"flutter_switch_view_type_text4","text":"Container","src":img_View()});
    var data_sub2 = new Array();
    data_sub2.push({"bg_id":"flutter_switch_view_type_bg5","img_id":"flutter_switch_view_type_img5","text_id":"flutter_switch_view_type_text5","text":"TextField","src":img_TextField()});
    // data_sub2.push({"bg_id":"flutter_switch_view_type_bg7","img_id":"flutter_switch_view_type_img7","text_id":"flutter_switch_view_type_text7","text":"ScrollView","src":img_ScrollView()});
    // data_sub2.push({"bg_id":"flutter_switch_view_type_bg8","img_id":"flutter_switch_view_type_img8","text_id":"flutter_switch_view_type_text8","text":"Switch","src":img_Switch()});
    // data_sub2.push({"bg_id":"flutter_switch_view_type_bg10","img_id":"flutter_switch_view_type_img10","text_id":"flutter_switch_view_type_text10","text":"ProgressBar","src":img_ProgressView()});
    // var data_sub3 = new Array();
    // data_sub3.push({"bg_id":"flutter_switch_view_type_bg11","img_id":"flutter_switch_view_type_img11","text_id":"flutter_switch_view_type_text11","text":"RecyclerView","src":img_TableView()});
    // data_sub3.push({"bg_id":"flutter_switch_view_type_bg16","img_id":"flutter_switch_view_type_img16","text_id":"flutter_switch_view_type_text16","text":"DatePicker","src":img_DatePicker()});
    // data_sub3.push({"bg_id":"flutter_switch_view_type_bg19","img_id":"flutter_switch_view_type_img19","text_id":"flutter_switch_view_type_text19","text":"WebView","src":img_WKWebView()});
    // data_sub3.push({"bg_id":"flutter_switch_view_type_bg20","img_id":"flutter_switch_view_type_img20","text_id":"flutter_switch_view_type_text20","text":"SeekBar","src":img_Slider()});
    datas.push(data_sub1,data_sub2);//data_sub3

    var mapJson = {"root":{"datas":datas}};
    var templateInputValue = tmpl_define_dialog_father().replace(/^\n|\s+$| {6}/g,'');
    var ret = tmpl(templateInputValue, mapJson);
    ret = js_template_escape(ret);
    ret = formatXml_flutter(ret);
    var dialog = $("#flutter_switch_view_type_dialog");
    var info_view_type_bg = $("#info_view_type_bg");
    dialog.append(ret);
    dialog.css("margin-left",(info_view_type_bg.offset().left - 70) + "px");
    dialog.css("margin-top",(info_view_type_bg.offset().top + 40) + "px");
    document.getElementById("flutter_switch_view_type_dialog").addEventListener('click', function (ev) {
        if (ev.target.nodeName === 'DIALOG')hide_flutter_switch_view_type_dialog();
    });
    //添加点击事件
    dialog.find("*[class*='define_view_box_view']").on({
        click: function (event) {
            var text = $(this).text();
            switch_view_type_callback(text);
            hide_flutter_switch_view_type_dialog();
            event.stopPropagation();
        }
    });
}


function show_flutter_switch_view_type_dialog() {
    show_dialog("flutter_switch_view_type_dialog");
}
function hide_flutter_switch_view_type_dialog() {
    hide_dialog("flutter_switch_view_type_dialog");
}

// Flutter


// 控件合成 - OC SWIFT

/**
 * 初始化合成控件类型面板数据
 */
var ios_union_view_type_dialog_is_init = false;
function initDefineUnionDialogIos_OC_Swift(){
    if (ios_union_view_type_dialog_is_init == true)return;
    ios_union_view_type_dialog_is_init = true;

    var datas = new Array();
    var data_sub1 = new Array();
    data_sub1.push({"bg_id":"ios_union_view_type_bg3","img_id":"ios_union_view_type_img3","text_id":"ios_union_view_type_text3","text":"UIButton","src":img_Button()});
    data_sub1.push({"bg_id":"ios_union_view_type_bg5","img_id":"ios_union_view_type_img5","text_id":"ios_union_view_type_text5","text":"UITextField","src":img_TextField()});
    data_sub1.push({"bg_id":"ios_union_view_type_bg6","img_id":"ios_union_view_type_img6","text_id":"ios_union_view_type_text6","text":"UITextView","src":img_TextView()});
    datas.push(data_sub1);

    var mapJson = {"root":{"datas":datas}};
    var templateInputValue = tmpl_define_dialog_father().replace(/^\n|\s+$| {6}/g,'');
    var ret = tmpl(templateInputValue, mapJson);
    ret = js_template_escape(ret);
    ret = formatXml_android(ret);
    var dialog = $("#ios_union_view_type_dialog");
    var info_view_layer_union_bg = $("#info_view_layer_union_bg");
    dialog.append(ret);
    dialog.css("margin-left",(info_view_layer_union_bg.offset().left - 70) + "px");
    dialog.css("margin-top",(info_view_layer_union_bg.offset().top + 40) + "px");
    document.getElementById("ios_union_view_type_dialog").addEventListener('click', function (ev) {
        if (ev.target.nodeName === 'DIALOG')hide_ios_union_view_type_dialog();
    });
    //添加点击事件
    dialog.find("*[class*='define_view_box_view']").on({
        click: function (event) {
            var text = $(this).text();
            union_view_type_callback(text);
            hide_ios_union_view_type_dialog();
            event.stopPropagation();
        }
    });
}

function show_ios_union_view_type_dialog() {
    show_dialog("ios_union_view_type_dialog");
}
function show_swift_union_view_type_dialog() {
    show_ios_union_view_type_dialog();
}
function hide_ios_union_view_type_dialog() {
    hide_dialog("ios_union_view_type_dialog");
}

function initDefineUnionDialogIos(){
    initDefineUnionDialogIos_OC_Swift();
}

function initDefineUnionDialogSwift(){
    initDefineUnionDialogIos_OC_Swift();
}

// 控件合成 - OC SWIFT


// 控件合成 - 安卓

/**
 * 初始化合成控件类型面板数据
 */
var android_union_view_type_dialog_is_init = false;
function initDefineUnionDialogAndroid(){
    if (android_union_view_type_dialog_is_init == true)return;
    android_union_view_type_dialog_is_init = true;

    var datas = new Array();
    var data_sub1 = new Array();
    data_sub1.push({"bg_id":"android_union_view_type_bg3","img_id":"android_union_view_type_img3","text_id":"android_union_view_type_text3","text":"Button","src":img_Button()});
    data_sub1.push({"bg_id":"android_union_view_type_bg6","img_id":"android_union_view_type_img6","text_id":"android_union_view_type_text6","text":"EditText","src":img_TextView()});
    datas.push(data_sub1);

    var mapJson = {"root":{"datas":datas}};
    var templateInputValue = tmpl_define_dialog_father().replace(/^\n|\s+$| {6}/g,'');
    var ret = tmpl(templateInputValue, mapJson);
    ret = js_template_escape(ret);
    ret = formatXml_android(ret);
    var dialog = $("#android_union_view_type_dialog");
    var info_view_layer_union_bg = $("#info_view_layer_union_bg");
    dialog.append(ret);
    dialog.css("margin-left",(info_view_layer_union_bg.offset().left - 70) + "px");
    dialog.css("margin-top",(info_view_layer_union_bg.offset().top + 40) + "px");
    document.getElementById("android_union_view_type_dialog").addEventListener('click', function (ev) {
        if (ev.target.nodeName === 'DIALOG')hide_android_union_view_type_dialog();
    });
    //添加点击事件
    dialog.find("*[class*='define_view_box_view']").on({
        click: function (event) {
            var text = $(this).text();
            union_view_type_callback(text);
            hide_android_union_view_type_dialog();
            event.stopPropagation();
        }
    });
}

function show_android_union_view_type_dialog() {
    show_dialog("android_union_view_type_dialog");
}
function hide_android_union_view_type_dialog() {
    hide_dialog("android_union_view_type_dialog");
}

// 控件合成 - 安卓



// 控件合成 - Flutter

/**
 * 初始化合成控件类型面板数据
 */
var flutter_union_view_type_dialog_is_init = false;
function initDefineUnionDialogFlutter(){
    if (flutter_union_view_type_dialog_is_init == true)return;
    flutter_union_view_type_dialog_is_init = true;

    var datas = new Array();
    var data_sub1 = new Array();
    data_sub1.push({"bg_id":"flutter_union_view_type_bg3","img_id":"flutter_union_view_type_img3","text_id":"flutter_union_view_type_text3","text":"Button","src":img_Button()});
    data_sub1.push({"bg_id":"flutter_union_view_type_bg6","img_id":"flutter_union_view_type_img6","text_id":"flutter_union_view_type_text6","text":"TextField","src":img_TextView()});
    datas.push(data_sub1);

    var mapJson = {"root":{"datas":datas}};
    var templateInputValue = tmpl_define_dialog_father().replace(/^\n|\s+$| {6}/g,'');
    var ret = tmpl(templateInputValue, mapJson);
    ret = js_template_escape(ret);
    ret = formatXml_flutter(ret);
    var dialog = $("#flutter_union_view_type_dialog");
    var info_view_layer_union_bg = $("#info_view_layer_union_bg");
    dialog.append(ret);
    dialog.css("margin-left",(info_view_layer_union_bg.offset().left - 70) + "px");
    dialog.css("margin-top",(info_view_layer_union_bg.offset().top + 40) + "px");
    document.getElementById("flutter_union_view_type_dialog").addEventListener('click', function (ev) {
        if (ev.target.nodeName === 'DIALOG')hide_flutter_union_view_type_dialog();
    });
    //添加点击事件
    dialog.find("*[class*='define_view_box_view']").on({
        click: function (event) {
            var text = $(this).text();
            union_view_type_callback(text);
            hide_flutter_union_view_type_dialog();
            event.stopPropagation();
        }
    });
}

function show_flutter_union_view_type_dialog() {
    show_dialog("flutter_union_view_type_dialog");
}
function hide_flutter_union_view_type_dialog() {
    hide_dialog("flutter_union_view_type_dialog");
}

// 控件合成 - 安卓



// 设置弹框模块

var software_set_dialog_is_init = false;
function init_software_set_dialog(){
    if (software_set_dialog_is_init == true)return;
    software_set_dialog_is_init = true;

    var templateValue = tmpl_set_dialog().replace(/^\n|\s+$| {6}/g,'');
    var dialog = $("#software_set_dialog");
    dialog.append(templateValue);
    document.getElementById("software_set_dialog").addEventListener('click', function (ev) {
        if (ev.target.nodeName === 'DIALOG')hide_software_set_dialog();
    });
}

function show_software_set_dialog() {
    show_dialog("software_set_dialog");
}
function hide_software_set_dialog() {
    hide_dialog("software_set_dialog");
}

// 设置弹框模块

//------------------- 控件Dialog弹窗显示或隐藏 模块 -------------------
