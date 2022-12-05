
(function initPage(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab=tabs[0];
        var access=tab.url.startsWith("http")&&(!tab.url.startsWith('https://chrome.google.com'));
        if(access){
            // 注入脚本，接收错误回显
            chrome.tabs.executeScript(null, {
                file: "checkInsertedJs.js"
            }, function () {
                if (chrome.runtime.lastError) {
                    alert("发送错误,请联系开发者13077821373(微信号)")
                }
            });
        }
    });
})();

// 监听来消息 checkHaveInserted
chrome.runtime.onMessage.addListener(function (request, sender) {
    if (request.action != "checkHaveInserted") {
        return
    }
    var canInsert = request.source;
    if (!canInsert) {closeSelf();return;}

    chrome.tabs.executeScript({
        file : "utils/jquery.js"
    });
    chrome.tabs.executeScript({
        file : "utils/FileSaver.js"
    });
    chrome.tabs.executeScript({
        file : "utils/jszip.js"
    });
    chrome.tabs.executeScript({
        file : "config/config.js"
    });
    chrome.tabs.executeScript({
        file : "config/global_var.js"
    });
    chrome.tabs.executeScript({
        file : "utils/md5.js"
    });
    chrome.tabs.executeScript({
        file : "utils/storageutils.js"
    });
    chrome.tabs.executeScript({
        file : "utils/stringutils.js"
    });
    chrome.tabs.executeScript({
        file : "js/img_base64.js"
    });
    chrome.tabs.executeScript({
        file : "js/cssContent.js"
    });
    chrome.tabs.executeScript({
        file : "js/htmlContent.js"
    });
    chrome.tabs.executeScript({
        file : "inject.js"
    });
    chrome.tabs.executeScript({
        file : "js/pub_html.js"
    });
    chrome.tabs.executeScript({
        file : "template/ui/iostemp.js"
    });
    chrome.tabs.executeScript({
        file : "template/code/ios_code_temp.js"
    });
    chrome.tabs.executeScript({
        file : "template/code/swift_code_temp.js"
    });
    chrome.tabs.executeScript({
        file : "template/ui/androidtemp.js"
    });
    chrome.tabs.executeScript({
        file : "template/ui/fluttertemp.js"
    });
    chrome.tabs.executeScript({
        file : "utils/stringtool.js"
    });
    chrome.tabs.executeScript({
        file : "utils/dom_pub_utils.js"
    });
    chrome.tabs.executeScript({
        file : "js/dialog_show_hide.js"
    });
    chrome.tabs.executeScript({
        file : "js/propertys.js"
    });
    chrome.tabs.executeScript({
        file : "constraint/brother_father_deal.js"
    });
    chrome.tabs.executeScript({
        file : "constraint/constraint.js"
    });
    chrome.tabs.executeScript({
        file : "js/show_info.js"
    });
    chrome.tabs.executeScript({
        file : "export_xml/export_xml.js"
    });
    chrome.tabs.executeScript({
        file : "js/tools.js"
    });
    chrome.tabs.executeScript({
        file : "js/auto_discern.js"
    });

    closeSelf();
});

//自动关闭,失去焦点
function closeSelf() {
    setTimeout(function(){
        window.opener=null;window.close();
    },300);
}
