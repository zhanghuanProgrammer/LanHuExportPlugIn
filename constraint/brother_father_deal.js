




//------------------- 设置父节点,兄弟节点 模块 -------------------

// 为了方便约束计算,需要临时计算和组装数据,方便后面添加约束的时候直接用到,而不是需要用到的是才去计算某个需要的值,这样的好处就是规范好维护,
// 要计算和组装数据包括控件的maxX,maxY,centerX,centerY,father,brothers,brother_index,brother_top,brother_left,brother_right,brother_bottom,leftBrother,rightBrother,topBrother,bottomBrother等等

function brother_father_deal(views){
    //递归处理整个节点树
    brother_father_deal_recursive(views,null);
}

function brother_father_deal_recursive(views,father){
    if (views && views.length > 0){
        for (let i = 0; i < views.length; i++) {
            var view = views[i];
            if (view){
                if (father != null) view["father"] = father;
                var childs = view["views"];
                brother_father_deal_recursive(childs,view);//先遍历处理子节点,在处理父节点
                brothers_deal(childs);
            }
        }
    }
}

/**
 * 控件根据xy按照从上到下,从左到右排序,开始处理子节点
 */
function brothers_deal(views) {
    if (views && views.length > 0){
        var views_copy = views.concat();//复制一份组数
        //进行xy按照从上到下,从左到右排序
        views_copy.sort(function (view1, view2) {
            var x1 = parseFloat(view1.x);
            var x2 = parseFloat(view2.x);
            var y1 = parseFloat(view1.y);
            var y2 = parseFloat(view2.y);
            if (y1 > y2) {
                return 1;
            }else if (y1 < y2) {
                return -1;
            }else{
                if (x1 > x2) {
                    return 1;
                }else if (x1 < x2) {
                    return -1;
                }
            }
            return 0;
        });
        //对排序后的兄弟节点进行更多信息计算和组装
        for (let i = 0; i < views_copy.length; i++) {
            var view = views_copy[i];
            view.brother_index = (""+i);
            view.brothers = views;
            view.maxX = "" + (parseFloat(view.x) + parseFloat(view.width));
            view.maxY = "" + (parseFloat(view.y) + parseFloat(view.height));
            view.centerX = "" + (parseFloat(view.x) + parseFloat(view.width) / 2);
            view.centerY = "" + (parseFloat(view.y) + parseFloat(view.height) / 2);
            view.x_r = "" + (parseFloat(view.father.width) - parseFloat(view.maxX));
            view.y_b = "" + (parseFloat(view.father.height) - parseFloat(view.maxY));
            view.isCenterX = Math.abs(parseFloat(view.centerX) - parseFloat(view.father.width) / 2) <= 3;
            view.isCenterY = Math.abs(parseFloat(view.centerY) - parseFloat(view.father.height) / 2) <= 3;

            var leftBrother = getBrotherLRTB(views_copy,view,true,false,false,false);
            var rightBrother = getBrotherLRTB(views_copy,view,false,true,false,false);
            var topBrother = getBrotherLRTB(views_copy,view,false,false,true,false);
            var bottomBrother = getBrotherLRTB(views_copy,view,false,false,false,true);
            if (leftBrother != null) {
                view.leftBrother = leftBrother;
                view.x_l_brother = "" + (parseFloat(view.x) - parseFloat(view.leftBrother.maxX));
            }
            if (rightBrother != null) {
                view.rightBrother = rightBrother;
                view.x_r_brother = "" + (parseFloat(view.rightBrother.x) - parseFloat(view.maxX));
            }
            if (topBrother != null) {
                view.topBrother = topBrother;
                view.y_t_brother = "" + (parseFloat(view.y) - parseFloat(view.topBrother.maxY));
            }
            if (bottomBrother != null) {
                view.bottomBrother = bottomBrother;
                view.y_b_brother = "" + (parseFloat(view.bottomBrother.y) - parseFloat(view.maxY));
            }
        }
    }
}

/**
 * 获取兄弟节点 isLeft:获取左兄弟 isRight:获取右兄弟 isTop:获取上面兄弟 isBottom:获取下面兄弟
 */
function getBrotherLRTB(views,curView,isLeft,isRight,isTop,isBottom) {
    if (views && views.length > 0 && curView){

        var targetView = null;

        var left_brother_maxX = 0;
        var right_brother_minX = 100000;
        var top_brother_maxY = 0;
        var bottom_brother_minY = 100000;

        var x_cur = parseFloat(curView.x);
        var y_cur = parseFloat(curView.y);
        var maxX_cur = parseFloat(curView.maxX);
        var maxY_cur = parseFloat(curView.maxY);

        for (let i = 0; i < views.length; i++) {
            var view = views[i];

            var x = parseFloat(view.x);
            var y = parseFloat(view.y);
            var maxX = parseFloat(view.maxX);
            var maxY = parseFloat(view.maxY);

            if (isLeft || isRight){
                if (maxY <= y_cur) continue;//如果在当前控件的上面
                if (y >= maxY_cur) continue;//如果在当前控件的下面
            }
            if (isTop || isBottom){
                if (maxX <= x_cur) continue;//如果在当前控件的左边
                if (x >= maxX_cur) continue;//如果在当前控件的右边
            }

            if (isLeft && maxX > x_cur) continue;//如果不在当前控件的左边
            if (isRight && x < maxX_cur) continue;//如果不在当前控件的右边
            if (isTop && maxY > y_cur) continue;//如果不在当前控件的上面
            if (isBottom && y < maxY_cur) continue;//如果不在当前控件的下面

            if (isLeft){
                if (maxX > left_brother_maxX){
                    left_brother_maxX = maxX;
                    targetView = view;
                }
            }
            if (isRight){
                if (x < right_brother_minX){
                    right_brother_minX = x;
                    targetView = view;
                }
            }
            if (isTop){
                if (maxY > top_brother_maxY){
                    top_brother_maxY = maxY;
                    targetView = view;
                }
            }
            if (isBottom){
                if (y < bottom_brother_minY){
                    bottom_brother_minY = y;
                    targetView = view;
                }
            }
        }
        if (targetView)return targetView;
    }
    return null;
}


//------------------- 设置父节点,兄弟节点 模块 -------------------






//------------------- 清除节点新增的组装数据 模块 -------------------

function brother_father_clear(views){
    if (views && views.length > 0){
        for (let i = 0; i < views.length; i++) {
            var view = views[i];
            if (view){
                if (view["father"] != null) delete view["father"];
                if (view["brothers"] != null) delete view["brothers"];
                if (view["brother_index"] != null) delete view["brother_index"];
                if (view["brother_top"] != null) delete view["brother_top"];
                if (view["brother_left"] != null) delete view["brother_left"];
                if (view["brother_right"] != null) delete view["brother_right"];
                if (view["brother_bottom"] != null) delete view["brother_bottom"];
                if (view["maxX"] != null) delete view["maxX"];
                if (view["maxY"] != null) delete view["maxY"];
                if (view["centerX"] != null) delete view["centerX"];
                if (view["centerY"] != null) delete view["centerY"];
                if (view["isCenterX"] != null) delete view["isCenterX"];
                if (view["isCenterY"] != null) delete view["isCenterY"];
                if (view["x_r"] != null) delete view["x_r"];
                if (view["y_b"] != null) delete view["y_b"];
                if (view["leftBrother"] != null) delete view["leftBrother"];
                if (view["rightBrother"] != null) delete view["rightBrother"];
                if (view["topBrother"] != null) delete view["topBrother"];
                if (view["bottomBrother"] != null) delete view["bottomBrother"];
                if (view["x_l_brother"] != null) delete view["x_l_brother"];
                if (view["x_r_brother"] != null) delete view["x_r_brother"];
                if (view["y_t_brother"] != null) delete view["y_t_brother"];
                if (view["y_b_brother"] != null) delete view["y_b_brother"];
                var childs = view["views"];
                brother_father_clear(childs);//递归处理整个节点树
            }
        }
    }
}

//------------------- 清除节点新增的组装数据 模块 -------------------