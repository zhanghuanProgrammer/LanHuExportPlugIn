
//------------------- Dom 模块 -------------------

/**
 * 查找dom
 */
function findDomView(className) {
    var view = $('*[class*="page_plug_in_copy"]').find("*[class*='"+className+"']");
    return view;
}

/**
 * Toast提示
 */
function showToast(msg){
    var m = document.createElement('div');
    m.innerHTML = msg;
    m.style.cssText="width:20%; font-size: 8px;background:#000; opacity:0.8; height:auto;min-height: 30px; color:#fff; line-height:30px; text-align:center; border-radius:4px; position:fixed; top:10%; left:40%; z-index:999999;";
    document.body.appendChild(m);
    setTimeout(function() {
        var d = 0.5;
        m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
        m.style.opacity = '0';
        setTimeout(function() { document.body.removeChild(m) }, d * 1000);
    }, 1500);
}

/**
 * 显示dialog
 */
function show_dialog(elementId) {
    var dialog = document.getElementById(elementId);
    if (dialog != null) dialog.showModal();
}

/**
 * 隐藏dialog
 */
function hide_dialog(elementId) {
    var dialog = document.getElementById(elementId);
    if (dialog != null) dialog.close();
}

//------------------- Dom 模块 -------------------
