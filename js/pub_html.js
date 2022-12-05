


//------------------- 公用模板 模块 -------------------

//操作模板
function operating_area() {
    var string =
        "          <div class='operating_div'>\n" +
        "            <div class='operating_subdiv'>\n" +
        "              <div class='plug_in_operating_area'><img style='width: 22px;height: 22px;' id='close_plug_in_img' title='关闭插件' class='plug_in_operating_area_img' src='"+close_plug_in_img()+"'/></div>\n" +
        "              <div class='plug_in_operating_area'><img style='width: 22px;height: 22px;' id='all_visiable_img' title='全部选择' class='plug_in_operating_area_img' src='"+all_visiable_img()+"'/></div>\n" +
        "              <div class='plug_in_operating_area'><img style='width: 22px;height: 22px;' id='all_invisiable_img' title='清空选择' class='plug_in_operating_area_img' src='"+all_invisiable_img()+"'/></div>\n" +
        "              <div class='plug_in_operating_area'><img style='width: 22px;height: 22px;' id='software_set_img' title='设置' class='plug_in_operating_area_img' src='"+software_set_img()+"'/></div>\n" +
        "              <div class='plug_in_operating_area'><img style='width: 22px;height: 22px;' id='help_img' title='查看帮助' class='plug_in_operating_area_img' src='"+help_img()+"'/></div>\n" +
        "            </div>\n" +
        "          </div>\n";
    return string;
}

//语言切换模板
function operating_lan() {
    var string =
        "      <div class='operating_lan_div'>\n" +
        "            <div class='operating_lan_subdiv'>\n" +
        "              <div id='switch_ios_img' style='opacity:1;' class='plug_in_operating_area'><img style='width: 22px;height: 22px;' title='切换成iOS' class='plug_in_operating_area_img' src='"+switch_ios_img()+"'/></div>\n" +
        "              <div id='switch_android_img' style='opacity:0.3;' class='plug_in_operating_area'><img style='width: 22px;height: 22px;' title='切换成Android' class='plug_in_operating_area_img' src='"+switch_android_img()+"'/></div>\n" +
        "              <div id='switch_swift_img' style='opacity:0.3;' class='plug_in_operating_area'><img style='width: 22px;height: 22px;' title='切换成Swift' class='plug_in_operating_area_img' src='"+switch_swift_img()+"'/></div>\n" +
        "              <div id='switch_flutter_img' style='opacity:0.3;' class='plug_in_operating_area'><img style='width: 22px;height: 22px;' title='切换成Flutter' class='plug_in_operating_area_img' src='"+switch_flutter_img()+"'/></div>\n" +
        "            </div>\n" +
        "          </div>";
    return string;
}

//控件信息显示模块
function show_info_view() {
    var string =
        "    <div id='show_info_view_bg' class='fuceng' style='margin-left: 0px;'>\n" +
        "          <div class='plug_in_subtitle'>控件信息</div>\n" +
        "          <div style='height:10px;'></div>\n" +
        "          <div class='plus-in-flex-row'>\n" +
        "            <span class='plug_in_item_title'>类型</span>\n" +
        "            <div id='info_view_type_bg' class='plug_in_item_value plus-in-flex-row' style='pointer-events: none'>\n" +
        "              <div style='width: 189px;height: 40px;' class='plus-in-flex-row'>\n" +
        "                <div style='width: 150px;min-width: 150px;height: 40px;'>\n" +
        "                  <span id='info_view_type' style='width: 189px;height: 40px;padding: 0px 30px 0px 8px;'>未选择</span>\n" +
        "                </div>\n" +
        "                <img id='info_view_type_img' style='pointer-events: none;opacity: 0;height: 15px;width: 15px;margin-left: 17px;margin-top: 12px;' src='"+info_view_type_img()+"'>\n" +
        "              </div>\n" +
        "            </div>\n" +
        "          </div>\n" +
        "    \n" +
        "          <div style='height:10px;'></div>\n" +
        "          <div class='plus-in-flex-row'>\n" +
        "            <span class='plug_in_item_title'>命名</span>\n" +
        "            <div id='info_view_define_name_bg' class='plug_in_item_input_value plus-in-flex-row' style='pointer-events: none'>\n" +
        "              <div style='width: 189px;height: 40px;' class='plus-in-flex-row'>\n" +
        "                <div style='width: 150px;min-width: 150px;height: 40px;'>\n" +
        "                  <input id='info_view_define_name' style='width: 150px;height: 40px; border: 1px;background: #f7f9fc;padding: 0px 30px 0px 8px;' placeholder='未命名'>\n" +
        "                </div>\n" +
        "                <img id='info_view_define_name_img' style='pointer-events: none; opacity: 0;height: 15px;width: 15px;margin-left: 15px;margin-top: 12px;' src='"+info_view_define_name_img()+"'>\n" +
        "              </div>\n" +
        "            </div>\n" +
        "          </div>\n" +
        "    \n" +
        "          <div style='height:10px;'></div>\n" +
        "          <div class='plus-in-flex-row'>\n" +
        "            <span class='plug_in_item_title'>合成</span>\n" +
        "            <div id='info_view_layer_union_bg' class='plug_in_item_value plus-in-flex-row' style='pointer-events: none'>\n" +
        "              <div style='width: 189px;height: 40px;' class='plus-in-flex-row'>\n" +
        "                <div style='width: 150px;min-width: 150px;height: 40px;'>\n" +
        "                  <span id='info_view_layer_union' style='padding: 0px 30px 0px 8px;'>未选择</span>\n" +
        "                </div>\n" +
        "                <img id='info_view_layer_union_img' style='pointer-events: none;opacity: 0; height: 13px;width: 13px;margin-left: 17px;margin-top: 13px;' src='"+info_view_layer_union_img()+"'>\n" +
        "              </div>\n" +
        "            </div>\n" +
        "          </div>\n" +
        "    \n" +
        "          <div style='height:10px;'></div>\n" +
        "          <div class='plus-in-flex-col'>\n" +
        "            <span class='plug_in_item_title'>代码</span>\n" +
        "            <p id='info_view_code' class='code_plug_in_item_value' style='width: 230px; height: 300px;max-height: 300px; margin-left: 24px;overflow: auto;'>\n" +
        "            </p>\n" +
        "          </div>\n" +
        "          <div style='height:50px;'></div>\n" +
        "    \n" +
        "          <div class='plug_in_view-btn'>\n" +
        "            <div id='export_xml' class='plug_in_view plus-in-flex-row'>\n" +
        "              <div style='margin: auto;'>\n" +
        "                <img id='export_btn_img' style='height: 20px;width: 20px;margin-top: 9px;position: absolute;' src='"+export_btn_img_ios()+"'/>\n" +
        "                <span id='export_btn_text' style='margin-left: 25px;'>生成iOS布局</span>\n" +
        "              </div>\n" +
        "            </div>\n" +
        "          </div>\n" +
        "    \n" +
        "        </div>";
    return string;
}

//软件介绍模块
function tmpl_set_dialog() {
    var string =
        "      <div>\n" +
        "          <p class='plug_in_set_ui_css'>\n" +
        "            软件版本:v1.0.1<br><br>\n" +
        "            软件功能介绍:<br>\n" +
        "            蓝湖辅助工具,从网页界面上直接生成控件代码,包含文本,颜色,字体大小,控件大小边距,圆角等等属性.<br>\n" +
        "            代码开源,代码还算规范,注释清晰,正打算学习网页开发的朋友可以练手<br><br>\n" +
        "            软件使用介绍:<br>\n" +
        "            1.点击左上角切换页面,只需要从蓝湖复制两串代码,就可以切换成你指定的蓝湖界面.<br>\n" +
        "            2.左边面板,鼠标移到界面元素上,会有对应的虚线. 可单击和长按来进行选中和不选中,单击是针对单独的控件,长按是针对该控件以及子控件.<br>\n" +
        "            3.中间面板,鼠标移到界面元素上,会有对应的虚线. 可单击和长按来进行查看控件的生成代码,单击是查看该控件以及子控件的组合代码. 长按是仅查看该控件的代码,不包含子控件.<br><br>\n" +
        "            正在开发中的功能:<br>\n" +
        "            1.支持自动生成约束<br>\n" +
        "            2.支持用户自定义语言模板<br><br>\n" +
        "            备注:使用中如有疑问或Bug,可查看帮助,或加QQ群:481431442(无需验证),或联系开发者微信号:13077821373(无需验证),欢迎打扰,纯粹本着开源精神,能帮助到大家就足够了<br><br>\n" +
        "            开源地址1:<a href=\"https://github.com/zhanghuanProgrammer/LanHuExport\" target=\"_blank\">GitHub开源地址</a><br>\n" +
        "            开源地址2:<a href=\"https://download.csdn.net/download/qq_35166501/86565258?spm=1001.2014.3001.5503\" target=\"_blank\">CSDN资源下载(不需要币),GitHub访问不了时请从这里下载</a>\n" +
        "          </p>\n" +
        "        </div>";
    return string;
}

//------------------- 公用模板 模块 -------------------



