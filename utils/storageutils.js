

//------------------- localStorage数据存储 模块 -------------------

/*
 * 因为localStorage有点特殊,1:是所有网页全局共享的 2:不会自动删除 3:只能读到length
 * 所以要特殊处理,1.任何操作都是基于当前页面的 2.支持手动清除当前页面的存储 3.能遍历当前页面的数据
 */


/**
 * 是否支持存储功能
 */
function db_isSupportStorage() {
    return typeof(Storage) != "undefined";
}

function localStorage_setItem(key,value){
    localStorage.setItem(curPageKeyMd5() + key,value);
}

function localStorage_getItem(key){
    return localStorage.getItem(curPageKeyMd5() + key);
}

function localStorage_removeItem(key){
    localStorage.removeItem(curPageKeyMd5() + key);
}

function curPageKeyMd5(){
    return "lan_hu"+hex_md5(window.location.href);
}



/**
 * 获取当前页面存储数据
 */
function db_curPageData() {
    var pageKeysStr = localStorage.getItem(curPageKeyMd5());
    var pageKeysArr = new Array();
    if (pageKeysStr && pageKeysStr.length > 0){
        pageKeysArr = JSON.parse(pageKeysStr);
    }
    return pageKeysArr;
}

/**
 * 清除所有存储数据-不建议用
 */
function db_clearAll() {
    if (!db_isSupportStorage())return;
    localStorage.clear();
}

/**
 * 清除当前页面存储数据
 */
function db_clearCurPage() {
    if (!db_isSupportStorage())return;
    //找到当前页面的数据
    var arr = db_curPageData();
    for (let i = 0; i < arr.length; i++) {
        var str = arr[i];
        localStorage_removeItem(str);
    }
}

/**
 * 保存key到page记录数组里面去
 */
function db_savePageKeys(key) {
    var pageKeysArr = db_curPageData();
    var index = pageKeysArr.indexOf(key);
    if (index <= -1) {
        pageKeysArr.push(key);
        localStorage.setItem(curPageKeyMd5(),JSON.stringify(pageKeysArr));
    }
}

/**
 * 删除key从page记录数组里面
 */
function db_removePageKeys(key) {
    var pageKeysArr = db_curPageData();
    if (pageKeysArr.length > 0){
        var index = pageKeysArr.indexOf(key);
        if (index > -1) {
            pageKeysArr.splice(index, 1);
            localStorage.setItem(curPageKeyMd5(),JSON.stringify(pageKeysArr));
        }
    }
}




//对外使用的几个增删查改接口


/**
 * 保存数据到本地
 */
function db_saveData(key,value,type) {
    if (!db_isSupportStorage())return;
    if (key && key.length > 0){
        if (value && value.length > 0){
            //1.要存page-key 的Array
            db_savePageKeys(key+type);
            //2.存数据
            localStorage_setItem(key+type, value);
        }else {
            db_removeData(key,type);
        }
    }
}

/**
 * 读取数据
 */
function db_getData(key,type) {
    if (!db_isSupportStorage())return "";
    if (key && key.length > 0){
        return localStorage_getItem(key+type);
    }
    return "";
}

/**
 * 读取某一类型数据 - 一般是后面是某个后缀
 */
function db_getAllDataForType(type) {
    var map = {};
    if (!db_isSupportStorage())return map;
    //找到当前页面的数据
    var arr = db_curPageData();
    for (let i = 0; i < arr.length; i++) {
        var key = arr[i];
        if (type && type.length > 0 && !key.endsWith(type)){
            continue;
        }
        var value = db_getData(key,"");//这里不用穿Type,因为拿出来的key已经包含type了
        var pureKey = key;
        if (type && type.length > 0 && key.endsWith(type)){
            pureKey = pureKey.replaceAll(type,"");
        }
        map[pureKey] = value;
    }
    return map;
}

/**
 * 读取所有数据
 */
function db_getAllData() {
    return db_getAllDataForType("");
}

/**
 * 删除某个数据
 */
function db_removeData(key,type) {
    if (!db_isSupportStorage())return;
    if (key && key.length > 0){
        db_removePageKeys(key+type);
        localStorage_removeItem(key+type);
    }
}

/**
 * 打印当前页面的所有数据
 */
function db_printCurPageAll() {
    if (!db_isSupportStorage())return;
    var pageKeysStr = localStorage.getItem(curPageKeyMd5());
    console.log("pageKeysStr:",pageKeysStr);
    console.log("map:",JSON.stringify(db_getAllData()));
}

/**
 * 打印所有数据
 */
function db_printAll() {
    if (!db_isSupportStorage())return;
    //遍历并输出localStorage里存储的名字和值
    for(var i=0; i<localStorage.length;i++){
        console.log('localStorage里存储的第'+i+'条数据的名字为：'+localStorage.key(i)+',值为：'+localStorage.getItem(localStorage.key(i)));
    }
}

/**
 * 清除跟此插件相关所有数据
 */
function db_clear_lan_hu_pages_data() {
    if (!db_isSupportStorage())return;
    if (localStorage.length < 1000)return;
    //遍历并输出localStorage里存储的名字和值
    var count = 0;
    for(var i=0; i<localStorage.length;i++){
        var key = localStorage.key(i);
        if (key.startsWith("lan_hu")){
            localStorage.removeItem(key);
            count ++;
            if (count >= 100)break;//只清除100条
        }
    }
}

//------------------- localStorage数据存储 模块 -------------------