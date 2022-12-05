
//------------------- 自动识别和一些必要逻辑 模块 -------------------

/**
 * 自动识别button按钮
 */
function auto_discern_button_fun(views) {
    if (views != null && views.length > 0){
        for (let i = 0; i < views.length; i++) {
            var view = views[i];
            if (view){
                if (isTextView(view) &&
                    view.brothers.length <= 1 &&
                    view.father != null &&
                    view.father.viewType != null &&
                    view.father.viewType.toLowerCase() == "button"){
                    union_view_type_func(view.className,view.father.className,"button");
                }
                var childs = view["views"];
                auto_discern_button_fun(childs);
            }
        }
    }
}

/**
 * 自动识别父控件是div,子控件是文本控件,然后子控件在父控件中央的按钮
 */
function auto_discern_div_text_button_fun(views) {
    if (views != null && views.length > 0){
        for (let i = 0; i < views.length; i++) {
            var view = views[i];
            if (view){
                if (isTextView(view) &&
                    view.isCenterX && view.isCenterY &&
                    view.brothers.length <= 1 &&
                    view.father != null &&
                    view.father.viewType != null &&
                    isViewType(view.father)){
                    union_view_type_func(view.className,view.father.className,"button");
                }
                var childs = view["views"];
                auto_discern_div_text_button_fun(childs);
            }
        }
    }
}

/**
 * 自动识别和处理一些事情
 */
function auto_discern_and_do_something() {
    if (!can_auto_do_something)return;
    var views = conversionViewsPure();
    if (views == null || views.length <= 0) return;
    brother_father_deal(views);
    if(auto_discern_button)auto_discern_button_fun(views);
    if(auto_discern_div_text_button)auto_discern_div_text_button_fun(views);
    brother_father_clear(views);
}

auto_discern_and_do_something();

//------------------- 自动识别和一些必要逻辑 模块 -------------------
