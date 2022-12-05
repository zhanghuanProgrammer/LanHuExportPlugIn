// 向页面注入浮动面板
function injectPopPannel()
{
    var page = getHtmlContent();
    $("body").before(page);
}

function injectCss() {
    var style = document.createElement('style');
    style.innerText = getCssContent().replaceAll("\n","");
    document.head.appendChild(style);
}

injectCss();// 向页面注入样式
injectPopPannel();// 向页面注入浮动面板

//添加事件
function page_element_inject_event() {
    $('*').each(function(){
        var is_lanhu_select = false;
        $.each(this.attributes, function() {
            if(this.specified) {
                var name = this.name;
                var value = this.value;
                if(name == "class"){
                    is_lanhu_select = value == "lanhu_select";
                }
            }
        });
        if (is_lanhu_select) {
        }else{
            $(this).on({
                click: function (event) {

                },
                mouseout: function (event) {
                    $(this).css({"outline":""});
                },
                mouseover: function (event) {
                    $(this).css({"outline":"blue dashed 1px"});
                },
            });
        }
    });
}
//page_element_inject_event();