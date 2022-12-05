


//------------------- 字符串工具 模块 -------------------

/**
 * 首字母大写
 */
function upperFirstCase(text){
    if (text.length > 1){
        return text.substring(0,1).toUpperCase() + text.substring(1,text.length);
    }
    return text.toUpperCase();
}

/**
 * 首字母小写
 */
function lowerFirstCase(text){
    if (text.length > 1){
        return text.substring(0,1).toLowerCase() + text.substring(1,text.length);
    }
    return text.toLowerCase();
}

/**
 * 取两个字符串中间的内容
 */
function mid(left,right,text){
    if (text && left && right && text.length > 0 && left.length > 0 && right.length > 0 && text.includes(left) && text.includes(right) && left != right){
        var leftIndex = text.indexOf(left);
        var rightIndex = text.indexOf(right,leftIndex);
        if (leftIndex >= 0 && rightIndex >= 0 && leftIndex + left.length < rightIndex){
            return text.substring(leftIndex + left.length,rightIndex);
        }
    }
    return "";
}

/**
 * 取两个字符串中间的内容,结尾处默认为最后
 */
function midL(left,left_is_last,text){
    if (text && left && text.length > 0 && left.length > 0 && text.includes(left)){
        var leftIndex = 0;
        if (left_is_last) leftIndex = text.lastIndexOf(left);
        else leftIndex = text.indexOf(left);
        var rightIndex = text.length;
        if (leftIndex >= 0 && rightIndex >= 0 && leftIndex < rightIndex){
            return text.substring(leftIndex + left.length,rightIndex);
        }
    }
    return "";
}

/**
 * 取两个字符串中间的内容,开始处默认为0
 */
function midR(right,text){
    if (text && right && text.length > 0 && right.length > 0 && text.includes(right)){
        var leftIndex = 0;
        var rightIndex = text.indexOf(right,leftIndex);
        if (leftIndex >= 0 && rightIndex >= 0 && leftIndex < rightIndex){
            return text.substring(leftIndex,rightIndex);
        }
    }
    return "";
}

/**
 * 判断字符是否是数字 true:数值型的，false：非数值型
 */
function isNum(value) {
    return ((typeof value === 'number' || typeof value === 'string') && !isNaN(value));
}

/**
 * 转数字
 */
function numValue(value) {
    if (isNum(value))return value;
    return "0";
}

/**
 * 随机字符串
 */
function randomStr(e){
    var t = "0123456789abcdefghijkmnpqrstuvwxyzABCDEFGHIJKMNPQRSTUVWXYZ";
    var a = t.length;
    var n = "";
    for (var i = 0; i < e; i++) {
        n += t.charAt(Math.floor(Math.random() * a));
    }
    return n;
}

/**
 * 获取随机iOS xml idStr
 * 例子:gSS-Oy-SNc
 */
function xml_idStr(){
    return randomStr(3) + "-" + randomStr(2) + "-" +randomStr(3);
}

/**
 * 去除字符串前面的空格
 */
function removeSpacePrefix(text){
    if (text.startsWith(" ")){
        text = text.substring(1);
        return removeSpacePrefix(text);
    }else if (text.startsWith("\t")){
        text = text.replaceAll("\t","");
        return removeSpacePrefix(text);
    }
    return text;
}

/**
 * 去除字符串后面的空格
 */
function removeSpaceSuffix(text){
    if (text.endsWith(" ")){
        text = text.substring(0,text.length - 1);
        return removeSpaceSuffix(text);
    }else if (text.startsWith("\t")){
        text = text.replaceAll("\t","");
        return removeSpaceSuffix(text);
    }
    return text;
}

/**
 * 去除字符串前后面的空格
 */
function removeSpacePrefixSuffix(text){
    return removeSpacePrefix(removeSpaceSuffix(text));
}

/**
 * 去除字符串前后面的空格-包括换行
 */
function removeSpacePrefixSuffixNewLine(text){
    return removeSpacePrefixSuffix(text.replaceAll("\n",""));
}

/**
 * 获取n个"\t'
 */
function getIndentationSpace(count) {
    var str = "";
    for (let i = 0; i < count; i++) { str += "\t"; }
    return str;
}

/**
 * 获取n个"  "
 */
function getSpace(count) {
    var str = "";
    for (let i = 0; i < count; i++) { str += "    "; }
    return str;
}

/**
 * 获取n个"┈"
 */
function getSpecialSpace(count) {
    var str = "";
    for (let i = 0; i < count; i++) { str += "┈"; }
    return str;
}

/**
 * 获取n个"&nbsp;"
 */
function getHtmlSpace(count) {
    var str = "";
    for (let i = 0; i < count; i++) { str += "&nbsp;&nbsp;&nbsp;&nbsp;"; }
    return str;
}

/**
 * 获取n个"  "
 */
function getSpaceFormat(count,type) {
    if (type == "ios")return getSpace(count);
    if (type == "android")return getIndentationSpace(count);
    if (type == "flutter")return getSpace(count);
    if (type == "ios_special")return getSpecialSpace(count);
    if (type == "ios_code")return getHtmlSpace(count);
    if (type == "swift_code")return getHtmlSpace(count);
    if (type == "android_special")return getHtmlSpace(count);
    if (type == "flutter_special")return getHtmlSpace(count);
    return getSpace(count);
}

/**
 * 获取n个"  "
 */
function getJoinFormat(type) {
    if (type == "ios")return "\n";
    if (type == "android")return "\n";
    if (type == "flutter")return "\n";
    if (type == "ios_special")return "\n";
    if (type == "ios_code")return "<br>";
    if (type == "swift_code")return "\n";
    if (type == "android_special")return "<br>";
    if (type == "flutter_special")return "<br>";
    return "\n";
}

/**
 * 消除特殊字符,包括html标签,得到纯文本代码
 */
function clearCodeSpecialChar(text){
    if(text.includes("┈"))text = text.replaceAll("┈","\t");
    if(text.includes("&nbsp;"))text = text.replaceAll("&nbsp;"," ");
    if(text.includes(" "))text = text.replaceAll(" "," ");
    if(text.includes("<br>"))text = text.replaceAll("<br>","\t");
    if(text.includes("\&lt"))text = text.replaceAll("\&lt","<");
    if(text.includes("\&gt"))text = text.replaceAll("\&gt",">");
    return text;
}

function hasOutIndex_xml(text) {
    var arr = new Array();
    arr.push("/>");arr.push("/\&gt");
    for (let i = 0; i < arr.length; i++) {
        var str = arr[i];
        if (text.endsWith(str)) { return 1; }
    }
    var arrPrefix = new Array();
    arrPrefix.push("</");arrPrefix.push("\&lt/");
    for (let i = 0; i < arrPrefix.length; i++) {
        var str = arrPrefix[i];
        if (text.includes(str)) { return 2; }
    }
    return 0;
}

function hasInIndex_xml(text) {
    var arr = new Array();
    arr.push("<");arr.push("\&lt");
    for (let i = 0; i < arr.length; i++) {
        var str = arr[i];
        if (text.startsWith(str) && !text.startsWith("</") && !text.startsWith("\&lt/")) { return true; }
    }
    return false;
}

function hasOutIndex_xml_flutter(text) {
    var arr = new Array();
    arr.push(")");
    var ret = 0;
    for (let i = 0; i < arr.length; i++) {
        var str = arr[i];
        if (text.includes(str)) { ret = 2;break; }
    }
    var arrPrefix = new Array();
    arrPrefix.push("(");
    for (let i = 0; i < arrPrefix.length; i++) {
        var str = arrPrefix[i];
        if (text.includes(str)) { ret = 0;break; }
    }
    return ret;
}

function hasInIndex_xml_flutter(text) {
    var arr = new Array();
    arr.push("(");
    var ret = 0;
    for (let i = 0; i < arr.length; i++) {
        var str = arr[i];
        if (text.includes(str)) { ret = true;break; }
    }
    var arrSuffix = new Array();
    arrSuffix.push(")");
    for (let i = 0; i < arrSuffix.length; i++) {
        var str = arrSuffix[i];
        if (text.includes(str)) { ret = false;break; }
    }
    return ret;
}

function hasOutIndex_code(text) {
    var arr = new Array();
    arr.push("}");
    arr.push("});");
    for (let i = 0; i < arr.length; i++) {
        var str = arr[i];
        if (text.endsWith(str)) { return true; }
    }
    var arrPrefix = new Array();
    arrPrefix.push("}");
    for (let i = 0; i < arrPrefix.length; i++) {
        var str = arrPrefix[i];
        if (text.startsWith(str)) { return true; }
    }
    return false;
}

function hasInIndex_code(text) {
    var arr = new Array();
    arr.push("{");
    for (let i = 0; i < arr.length; i++) {
        var str = arr[i];
        if (text.endsWith(str))return true;
        if (text.includes("{")) {
            var tempStr = text.substring(text.indexOf("{")+1,text.length);
            tempStr = removeSpacePrefixSuffix(tempStr);
            if (tempStr.startsWith("//")) return true;
        }
    }
    return false;
}

function hasInIndexSpecial_code(text) {
    if (text.endsWith("else")){
        formatCode_specialCount = 1;
        return true;
    }
    if (text.endsWith(")")){
        if (text.startsWith("if")){
            formatCode_specialCount = 1;
            return true;
        }
    }
    return false;
}

/**
 * 格式化xml
 */
function formatXml(text,type) {
    var arrM = new Array();
    var arr = text.split("\n");
    for (let i = 0; i < arr.length; i++) {
        var str = arr[i];
        str = removeSpacePrefixSuffix(str);
        if (str.length > 0){//消除空行
            arrM.push(str);
        }
    }
    var count = 0;
    var tempStr;
    var arrMText = new Array();
    for (let i = 0; i < arrM.length; i++) {
        var str = arrM[i];
        if (str.startsWith("<?") || str.startsWith("<!") || str.startsWith("\&lt?") || str.startsWith("\&lt!")){
            arrMText.push(getSpaceFormat(count,type) + str);
        } else {
            tempStr = str;
            if(hasOutIndex_xml(tempStr) == 1){
                arrMText.push(getSpaceFormat(count,type) + tempStr);
                count--;if (count == -1) count = 0;
            }else if (hasOutIndex_xml(tempStr) > 0){
                count--;if (count == -1) count = 0;
                arrMText.push(getSpaceFormat(count,type) + tempStr);
            }else {
                arrMText.push(getSpaceFormat(count,type) + tempStr);
            }
            if (hasInIndex_xml(tempStr))count ++;
        }
    }
    text = arrMText.join(getJoinFormat(type));
    return text;
}

/**
 * 格式化flutter-dart
 */
function formatFlutterDart(text,type) {
    var arrM = new Array();
    var arr = text.split("\n");
    for (let i = 0; i < arr.length; i++) {
        var str = arr[i];
        str = removeSpacePrefixSuffix(str);
        if (str.length > 0){//消除空行
            arrM.push(str);
        }
    }
    var count = 0;
    var tempStr;
    var arrMText = new Array();
    for (let i = 0; i < arrM.length; i++) {
        var str = arrM[i];
        if (str.startsWith("//") || str.startsWith("/*")){
            arrMText.push(getSpaceFormat(count,type) + str);
        } else {
            tempStr = str;
            if(hasOutIndex_xml_flutter(tempStr) == 1){
                arrMText.push(getSpaceFormat(count,type) + tempStr);
                count--;if (count == -1) count = 0;
            }else if (hasOutIndex_xml_flutter(tempStr) > 0){
                count--;if (count == -1) count = 0;
                arrMText.push(getSpaceFormat(count,type) + tempStr);
            }else {
                arrMText.push(getSpaceFormat(count,type) + tempStr);
            }
            if (hasInIndex_xml_flutter(tempStr))count ++;
        }
    }
    text = arrMText.join(getJoinFormat(type));
    return text;
}

/**
 * 格式化android_xml
 */
function formatXml_android(text) {
    return formatXml(text,"android");
}

/**
 * 格式化android_special_xml
 */
function formatXml_android_special(text) {
    text = xml_for_html_show(text);
    return formatXml(text,"android_special");
}

/**
 * 格式化flutter_xml
 */
function formatXml_flutter(text) {
    return formatFlutterDart(text,"flutter");
}

/**
 * 格式化flutter_special_xml
 */
function formatXml_flutter_special(text) {
    text = xml_for_html_show(text);
    return formatFlutterDart(text,"flutter_special");
}

/**
 * 格式化ios_special_xml
 */
function formatXml_ios_special(text) {
    return formatXml(text,"ios_special");
}

/**
 * 格式化ios_xml
 */
function formatXml_ios(text) {
    return formatXml(text,"ios");
}

/**
 * 格式化代码
 */
var formatCode_specialCount = 0;
function formatCode(text,type) {
    var arrM = new Array();
    var arr = text.split("\n");
    for (let i = 0; i < arr.length; i++) {
        var str = arr[i];
        str = removeSpacePrefixSuffix(str);
        if (str.length > 0){//消除空行
            arrM.push(str);
        }
    }
    var count = 0;
    var tempStr;
    var arrMText = new Array();
    for (let i = 0; i < arrM.length; i++) {
        var str = arrM[i];
        if (str.startsWith("//")){//如果是注释,不做处理
            arrMText.push(getSpaceFormat(count,type) + str);
        }else {
            tempStr = str;
            if(hasOutIndex_code(tempStr)){
                count--;if (count == -1) count = 0;
            }else {
                if (formatCode_specialCount == 1) count ++;
            }
            arrMText.push(getSpaceFormat(count,type) + str);
            if (hasInIndex_code(tempStr)) { count++; }
            if (hasInIndexSpecial_code(tempStr) == false){
                if (formatCode_specialCount == 1) {
                    count--;
                    if (count == -1) count = 0;
                }
                formatCode_specialCount = 0;
            }
        }
    }
    text = arrMText.join(getJoinFormat(type));
    return text;
}

/**
 * 格式化ios_code
 */
function formatCode_ios(text) {
    var code = formatCode(text,"ios_code");
    if(code && code.length > 0){
        code = code.replaceAll("});","});\n");
        if (code.endsWith("\n"))code = code.substring(0,code.length - 1);
    }
    return code;
}

/**
 * 格式化swift_code
 */
function formatCode_swift(text) {
    var code = formatCode(text,"swift_code");
    if(code && code.length > 0){
        code = code.replaceAll("let","\nlet");
        if (code.startsWith("\n"))code = code.substring(1,code.length);
    }
    return code;
}

/**
 * xml显示到innerHTML里面,标签会被解析,显示不出来,这个专门做转义处理
 */
function xml_for_html_show(text) {
    text=text.replace(/</g, "\&lt");
    text=text.replace(/>/g, "\&gt");
    return text;
}


function copyClipboard(text) {
    if (text && text.length > 0){
        const input = document.createElement('textarea');
        document.body.appendChild(input);
        input.innerHTML = text;
        input.setAttribute('code',1);
        input.select();
        document.execCommand("Copy");

        var list = document.getElementsByTagName('textarea');
        var inputList = Array.prototype.slice.call(list);
        inputList.forEach((item)=>{
            if(item.getAttribute('code'))document.body.removeChild(item);
        });
        showToast("复制成功");
    }
}

function js_template_escape(ret) {
    if (ret && ret.length > 0){
        while(ret.includes("&lt;") ||
            ret.includes("&gt;") ||
            ret.includes("&amp;") ||
            ret.includes("&quot;") ||
            ret.includes("&#39;")
            ){
            if (ret.includes("&lt;")) ret = ret.replace(new RegExp("&lt;","gm"),"<");
            if (ret.includes("&gt;")) ret = ret.replace(new RegExp("&gt;","gm"),">");
            if (ret.includes("&amp;")) ret = ret.replace(new RegExp("&amp;","gm"),"&");
            if (ret.includes("&quot;")) ret = ret.replace(new RegExp("&quot;","gm"),"\"");
            if (ret.includes("&#39;")) ret = ret.replace(new RegExp("&#39;","gm"),"'");
        }
    }
    return ret;
}

/**
 * rgba -> hex
 */
function rgba_to_hex(rgba){
    if (rgba){
        var hexs = new Array();
        if (rgba.length >= 4 && parseFloat(rgba[3]) < 1) {
            if (parseFloat(rgba[3]) <= 0) hexs.push("00");
            else hexs.push((parseFloat(rgba[3]) * 255).toString(16));
        }
        if (rgba.length >= 3) for (let i = 0; i < 3; i++) {
            if (parseFloat(rgba[i]) <= 0) hexs.push("00");
            else hexs.push(parseFloat(rgba[i]).toString(16));
        }
        if (hexs.length > 0) {
            var hexStr = hexs.join("");
            var preStr = "#";
            if (isFLUTTER()) preStr = (hexs.length <= 3) ? "0xFF" : "0x";
            if (hexStr != "00000000") return preStr + hexStr;
        }
    }
    return "";
}

/**
 * rgba / 255
 */
function rgb_div_255(rgb){
    if (isNum(rgb) && parseFloat(rgb) > 1){
        rgb = "" + (parseFloat(rgb) / 255.0).toFixed(2);
    }
    return rgb;
}

function isHtmlCode(text){
    if (text && text.length > 0){
        if (text.includes("<br>") || text.includes("&nbsp;"))return true;
    }
    return false;
}

function stringEmptyDefault(str,defaultStr) {
    return (str != null && str.length > 0) ? str : defaultStr;
}

//------------------- 字符串工具 模块 -------------------