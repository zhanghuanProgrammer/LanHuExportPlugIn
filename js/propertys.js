




//------------------- 控件信息组合 模块 -------------------



function assembleProperty(){
    //拼装属性,得到控件所有属性
    var array = new Array();
    var cur = 0;

    //获取画布的x,y
    var canvas_x = $('*[class*="page_plug_in_copy"]').offset().left;
    var canvas_y = $('*[class*="page_plug_in_copy"]').offset().top;

    $('*[class^="page_plug_in_copy"]').find("*").each(function(){
        var isClass = false;
        var className = "";
        var src = "";
        $.each(this.attributes, function() {
            if(this.specified) {
                var name = this.name;
                var value = this.value;
                if(name == "src") src = value;
                if(name == "class"){
                    className = value;
                    isClass = true;
                }
            }
        });
        if(isClass == true){
            //拼装属性
            var map = {};
            map["cur"] = cur.toString();cur ++;
            map["className"] = className.toString();
            var tagName = $(this)[0].tagName;  map["tagName"] = tagName.toString();
            var index = $(this).parents().length;  map["index"] = index.toString();
            var brother_index = $(this).index();  map["brother_index"] = brother_index.toString();
            var parent = $(this).parent().prop("class"); map["parent"] = parent.toString();
            var visibility = $(this).css("visibility");map["visibility"] = visibility;
            var window_x = $(this).offset().left - canvas_x;  map["window_x"] = window_x.toString();
            var window_y = $(this).offset().top - canvas_y;  map["window_y"] = window_y.toString();
            var width = $(this).width();  map["width"] = width.toString();
            var height = $(this).height();  map["height"] = height.toString();
            var background_color = $(this).css("background-color");  map["background_color"] = background_color.toString();
            var left = $(this).css("left");  map["left"] = left.toString();
            var top = $(this).css("top");  map["top"] = top.toString();
            var right = $(this).css("right");  map["right"] = right.toString();
            var bottom = $(this).css("bottom");  map["bottom"] = bottom.toString();
            var margin = $(this).css("margin");  map["margin"] = margin.toString();
            var margin_top = $(this).css("margin-top");  map["margin_top"] = margin_top.toString();
            var margin_left = $(this).css("margin-left");  map["margin_left"] = margin_left.toString()
            var margin_right = $(this).css("margin-right");  map["margin_right"] = margin_right.toString();
            var margin_bottom = $(this).css("margin-bottom");  map["margin_bottom"] = margin_bottom.toString();
            var color = $(this).css("color");  map["color"] = color.toString();
            var font_size = $(this).css("font-size");  map["font_size"] = font_size.toString();
            var font_family = $(this).css("font-family");  map["font_family"] = font_family.toString();
            var line_height = $(this).css("line-height");  map["line_height"] = line_height.toString();
            var text_align = $(this).css("text-align");  map["text_align"] = text_align.toString();
            var border = $(this).css("border");  map["border"] = border.toString();
            var border_radius = $(this).css("border-radius");  map["border_radius"] = border_radius.toString();
            var background = $(this).css("background");  map["background"] = background.toString();
            var justify_content = $(this).css("justify-content");  map["justify_content"] = justify_content.toString();
            var display = $(this).css("display");  map["display"] = display.toString();
            var flex_direction = $(this).css("flex-direction");  map["flex_direction"] = flex_direction.toString();
            var opacity = $(this).css("opacity");  map["opacity"] = opacity.toString();
            var align_items = $(this).css("align-items");  map["align_items"] = align_items.toString();
            if (tagName.toLowerCase() == "span"){
                var text = $(this).text();  map["text"] = text;
                if(color) map["text_color"] = color;
            }
            if (tagName.toLowerCase() == "button"){
                var text = $(this).html();
                if (!text.includes("<")){
                    map["text"] = text;
                    if(color) map["text_color"] = color;
                }
            }
            if (src && src.length > 0) map["src"] = src;
            array.push(map);
        }
    });
    return array;
}

function assemblePropertyForView(thisV){
    //拼装属性,得到控件所有属性
    var array = new Array();
    var cur = 0;

    //获取画布的x,y
    var canvas_x = thisV.offset().left;
    var canvas_y = thisV.offset().top;

    thisV.find("*").each(function(){
        var isClass = false;
        var className = "";
        var src = "";
        $.each(this.attributes, function() {
            if(this.specified) {
                var name = this.name;
                var value = this.value;
                if(name == "src") src = value;
                if(name == "class"){
                    className = value;
                    isClass = true;
                }
            }
        });
        if(isClass == true){
            //拼装属性
            var map = {};
            map["cur"] = cur.toString();cur ++;
            map["className"] = className.toString();
            var tagName = $(this)[0].tagName;  map["tagName"] = tagName.toString();
            var index = $(this).parents().length;  map["index"] = index.toString();
            var brother_index = $(this).index();  map["brother_index"] = brother_index.toString();
            var parent = $(this).parent().prop("class"); map["parent"] = parent.toString();
            var visibility = $(this).css("visibility");map["visibility"] = visibility;
            var window_x = $(this).offset().left - canvas_x;  map["window_x"] = window_x.toString();
            var window_y = $(this).offset().top - canvas_y;  map["window_y"] = window_y.toString();
            var width = $(this).width();  map["width"] = width.toString();
            var height = $(this).height();  map["height"] = height.toString();
            var background_color = $(this).css("background-color");  map["background_color"] = background_color.toString();
            var left = $(this).css("left");  map["left"] = left.toString();
            var top = $(this).css("top");  map["top"] = top.toString();
            var right = $(this).css("right");  map["right"] = right.toString();
            var bottom = $(this).css("bottom");  map["bottom"] = bottom.toString();
            var margin = $(this).css("margin");  map["margin"] = margin.toString();
            var margin_top = $(this).css("margin-top");  map["margin_top"] = margin_top.toString();
            var margin_left = $(this).css("margin-left");  map["margin_left"] = margin_left.toString()
            var margin_right = $(this).css("margin-right");  map["margin_right"] = margin_right.toString();
            var margin_bottom = $(this).css("margin-bottom");  map["margin_bottom"] = margin_bottom.toString();
            var color = $(this).css("color");  map["color"] = color.toString();
            var font_size = $(this).css("font-size");  map["font_size"] = font_size.toString();
            var font_family = $(this).css("font-family");  map["font_family"] = font_family.toString();
            var line_height = $(this).css("line-height");  map["line_height"] = line_height.toString();
            var text_align = $(this).css("text-align");  map["text_align"] = text_align.toString();
            var border = $(this).css("border");  map["border"] = border.toString();
            var border_radius = $(this).css("border-radius");  map["border_radius"] = border_radius.toString();
            var background = $(this).css("background");  map["background"] = background.toString();
            var justify_content = $(this).css("justify-content");  map["justify_content"] = justify_content.toString();
            var display = $(this).css("display");  map["display"] = display.toString();
            var flex_direction = $(this).css("flex-direction");  map["flex_direction"] = flex_direction.toString();
            var opacity = $(this).css("opacity");  map["opacity"] = opacity.toString();
            var align_items = $(this).css("align-items");  map["align_items"] = align_items.toString();
            if (tagName.toLowerCase() == "span"){
                var text = $(this).text();  map["text"] = text;
                if(color) map["text_color"] = color;
            }
            if (tagName.toLowerCase() == "button"){
                var text = $(this).html();
                if (!text.includes("<")){
                    map["text"] = text;
                    if(color) map["text_color"] = color;
                }
            }
            if (src && src.length > 0) map["src"] = src;
            array.push(map);
        }
    });
    return array;
}

//------------------- 控件信息组合 模块 -------------------


