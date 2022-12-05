




//------------------- 生成约束 模块 -------------------
/**
 * 生成约束规则
 * 1.先子控件再父控件
 * 2.以上左为准则
 * 3.左右进行判断:
 * 3.1如果没有兄弟节点,走3.2
 * 3.2如果左小于右,以左为准,如果右小于左,以右为准
 * 3.3如果有左兄弟,没有右兄弟,走3.2
 * 3.4如果有右兄弟,没有左兄弟,走3.2
 * 3.5如果既有左兄弟,又有右兄弟,走2
 * 4.上下进行判断,逻辑入3所示
 * 5.宽,没有兄弟节点,如果宽大于左右:
 * 5.1如果左右相等,或相差小于5,取left,right,不用宽高
 * 5.2如果左大于右,取右和宽
 * 5.3如果右大于左,取左和宽
 * 6.宽,没有兄弟节点,如果宽小于或等于左右
 * 6.1如果左大于右,取右和宽
 * 6.2如果右大于左,取左和宽
 * 7宽,有左兄弟或右兄弟,但没有同时存在左右兄弟,走5,6
 * 8宽,同时存在左右兄弟,取左宽(但如果是flex布局,那没办法,没这么智能)
 * 9.高,同宽一致逻辑
 */

/**
 * 这里进行自动约束生成
 */
function auto_constraint(views){
    brother_father_deal(views);
    auto_constraint_recursive(views,null);
    // brother_father_clear(views);
}

/**
 * 循环递归添加约束
 */
function auto_constraint_recursive(views,father){
    //先子控件再父控件
    if (views && views.length > 0){
        for (let i = 0; i < views.length; i++) {
            var view = views[i];
            if (view){
                var childs = view["views"];
                if (childs && childs.length > 0){
                    auto_constraint_recursive(childs,view);
                }
                add_constraint(view);
            }
        }
    }
}

/**
 * 添加约束
 */
function add_constraint(view) {
    constraint_init(view);//初始化一个constraintsMap

    constraint_left(view);
    constraint_top(view);
    constraint_right(view);
    constraint_bottom(view);
    constraint_width(view);
    constraint_height(view);
    constraint_is_center_x(view);
    constraint_is_center_y(view);
}

function constraint_init(view) {
    view.constraints = {};
}

function constraint_left(view) {
    view.constraints.constraint_left = (view.leftBrother != null) ? view.x_l_brother : view.x;
}

function constraint_top(view) {
    view.constraints.constraint_top = (view.topBrother != null) ? view.y_t_brother : view.x;
}

function constraint_right(view) {
    view.constraints.constraint_right = (view.rightBrother != null) ? view.x_r_brother : view.x;
}

function constraint_bottom(view) {
    view.constraints.constraint_bottom = (view.bottomBrother != null) ? view.y_b_brother : view.x;
}

function constraint_width(view) {
    view.constraints.constraint_width = view.width;
}

function constraint_height(view) {
    view.constraints.constraint_height = view.height;
}

function constraint_is_center_x(view) {
    if (view.isCenterX)view.constraints.constraint_is_center_x = view.isCenterX;
}

function constraint_is_center_y(view) {
    if (view.isCenterY)view.constraints.constraint_is_center_y = view.isCenterY;
}

//------------------- 生成约束 模块 -------------------


