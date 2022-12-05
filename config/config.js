
//------------------- 常量配置 模块 -------------------

const Develop_Lan_ios = 1;//语言-iOS
const Develop_Lan_android = 2;//语言-安卓
const Develop_Lan_flutter = 3;//语言-Flutter
const Develop_Lan_swift = 4;//语言-Swift

var cur_lan = Develop_Lan_ios;

const DevelopDone_Lan_ios = true;//语言-iOS 是否适配完
const DevelopDone_Lan_android = true;//语言-安卓 是否适配完
const DevelopDone_Lan_flutter = true;//语言-Flutter 是否适配完
const DevelopDone_Lan_swift = true;//语言-Swift 是否适配完

const Save_Data_Type_Define_Name_ = "define_name";//自定义控件名
const Save_Data_Type_Switch_View_Type_ = "switch_view_type";//切换控件类型
const Save_Data_Type_Union_View_Type_ = "union_view_type";//合成控件类型
function Save_Data_Type_Define_Name() {return Save_Data_Type_Define_Name_;}
function Save_Data_Type_Switch_View_Type() {return Save_Data_Type_Switch_View_Type_ + cur_lan;}//控件类型跟语言有关,所以要加个语言类型
function Save_Data_Type_Union_View_Type() {return Save_Data_Type_Union_View_Type_ + cur_lan;}//控件类型跟语言有关,所以要加个语言类型

const can_auto_do_something = true;//是否自动识别和处理一些事情
const auto_discern_button = true;//自动识别button按钮
const auto_discern_div_text_button = true;//自动识别父控件是div,子控件是文本控件,然后子控件在父控件中央的按钮

//------------------- 常量配置 模块 -------------------


