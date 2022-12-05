



//------------------- 导出公共模块 -------------------

/**
 * 是否是文本控件
 */
function isTextView(map){
    var text = map["text"];
    if (text && text.length > 0)return true;
    return false;
}

/**
 * 添加属性
 */
function addKeyValue(info,key,value){
    if (info && key && value){
        info[key] = value;
    }
}

/**
 * 去除像素单位
 */
function remove_px(text){
    if (text.includes("px")){
        text = text.replace("px","");
    }
    return text;
}

/**
 * 控件是否隐藏
 */
function isVisible_view(map){
    var visibility = map["visibility"];
    if (visibility && visibility == "hidden"){
        return false;
    }
    return true;
}

/**
 * 提起RGBA
 */
function getRGBA(color){
    if (color && color.includes("rgba(")){
        //提取rgba
        var rgbaStr = mid("rgba(",")",color);
        rgbaStr = rgbaStr.replaceAll(" ","");
        var arr = rgbaStr.split(",");
        return arr;
    }
    if (color && color.includes("rgb(")){
        //提取rgba
        var rgbaStr = mid("rgb(",")",color);
        rgbaStr = rgbaStr.replaceAll(" ","");
        var arr = rgbaStr.split(",");
        arr.push("1");
        return arr;
    }
    return new Array();
}

/**
 * class_name
 */
function set_attr_class_name(info, map){
    var className = map["className"];
    if (className && className.length > 0){
        info["className"] = className;
    }
}

/**
 * union_view
 */
function set_attr_union_view(info, map){
    var union_view = map["union_view"];
    if (union_view && union_view.length > 0){
        info["union_view"] = union_view;
    }
}

/**
 * parent
 */
function set_attr_parent(info, map){
    var parent = map["parent"];
    if (parent && parent.length > 0){
        info["parent"] = parent;
    }else {
        info["parent"] = "";
    }
}

/**
 * tagName
 */
function set_attr_tagName(info, map){
    var tagName = map["tagName"];
    if (tagName){
        if (tagName.length > 0)info["tagName"] = tagName;
    }
}

/**
 * define_values
 */
function set_attr_define_values(info, map, name){
    var value = map[name];
    if (value){
        if (value.length > 0)info[name] = value;
    }
}

/**
 * visibility
 */
function set_attr_visibility(info, map){
    var visibility = map["visibility"];
    if (visibility){
        if (visibility.length > 0)info["visibility"] = visibility;
    }
}

/**
 * window_x
 */
function set_attr_window_x(info, map){
    var window_x = map["window_x"];
    if (window_x && window_x.length > 0){
        info["window_x"] = window_x;
    }
}

/**
 * window_y
 */
function set_attr_window_y(info, map){
    var window_y = map["window_y"];
    if (window_y && window_y.length > 0){
        info["window_y"] = window_y;
    }
}

/**
 * 背景颜色
 */
function set_attr_bgcolor(info, map){
    var background_color = map["background_color"];
    if (background_color){
        var rgba = getRGBA(background_color);
        if (rgba.length > 0)addKeyValue(info,"bgColorRed",rgb_div_255(rgba[0]));
        if (rgba.length > 1)addKeyValue(info,"bgColorGreen",rgb_div_255(rgba[1]));
        if (rgba.length > 2)addKeyValue(info,"bgColorBlue",rgb_div_255(rgba[2]));
        if (rgba.length > 3)addKeyValue(info,"bgColorAlpha",rgb_div_255(rgba[3]));
        if (rgba.length > 0)addKeyValue(info,"bgColor",rgba_to_hex(rgba));
    }
}

/**
 * textColor
 */
function set_attr_textcolor(info, map){
    var text_color = map["text_color"];
    if (text_color){
        var rgba = getRGBA(text_color);
        if (rgba.length > 0)addKeyValue(info,"textColorRed",rgb_div_255(rgba[0]));
        if (rgba.length > 1)addKeyValue(info,"textColorGreen",rgb_div_255(rgba[1]));
        if (rgba.length > 2)addKeyValue(info,"textColorBlue",rgb_div_255(rgba[2]));
        if (rgba.length > 3)addKeyValue(info,"textColorAlpha",rgb_div_255(rgba[3]));
        if (rgba.length > 0)addKeyValue(info,"textColor",rgba_to_hex(rgba));
    }
}

/**
 * text
 */
function set_attr_text(info,map){
    var text = map["text"];
    if (text){
        if (text.length > 0)addKeyValue(info,"text",text);
    }
}

/**
 * font 文字大小
 */
function set_attr_font_size(info,map){
    var font_size = map["font_size"];
    if (font_size){
        if (font_size.length > 0)addKeyValue(info,"font",remove_px(font_size));
    }
}

/**
 * font_family
 * 需要适配很多字体
 */
function set_attr_font_family(info,map){
    if (isTextView(map)){
        var font_family = map["font_family"];
        if (font_family && font_family.length > 0){
            if (isIOS() || isSWIFT()){
                if (font_family == "PingFangSC-Regular" ||
                    font_family == "PingFangSC-Medium" ||
                    font_family == "PingFangSC-Semibold" ||
                    font_family == "PingFangSC-Light"
                ){
                    addKeyValue(info,"font_family",font_family);
                    addKeyValue(info,"font_family_for_name","PingFang SC");
                }
                if (font_family == "PingFangHK-Regular" ||
                    font_family == "PingFangHK-Medium"
                ){
                    addKeyValue(info,"font_family",font_family);
                    addKeyValue(info,"font_family_for_name","PingFang HK");
                }
                if (font_family == "STHeitiSC-Light"){
                    addKeyValue(info,"font_family",font_family);
                    addKeyValue(info,"font_family_for_name","STHeiti SC");
                }
                if (font_family == "DINAlternate-Bold"){
                    addKeyValue(info,"font_family",font_family);
                    addKeyValue(info,"font_family_for_name","DIN Alternate");
                }
                if (font_family == "Helvetica"){
                    addKeyValue(info,"font_family",font_family);
                    addKeyValue(info,"font_family_for_name","Helvetica");
                }
            }
            if (isFLUTTER()){
                if (font_family == "PingFangSC-Regular" ||
                    font_family == "PingFangSC-Medium" ||
                    font_family == "PingFangSC-Semibold" ||
                    font_family == "PingFangSC-Light"
                ){
                    addKeyValue(info,"font_family",font_family);
                }
                if (font_family == "PingFangHK-Regular" ||
                    font_family == "PingFangHK-Medium"
                ){
                    addKeyValue(info,"font_family",font_family);
                }
                if (font_family == "STHeitiSC-Light"){
                    addKeyValue(info,"font_family",font_family);
                }
                if (font_family == "DINAlternate-Bold"){
                    addKeyValue(info,"font_family",font_family);
                }
                if (font_family == "Helvetica"){
                    addKeyValue(info,"font_family",font_family);
                }
            }
            if (isANDROID()){
                if (font_family == "PingFangSC-Regular")addKeyValue(info,"font_family","sans-serif");
                else if (font_family == "PingFangSC-Medium")addKeyValue(info,"font_family","sans-serif-medium");
                else if (font_family == "PingFangSC-Semibold")addKeyValue(info,"font_family","sans-serif-black");
                else if (font_family == "PingFangSC-Light")addKeyValue(info,"font_family","sans-serif-light");
                else if (font_family.toLowerCase().includes("light"))addKeyValue(info,"font_family","sans-serif-light");
                else if (font_family.toLowerCase().includes("semibold"))addKeyValue(info,"font_family","sans-serif-black");
                else if (font_family.toLowerCase().includes("medium"))addKeyValue(info,"font_family","sans-serif-medium");
                else if (font_family.toLowerCase().includes("bold"))addKeyValue(info,"font_family","sans-serif-medium");
                else if (font_family.toLowerCase().includes("regular"))addKeyValue(info,"font_family","sans-serif");
            }
        }
    }
}

/**
 * text_align
 */
function set_attr_text_align(info,map){
    if (isTextView(map)){
        var text_align = map["text_align"];
        if (text_align && text_align.length > 0) {
            if (isIOS() || isSWIFT()){
                if (text_align == "left") addKeyValue(info, "align", "left");
                else if (text_align == "start") addKeyValue(info, "align", "left");
                else if (text_align == "justify") addKeyValue(info, "align", "left");
                else if (text_align == "match-parent") addKeyValue(info, "align", "left");
                else if (text_align == "right") addKeyValue(info, "align", "right");
                else if (text_align == "end") addKeyValue(info, "align", "right");
                else if (text_align == "center") addKeyValue(info, "align", "center");
                else addKeyValue(info, "align", "left");
            }
            if (isFLUTTER()){
                if (text_align == "left") addKeyValue(info, "align", "left");
                else if (text_align == "start") addKeyValue(info, "align", "start");
                else if (text_align == "justify") addKeyValue(info, "align", "justify");
                else if (text_align == "match-parent") addKeyValue(info, "align", "justify");
                else if (text_align == "right") addKeyValue(info, "align", "right");
                else if (text_align == "end") addKeyValue(info, "align", "end");
                else if (text_align == "center") addKeyValue(info, "align", "center");
                else addKeyValue(info, "align", "left");
            }
            if (isANDROID()){
                if (text_align == "left") addKeyValue(info, "align", "textStart");
                else if (text_align == "start") addKeyValue(info, "align", "textStart");
                else if (text_align == "justify") addKeyValue(info, "align", "textStart");
                else if (text_align == "match-parent") addKeyValue(info, "align", "textStart");
                else if (text_align == "right") addKeyValue(info, "align", "textEnd");
                else if (text_align == "end") addKeyValue(info, "align", "textEnd");
                else if (text_align == "center") addKeyValue(info, "align", "center");
                else addKeyValue(info, "align", "textStart");
            }
        }
    }
}

/**
 * x
 */
function set_attr_x(info,map){
    var x = map["left"];
    var margin_left = map["margin_left"];
    if (x || margin_left){
        var x_v = parseFloat(numValue(remove_px(x)));
        var margin_left_v = parseFloat(numValue(remove_px(margin_left)));
        var max = Math.max(x_v,margin_left_v);
        info["x"] = max + "";
    }
}

/**
 * y
 */
function set_attr_y(info,map){
    var y = map["top"];
    var margin_top = map["margin_top"];
    if (y || margin_top){
        var y_v = parseFloat(numValue(remove_px(y)));
        var margin_top_v = parseFloat(numValue(remove_px(margin_top)));
        var max = Math.max(y_v,margin_top_v);
        info["y"] = max + "";
    }
}

/**
 * right
 */
function set_attr_right(info,map){
    var right = map["right"];
    var margin_right = map["margin_right"];
    if (right || margin_right){
        var right_v = parseFloat(numValue(remove_px(right)));
        var margin_right_v = parseFloat(numValue(remove_px(margin_right)));
        var max = Math.max(right_v,margin_right_v);
        info["right"] = max + "";
    }
}

/**
 * bottom
 */
function set_attr_bottom(info,map){
    var bottom = map["bottom"];
    var margin_bottom = map["margin_bottom"];
    if (bottom || margin_bottom){
        var bottom_v = parseFloat(numValue(remove_px(bottom)));
        var margin_bottom_v = parseFloat(numValue(remove_px(margin_bottom)));
        var max = Math.max(bottom_v,margin_bottom_v);
        info["bottom"] = max + "";
    }
}

/**
 * width
 */
function set_attr_width(info,map){
    var width = map["width"];
    if (width){
        if (width.length > 0)info["width"] = numValue(remove_px(width));
    }
}

function get_attr_width(map){
    var width = map["width"];
    if (width && width.length > 0){
        return parseFloat(numValue(remove_px(width)));
    }
    return 0;
}

/**
 * width for textView
 */
function set_attr_width_for_textView(info,map){
    if (isTextView(map)){
        var width = map["width"];
        if (width){
            if (width.length > 0){
                if (isIOS())info["width"] = "" + (parseFloat(numValue(remove_px(width))) + 2.5);
                if (isSWIFT())info["width"] = "" + (parseFloat(numValue(remove_px(width))) + 2.5);
                if (isFLUTTER())info["width"] = "" + (numValue(remove_px(width)));
                if (isANDROID())info["width"] = "" + (numValue(remove_px(width)));
            }
        }
    }
}

/**
 * height
 */
function set_attr_height(info,map){
    var height = map["height"];
    if (height){
        if (height.length > 0)info["height"] = numValue(remove_px(height));
    }
}

function get_attr_height(map){
    var height = map["height"];
    if (height && height.length > 0){
        return parseFloat(numValue(remove_px(height)));
    }
    return 0;
}

/**
 * idStr
 */
function set_attr_idStr(info,map){
    var idStr = xml_idStr();
    info["idStr"] = idStr;
}

/**
 * viewType
 */
function set_attr_viewType(info,map){
    var viewType = map["viewType"];
    if (viewType){
        if (viewType.length > 0)info["viewType"] = viewType;
    }else {
        var tagName = map["tagName"];
        if (tagName){
            tagName = tagName.toLowerCase();
            if (tagName == "div") {//特殊一点
                if(isImgTypeView(map)) {
                    if (isIOS())viewType = "imageView";
                    if (isSWIFT())viewType = "imageView";
                    if (isFLUTTER())viewType = "image";
                    if (isANDROID())viewType = "imageView";
                }
                else {
                    if (isIOS())viewType = "view";
                    if (isSWIFT())viewType = "view";
                    if (isFLUTTER())viewType = "container";
                    if (isANDROID())viewType = "relativeLayout";
                }
            }
            if (tagName == "span") {
                if (isIOS())viewType = "label";
                if (isSWIFT())viewType = "label";
                if (isFLUTTER())viewType = "text";
                if (isANDROID())viewType = "textView";
            }
            if (tagName == "img") {
                if (isIOS())viewType = "imageView";
                if (isSWIFT())viewType = "imageView";
                if (isFLUTTER())viewType = "image";
                if (isANDROID())viewType = "imageView";
            }
            if (tagName == "button" && (auto_discern_button || (map["text"] && map["text"].length > 0))){
                viewType = "button";
            }
            if (viewType && viewType.length > 0)info["viewType"] = viewType;
            else {
                if (isIOS())info["viewType"] = "view";
                if (isSWIFT())info["viewType"] = "view";
                if (isFLUTTER())info["viewType"] = "container";
                if (isANDROID())info["viewType"] = "relativeLayout";
                console.log("不识别的元素", tagName);
            }
        }
    }
}

/**
 * border颜色
 */
function set_attr_border_color(info,map){
    var border_color = map["border"];
    if (border_color){
        if (border_color.includes("none"))return;
        var rgba = getRGBA(border_color);
        if (rgba.length > 0)addKeyValue(info,"borderColorRed",rgb_div_255(rgba[0]));
        if (rgba.length > 1)addKeyValue(info,"borderColorGreen",rgb_div_255(rgba[1]));
        if (rgba.length > 2)addKeyValue(info,"borderColorBlue",rgb_div_255(rgba[2]));
        if (rgba.length > 3)addKeyValue(info,"borderColorAlpha",rgb_div_255(rgba[3]));
        if (rgba.length > 0)addKeyValue(info,"borderColor",rgba_to_hex(rgba));
    }
}

/**
 * border radius
 */
function set_attr_border_radius(info,map){
    var border_radius = map["border_radius"];
    if (border_radius && border_radius.length > 0){
        if (border_radius.includes("%")) {
            var height = map["height"];
            if (height){
                var heightV = parseFloat(numValue(remove_px(height)));
                border_radius = border_radius.replaceAll("%","");
                if (parseFloat(numValue(remove_px(border_radius))) > 0)
                    addKeyValue(info,"border_radius",""+(heightV * border_radius / 100.0));
            }
        }
        else {
            if (parseFloat(numValue(remove_px(border_radius))) > 0)
                addKeyValue(info,"border_radius",numValue(remove_px(border_radius)));
        }
    }
}

/**
 * border width
 */
function set_attr_border_width(info,map){
    var border = map["border"];
    if (border){
        if (border.includes("none"))return;
        var border_width = midR(" ",border);
        if (border_width && border_width.length > 0) addKeyValue(info,"border_width",numValue(remove_px(border_width)));
    }
}

/**
 * 是否有子控件
 */
function haveChilds(view) {
    if (view){
        var childs = view["views"];
        if (childs && childs.length > 0){
            return true;
        }
    }
    return false;
}

function isImgDiv(map){
    if (map && map["image"]){
        var tagName = map["tagName"];
        if (tagName){
            tagName = tagName.toLowerCase();
            if (tagName == "div") {//特殊一点
                return true;
            }
        }
    }
    return false;
}

function isImgTypeView(map){
    var src = map["src"];
    var background = map["background"];
    if (src && src.includes("/img/"))return true;
    if (src && (src.includes("https://") || src.includes("http://")))return true;
    if (background && background.includes("/img/"))return true;
    if (background && (background.includes("https://") || background.includes("http://")))return true;
    return false;
}

function isViewType(map){
    if (map){
        var tagName = map["tagName"];
        if (tagName){
            tagName = tagName.toLowerCase();
            if (tagName == "div") {//特殊一点
                return true;
            }
        }
    }
    return false;
}

function isButtonType(map){
    if (map){
        var tagName = map["tagName"];
        if (tagName){
            return tagName.toLowerCase() == "button";
        }
        var viewType = map.viewType;
        if (viewType){
            return viewType.toLowerCase() == "button";
        }
    }
    return false;
}

/**
 * image
 */
function set_attr_image(info,map){
    if(isImgTypeView(map)) {
        var imgurl = "";
        var src = map["src"];
        var background = map["background"];
        if (src && src.includes("/img/")) imgurl = src;
        if (src && (src.includes("https://") || src.includes("http://"))) imgurl = src;
        if (background && background.includes("/img/")) imgurl = background;
        if (background && (background.includes("https://") || background.includes("http://"))) imgurl = background;
        if (imgurl.length <= 0)return;
        var imageName = "";
        if (imgurl.includes("/img/")) imageName = mid("/img/",".",imgurl + ".");
        if (imgurl.includes("http")) {
            if(imgurl.includes("\"")) imgurl = mid("http","\"",imgurl + "");
            imageName = midL("/",true,imgurl);
        }
        if (imageName && imageName.length > 0){
            if (isFLUTTER()) addKeyValue(info,"image",imgurl);
            else addKeyValue(info,"image",imageName.toLowerCase());
        }
    }
}

/**
 * 根据className查找控件
 */
function findView_by_className(views, className) {
    if (views && views.length > 0 && className && className.length > 0){
        for (let i = 0; i < views.length; i++) {
            var view = views[i];
            if (view){
                if (view["className"] == className) return view;
                var childs = view["views"];
                if (childs && childs.length > 0){
                    var target = findView_by_className(childs,className);
                    if(target) return target;
                }
            }
        }
    }
    //
    return null;
}

/**
 * 根据父控件查找子控件
 */
function findChildViews_by_className(views,className) {
    var childViews = new Array();
    if (views && views.length > 0 && className && className.length > 0){
        for (let i = 0; i < views.length; i++) {
            var map = views[i];
            if (map && map["parent"] == className) childViews.push(map);
        }
    }
    return childViews;
}

/**
 * 根据子控件查找父控件
 */
function findParentView_by_className(views,className) {
    if (views && views.length > 0 && className && className.length > 0){
        for (let i = 0; i < views.length; i++) {
            var map = views[i];
            if (map && map["className"] == className) return map;
        }
    }
    return null;
}

/**
 * map复制
 */
function mapCopy(map) {
    var map_copy = {};
    $.each(map,function(key,value){
        map_copy[key] = value;
    });
    return map_copy;
}

/**
 * 控件自定义名称
 */
function defineNameForView(info,defineName,defaultName) {
    if(defineName && defineName.length > 0) {
        info.defineName = defineName;
    }
    //如果没有自定义名字就赋值随机名字
    if (defaultName && defaultName.length > 0){
        if ((info["defineName"] == null || info["defineName"].length <= 0)){
            set_attr_viewType(info,info);
            var viewType = info.viewType;
            if (viewType && viewType.length > 0)info["defineName"] = viewType + defaultName;
        }
    }
}

/**
 * 控件类型切换
 */
function switchViewTypeForView(info,switchViewType) {
    if(switchViewType && switchViewType.length > 0) {
        if (!info["oriViewType"]) info["oriViewType"] = info.viewType;
        info.viewType = switchViewType;
    }
}

/**
 * 控件合成
 */
function unionViewTypeForView(views,info,unionViewType) {
    if(unionViewType && unionViewType.length > 0) {
        //unionViewType 内容格式:className1,className2,unionViewType
        var splits = unionViewType.split(",");
        if (splits.length == 3){
            var viewType = splits[2];
            if (!info["oriViewType"]) info["oriViewType"] = info.viewType;
            info.viewType = viewType;

            var className1 = splits[0];
            var className2 = splits[1];
            unionViewTypeForProperty(views,className1,className2);
        }
        return true;
    }
    return false;
}

/**
 * 控件合成,文本属性进行复制
 */
function unionViewTypeForProperty(views, className1, className2) {
    var view = findView_by_className(views,className1);
    var label = findView_by_className(views,className2);
    if (view && label){
        label.union_view = className1;

        if (label.text)view.text = label.text;
        if (label.color)view.color = label.color;
        if (label.text_color)view.text_color = label.text_color;
        if (label.font_size)view.font_size = label.font_size;
        if (label.font_family)view.font_family = label.font_family;
        if (label.line_height)view.line_height = label.line_height;
        if (label.text_align)view.text_align = label.text_align;
        if (label.justify_content)view.justify_content = label.justify_content;
        if (label.text_color)view.justify_content = label.justify_content;
    }
}

/**
 * 赋值自定义控件名,控件类型,控件合成类型
 */
function conversionSetDefineValue(views,needDefaultName) {
    if (views && views.length > 0){
        var newViews = new Array();
        var defineNames = db_getAllDataForType(Save_Data_Type_Define_Name());
        var switchViewTypes = db_getAllDataForType(Save_Data_Type_Switch_View_Type());
        var unionViewTypes = db_getAllDataForType(Save_Data_Type_Union_View_Type());

        for (let i = 0; i < views.length; i++) {
            var info = views[i];
            if (info == null)continue;
            var className = info["className"];
            var isTextViewType = isTextView(info);

            //控件类型切换
            var switchViewType = switchViewTypes[className];
            switchViewTypeForView(info,switchViewType);

            //控件合成
            var unionViewType = unionViewTypes[className];
            unionViewTypeForView(views,info,unionViewType);

            //赋值自定义控件名
            var defineName = defineNames[className];
            defineNameForView(info,defineName,needDefaultName ? (i + "") : "");

            newViews.push(info);
        }
        return newViews;
    }
    return views;
}

/**
 * 因为控件都是相对父控件的相对位置,所以这里要进行绝对x,y计算
 */
function view_position_absolute_x_y(parent,child) {
    var window_x = child["window_x"];
    var window_y = child["window_y"];
    child["x"] = window_x;
    child["y"] = window_y;
}

/**
 * 对控件不进行父子归类,递归方法
 */
function view_position_absolute_recursive(views,parents,parent){
    if (views && views.length > 0 && parents && parents.length > 0){
        //因为所有控件都是相对父控件的相对位置,所以这里要进行绝对x,y计算
        for (let i = 0; i < parents.length; i++) {
            var view = parents[i];
            var className = view["className"];
            view_position_absolute_x_y(parent,view);
            //开始递归
            var childViews = findChildViews_by_className(views,className);
            view_position_absolute_recursive(views,childViews,view);
        }
    }
}

/**
 * 对控件不进行父子归类,直接平铺在同一级上,有些用户可能想要这种
 */
function view_position_absolute(views){
    if (views && views.length > 0){
        //因为所有控件都是相对父控件的相对位置,所以这里要进行绝对x,y计算
        //要从父控件开始,寻找父控件
        var parents = new Array();
        for (let i = 0; i < views.length; i++) {
            var map = views[i];
            var parent = map["parent"];
            var parentView = findParentView_by_className(views,parent);
            if (parentView == null){
                parents.push(map);
            }
        }
        if (parents.length > 0){
            view_position_absolute_recursive(views,parents,null);
        }
    }
}

/**
 * 因为控件都是相对父控件的相对位置,所以这里要进行绝对x,y计算
 */
function view_position_relative_x_y(parent,child) {
    if (parent && child){
        //这里有个特殊的地方,就是如果parent是隐藏的,那要往上找显示的parent
        var window_x_parent = parent["window_x"];
        var window_y_parent = parent["window_y"];
        var window_x_child = child["window_x"];
        var window_y_child = child["window_y"];

        child["x"] = "" + (parseFloat(window_x_child) - parseFloat(window_x_parent));
        child["y"] = "" + (parseFloat(window_y_child) - parseFloat(window_y_parent));
    } else {
        var window_x = child["window_x"];
        var window_y = child["window_y"];
        child["x"] = window_x;
        child["y"] = window_y;
    }
}

/**
 * 特殊情况,明明是张图片,偏要用div显示,导致这个图片还可能有子控件,无法加到ios_xml,android_xml里面,因为imageview里是不允许有subviews的
 */
function imageview_position_relative_special_deal(views,view){
    if (isImgDiv(view)){//明明是张图片,偏要用div显示
        var className = view["className"];
        var childViews = findChildViews_by_className(views,className);
        if (childViews && childViews.length > 0){//还有子控件
            //1.创建一个imageview子控件
            var map_copy = mapCopy(view);
            map_copy["className"] = map_copy["className"] + "copy";
            map_copy["parent"] = view["className"];
            map_copy["idStr"] = xml_idStr();
            views.unshift(map_copy);
            //2.将这个控件变换类型,变成view
            if (isIOS())view["viewType"] = "view";
            if (isSWIFT())view["viewType"] = "view";
            if (isFLUTTER())view["viewType"] = "container";
            if (isANDROID())view["viewType"] = "relativeLayout";
        }
    }
}

/**
 * 对控件进行父子归类,递归方法
 */
function view_position_relative_recursive(views,parents,parent){
    if (views && views.length > 0 && parents && parents.length > 0){
        //因为所有控件都是相对父控件的相对位置,所以这里要进行绝对x,y计算
        for (let i = 0; i < parents.length; i++) {
            var view = parents[i];
            //特殊情况,明明是张图片,偏要用div显示,导致这个图片还可能有子控件,无法加到ios_xml,android_xml里面,
            //因为imageview里是不允许有subviews的
            imageview_position_relative_special_deal(views,view);

            var className = view["className"];
            view_position_relative_x_y(parent,view);
            //开始递归
            var childViews = findChildViews_by_className(views,className);
            if (childViews && childViews.length > 0){
                view["views"] = childViews;
                view_position_relative_recursive(views,childViews,view);
            }
        }
    }
}

/**
 * 对控件进行父子归类
 */
function view_position_relative(views){
    if (views && views.length > 0){
        var parents = new Array();
        for (let i = 0; i < views.length; i++) {
            var map = views[i];
            var parent = map["parent"];
            var parentView = findParentView_by_className(views,parent);
            if (parentView == null){
                parents.push(map);
            }
        }
        if (parents.length > 0){
            view_position_relative_recursive(views,parents,null);
            return parents;
        }
    }
    return views;
}

/**
 * 对隐藏控件进行父子归类,因为如果隐藏的控件是View,那所有子控件都需要重新指向父控件
 */
function view_deal_hide_position_relative(views){
    if (views && views.length > 0){
        for (let i = 0; i < views.length; i++) {
            var view = views[i];
            if (!isVisible_view(view)){
                var childViews = findChildViews_by_className(views,view["className"]);
                if (childViews && childViews.length > 0){
                    for (let j = 0; j < childViews.length; j++) {
                        var childView = childViews[j];
                        childView.parent = view.parent;
                    }
                }
            }
        }
    }
}

/**
 * 赋予用来适配安卓,iOS,Swift,等等控件的特性属性
 */
function conversionSetAttrValue(map){
    if (map == null)return null;
    var info = {};
    set_attr_tagName(info,map);
    set_attr_visibility(info,map);
    set_attr_class_name(info,map);
    set_attr_union_view(info,map);
    set_attr_parent(info,map);
    set_attr_bgcolor(info,map);
    set_attr_textcolor(info,map);
    set_attr_text(info,map);
    set_attr_font_size(info,map);
    set_attr_x(info,map);
    set_attr_y(info,map);
    set_attr_window_x(info,map);
    set_attr_window_y(info,map);
    set_attr_right(info,map);
    set_attr_bottom(info,map);
    set_attr_width(info,map);
    set_attr_width_for_textView(info,map);
    set_attr_height(info,map);
    set_attr_idStr(info,map);
    set_attr_viewType(info,map);
    set_attr_image(info,map);
    set_attr_font_family(info,map);
    set_attr_text_align(info,map);
    set_attr_border_color(info,map);
    set_attr_border_width(info,map);
    set_attr_border_radius(info,map);
    set_attr_define_values(info,map,"defineName");
    set_attr_define_values(info,map,"oriViewType");
    return info;
}

/**
 * 生成用于操作的Views数组,获取当前所有的views
 */
function conversionViewsPure() {
    var array = assembleProperty();
    view_deal_hide_position_relative(array);
    if (isIOS() || isSWIFT()){
        array = conversionSetDefineValue(array,true);//这一行的顺序不能后移
    }
    if (isFLUTTER()){
        array = conversionSetDefineValue(array,false);//这一行的顺序不能后移
    }
    if (isANDROID()){
        array = conversionSetDefineValue(array,false);//这一行的顺序不能后移
    }
    var views = new Array();
    for (let i = 0; i < array.length; i++) {
        var map = array[i];
        var info = conversionSetAttrValue(map);
        if (isVisible_view(map))views.push(info);
    }
    views = view_position_relative(views);
    auto_constraint(views);//生成约束
    return views;
}

/**
 * 生成用于导出sb xml的JSON Map数据
 */
function conversionViewsForXmlJson() {
    var array = assembleProperty();//拼装属性,得到控件所有属性
    view_deal_hide_position_relative(array);//对隐藏控件就行处理
    array = conversionSetDefineValue(array,false);//对自定名字,自定义控件类型进行处理,这一行的顺序不能后移
    var views = new Array();
    var mapRoot = {};
    var maxW = 375,maxH = 667;
    for (let i = 0; i < array.length; i++) {
        var map = array[i];
        var info = conversionSetAttrValue(map);
        if (isVisible_view(map))views.push(info);
        if (get_attr_width(info) > maxW)maxW = get_attr_width(info);
        if (get_attr_height(info) > maxH)maxH = get_attr_height(info);
    }
    // view_position_absolute(views);
    views = view_position_relative(views);
    auto_constraint(views);//生成约束
    mapRoot["views"] = views;
    mapRoot["idStr"] = xml_idStr();
    mapRoot["width"] = maxW;
    mapRoot["height"] = maxH;
    return mapRoot;
}

//转换成模板生成器需要的JSON数据格式
function conversionTemplateJson(){
    var mapJson = {};
    mapJson["root"] = conversionViewsForXmlJson();
    return mapJson;
}

//一键导出xml布局
function export_xml() {
    //main模板数据
    var templateInputValue = "";
    if (isIOS()) templateInputValue = tmpl_ios_viewcontroller();
    if (isSWIFT()) templateInputValue = tmpl_ios_viewcontroller();
    if (isFLUTTER()) templateInputValue = tmpl_flutter_xml();
    if (isANDROID()) templateInputValue = tmpl_android_xml();
    var ret = tmpl(templateInputValue.replace(/^\n|\s+$| {6}/g,''), conversionTemplateJson());
    ret = js_template_escape(ret);
    if (isIOS())ret = formatXml_ios(ret);
    if (isSWIFT())ret = formatXml_ios(ret);
    if (isFLUTTER())ret = formatXml_flutter(ret);
    if (isANDROID())ret = formatXml_android(ret);

    if (isIOS() || isSWIFT()){
        //导出.storyboard
        saveAs(new Blob([ret]), 'export.storyboard');
    }
    if (isFLUTTER()){
        //导出.storyboard
        saveAs(new Blob([ret]), 'export.dart');
    }
    if (isANDROID()){
        //导出.xml
        saveAs(new Blob([ret]), 'export.xml');
    }
}

/**
 * 导出局部xml的代码,也就是纯手写代码 Object-C,Swift等等
 * selView 当前选中的控件
 * includeChild 是否要导出子控件
 */
function export_xml_for_selview(selView,includeChild) {
    if (selView){
        // console.log(selView)
        if (includeChild == false) delete selView["views"];
        var templateViewsValue = "";
        if (isIOS()) templateViewsValue = tmpl_ios_code_views().replace(/^\n|\s+$| {6}/g,'');
        if (isSWIFT()) templateViewsValue = tmpl_swift_code_views().replace(/^\n|\s+$| {6}/g,'');
        if (isFLUTTER()) templateViewsValue = tmpl_flutter_views().replace(/^\n|\s+$| {6}/g,'');
        if (isANDROID()) templateViewsValue = tmpl_android_views().replace(/^\n|\s+$| {6}/g,'');
        var map = {};
        var views = new Array();
        views.push(selView);
        map['root'] = views;
        var ret = tmpl(templateViewsValue, map);
        if (ret){
            ret = js_template_escape(ret);
            if (isIOS())ret = formatCode_ios(ret);
            if (isSWIFT())ret = formatCode_swift(ret);
            if (isFLUTTER())ret = formatXml_flutter_special(ret);
            if (isANDROID())ret = formatXml_android_special(ret);
            //console.log(ret)
            return ret;
        }
    }
    return "";
}


//------------------- 导出公共模块 -------------------