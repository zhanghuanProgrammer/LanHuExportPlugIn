


//------------------- 安卓模板 模块 -------------------

function tmpl_android_xml() {
    var string =
    "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n" +
        "    <RelativeLayout\n" +
        "        xmlns:android=\"http://schemas.android.com/apk/res/android\"\n" +
        "        xmlns:app=\"http://schemas.android.com/apk/res-auto\"\n" +
        "        xmlns:tools=\"http://schemas.android.com/tools\"\n" +
        "        android:layout_width=\"match_parent\"\n" +
        "        android:layout_height=\"match_parent\"\n" +
        "        >\n" +
        "            {% if (o.root.views) { %}\n" +
        "            {% var templateViewsValue = tmpl_android_views();var map = {};map[\"root\"] = o.root.views; var ret = tmpl(templateViewsValue, map); %}\n" +
        "            {% if(ret) { %}\n" +
        "            {%=ret%}\n" +
        "            {% } %}\n" +
        "            {% } %}\n" +
        "    </RelativeLayout>";
    return string;
}

function tmpl_android_views() {
    var string =
        "      {% for (var i=0; i<o.root.length; i++) { %}\n" +
        "          {% var tempView = o.root[i]; %}\n" +
        "    \n" +
        "          {% if (tempView.viewType == \"textView\") { %}\n" +
        "                    <TextView\n" +
        "                        {% if (tempView.defineName) { %}android:id=\"@+id/{%=tempView.defineName %}\"{% } %}\n" +
        "                        android:layout_width=\"{%=tempView.width %}dp\"\n" +
        "                        android:layout_height=\"{%=tempView.height %}dp\"\n" +
        "                        {% if (parseFloat(tempView.x) > 0) { %}android:layout_marginLeft=\"{%=tempView.x %}dp\"{% } %}\n" +
        "                        {% if (parseFloat(tempView.y) > 0) { %}android:layout_marginTop=\"{%=tempView.y %}dp\"{% } %}\n" +
        "                        {% if (tempView.text) { %}android:text=\"{%=tempView.text %}\"{% } %}\n" +
        "                        {% if (tempView.align) { %}android:textAlignment=\"{%=tempView.align %}\"{% } %}\n" +
        "                        android:textSize=\"{% if (tempView.font) { %}{%=tempView.font %}{% } else { %}14{% } %}dp\"\n" +
        "                        {% if (tempView.font_family) { %}android:fontFamily=\"{%=tempView.font_family %}\"{% } %}\n" +
        "                        {% if (tempView.textColor) { %}android:textColor=\"{%=tempView.textColor %}\"{% } %}\n" +
        "                        {% if (tempView.bgColor) { %}android:background=\"{%=tempView.bgColor %}\"{% } %}\n" +
        "                        >\n" +
        "                    </TextView>\n" +
        "          {% } %}\n" +
        "          {% if (tempView.viewType == \"switch\") { %}\n" +
        "            <Switch\n" +
        "                          {% if (tempView.defineName) { %}android:id=\"@+id/{%=tempView.defineName %}\"{% } %}\n" +
        "                android:layout_width=\"wrap_content\"\n" +
        "                android:layout_height=\"wrap_content\">\n" +
        "                {% if (parseFloat(tempView.x) > 0) { %}android:layout_marginLeft=\"{%=tempView.x %}dp\"{% } %}\n" +
        "                         {% if (parseFloat(tempView.y) > 0) { %}android:layout_marginTop=\"{%=tempView.y %}dp\"{% } %}\n" +
        "                         {% if (tempView.bgColor) { %}android:background=\"{%=tempView.bgColor %}\"{% } %}\n" +
        "                         >\n" +
        "            </Switch>\n" +
        "          {% } %}\n" +
        "          {% if (tempView.viewType == \"scrollView\") { %}\n" +
        "            <ScrollView\n" +
        "                          {% if (tempView.defineName) { %}android:id=\"@+id/{%=tempView.defineName %}\"{% } %}\n" +
        "                android:layout_width=\"{%=tempView.width %}dp\"\n" +
        "                android:layout_height=\"{%=tempView.height %}dp\"\n" +
        "                {% if (parseFloat(tempView.x) > 0) { %}android:layout_marginLeft=\"{%=tempView.x %}dp\"{% } %}\n" +
        "                         {% if (parseFloat(tempView.y) > 0) { %}android:layout_marginTop=\"{%=tempView.y %}dp\"{% } %}\n" +
        "                         {% if (tempView.bgColor) { %}android:background=\"{%=tempView.bgColor %}\"{% } %}\n" +
        "                         >\n" +
        "                         {% if (tempView.views) { %}\n" +
        "                      {% var templateViewsValue = tmpl_android_views();var map = {};map[\"root\"] = tempView.views; var ret = tmpl(templateViewsValue, map); %}\n" +
        "                      {% if(ret) { %}\n" +
        "                      {%=ret%}\n" +
        "                      {% } %}\n" +
        "                      {% } %}\n" +
        "            </ScrollView>\n" +
        "          {% } %}\n" +
        "          {% if (tempView.viewType == \"editText\") { %}\n" +
        "         <EditText\n" +
        "                          {% if (tempView.defineName) { %}android:id=\"@+id/{%=tempView.defineName %}\"{% } %}\n" +
        "          android:layout_width=\"{%=tempView.width %}dp\"\n" +
        "                android:layout_height=\"{%=tempView.height %}dp\"\n" +
        "          {% if (parseFloat(tempView.x) > 0) { %}android:layout_marginLeft=\"{%=tempView.x %}dp\"{% } %}\n" +
        "          {% if (parseFloat(tempView.y) > 0) { %}android:layout_marginTop=\"{%=tempView.y %}dp\"{% } %}\n" +
        "          {% if (tempView.text) { %}android:text=\"{%=tempView.text %}\"{% } %}\n" +
        "          {% if (tempView.align) { %}android:textAlignment=\"{%=tempView.align %}\"{% } %}\n" +
        "          android:textSize=\"{% if (tempView.font) { %}{%=tempView.font %}{% } else { %}14{% } %}dp\"\n" +
        "          {% if (tempView.font_family) { %}android:fontFamily=\"{%=tempView.font_family %}\"{% } %}\n" +
        "          {% if (tempView.textColor) { %}android:textColor=\"{%=tempView.textColor %}\"{% } %}\n" +
        "          {% if (tempView.bgColor) { %}android:background=\"{%=tempView.bgColor %}\"{% } else { %}android:background=\"@null\"{% } %}\n" +
        "          >\n" +
        "         </EditText>\n" +
        "          {% } %}\n" +
        "          {% if (tempView.viewType == \"imageView\") { %}\n" +
        "               <ImageView\n" +
        "                          {% if (tempView.defineName) { %}android:id=\"@+id/{%=tempView.defineName %}\"{% } %}\n" +
        "                android:layout_width=\"{%=tempView.width %}dp\"\n" +
        "                android:layout_height=\"{%=tempView.height %}dp\"\n" +
        "                android:scaleType=\"fitXY\"\n" +
        "                {% if (parseFloat(tempView.x) > 0) { %}android:layout_marginLeft=\"{%=tempView.x %}dp\"{% } %}\n" +
        "                         {% if (parseFloat(tempView.y) > 0) { %}android:layout_marginTop=\"{%=tempView.y %}dp\"{% } %}\n" +
        "                         {% if (tempView.bgColor) { %}android:background=\"{%=tempView.bgColor %}\"{% } %}\n" +
        "                         {% if (tempView.image) { %}android:src=\"@drawable/{%=tempView.image %}\"{% } %}\n" +
        "                         >\n" +
        "            </ImageView>\n" +
        "          {% } %}\n" +
        "          {% if (tempView.viewType == \"button\") { %}\n" +
        "            <Button\n" +
        "                          {% if (tempView.defineName) { %}android:id=\"@+id/{%=tempView.defineName %}\"{% } %}\n" +
        "                android:layout_width=\"{%=tempView.width %}dp\"\n" +
        "                android:layout_height=\"{%=tempView.height %}dp\"\n" +
        "                {% if (parseFloat(tempView.x) > 0) { %}android:layout_marginLeft=\"{%=tempView.x %}dp\"{% } %}\n" +
        "                         {% if (parseFloat(tempView.y) > 0) { %}android:layout_marginTop=\"{%=tempView.y %}dp\"{% } %}\n" +
        "                         {% if (tempView.text) { %}android:text=\"{%=tempView.text %}\"{% } %}\n" +
        "          {% if (tempView.align) { %}android:textAlignment=\"{%=tempView.align %}\"{% } %}\n" +
        "          android:textSize=\"{% if (tempView.font) { %}{%=tempView.font %}{% } else { %}14{% } %}dp\"\n" +
        "          {% if (tempView.font_family) { %}android:fontFamily=\"{%=tempView.font_family %}\"{% } %}\n" +
        "          {% if (tempView.textColor) { %}android:textColor=\"{%=tempView.textColor %}\"{% } %}\n" +
        "                         {% if (tempView.bgColor) { %}android:background=\"{%=tempView.bgColor %}\"{% } %}\n" +
        "                         >\n" +
        "            </Button>\n" +
        "          {% } %}\n" +
        "          {% if (tempView.viewType == \"progressBar\") { %}\n" +
        "            <ProgressBar\n" +
        "                          {% if (tempView.defineName) { %}android:id=\"@+id/{%=tempView.defineName %}\"{% } %}\n" +
        "                android:layout_width=\"{%=tempView.width %}dp\"\n" +
        "                android:layout_height=\"{%=tempView.height %}dp\"\n" +
        "                {% if (parseFloat(tempView.x) > 0) { %}android:layout_marginLeft=\"{%=tempView.x %}dp\"{% } %}\n" +
        "                         {% if (parseFloat(tempView.y) > 0) { %}android:layout_marginTop=\"{%=tempView.y %}dp\"{% } %}\n" +
        "                         {% if (tempView.bgColor) { %}android:background=\"{%=tempView.bgColor %}\"{% } %}\n" +
        "                         >\n" +
        "            </ProgressBar>\n" +
        "          {% } %}\n" +
        "          {% if (tempView.viewType == \"recyclerView\") { %}\n" +
        "            <androidx.recyclerview.widget.RecyclerView\n" +
        "                          {% if (tempView.defineName) { %}android:id=\"@+id/{%=tempView.defineName %}\"{% } %}\n" +
        "                android:layout_width=\"{%=tempView.width %}dp\"\n" +
        "                android:layout_height=\"{%=tempView.height %}dp\"\n" +
        "                {% if (parseFloat(tempView.x) > 0) { %}android:layout_marginLeft=\"{%=tempView.x %}dp\"{% } %}\n" +
        "                         {% if (parseFloat(tempView.y) > 0) { %}android:layout_marginTop=\"{%=tempView.y %}dp\"{% } %}\n" +
        "                         {% if (tempView.bgColor) { %}android:background=\"{%=tempView.bgColor %}\"{% } %}\n" +
        "                         android:orientation=\"vertical\"\n" +
        "                         app:layoutManager=\"androidx.recyclerview.widget.LinearLayoutManager\"\n" +
        "                         >\n" +
        "            </androidx.recyclerview.widget.RecyclerView>\n" +
        "                    />\n" +
        "          {% } %}\n" +
        "          {% if (tempView.viewType == \"datePicker\") { %}\n" +
        "            <DatePicker\n" +
        "                          {% if (tempView.defineName) { %}android:id=\"@+id/{%=tempView.defineName %}\"{% } %}\n" +
        "                android:layout_width=\"{%=tempView.width %}dp\"\n" +
        "                android:layout_height=\"{%=tempView.height %}dp\"\n" +
        "                {% if (parseFloat(tempView.x) > 0) { %}android:layout_marginLeft=\"{%=tempView.x %}dp\"{% } %}\n" +
        "                         {% if (parseFloat(tempView.y) > 0) { %}android:layout_marginTop=\"{%=tempView.y %}dp\"{% } %}\n" +
        "                         {% if (tempView.bgColor) { %}android:background=\"{%=tempView.bgColor %}\"{% } %}\n" +
        "                         >\n" +
        "            </DatePicker>\n" +
        "          {% } %}\n" +
        "          {% if (tempView.viewType == \"webView\") { %}\n" +
        "            <WebView\n" +
        "                          {% if (tempView.defineName) { %}android:id=\"@+id/{%=tempView.defineName %}\"{% } %}\n" +
        "                android:layout_width=\"{%=tempView.width %}dp\"\n" +
        "                android:layout_height=\"{%=tempView.height %}dp\"\n" +
        "                {% if (parseFloat(tempView.x) > 0) { %}android:layout_marginLeft=\"{%=tempView.x %}dp\"{% } %}\n" +
        "                         {% if (parseFloat(tempView.y) > 0) { %}android:layout_marginTop=\"{%=tempView.y %}dp\"{% } %}\n" +
        "                         {% if (tempView.bgColor) { %}android:background=\"{%=tempView.bgColor %}\"{% } %}\n" +
        "                         >\n" +
        "            </WebView>\n" +
        "          {% } %}\n" +
        "          {% if (tempView.viewType == \"seekBar\") { %}\n" +
        "            <SeekBar\n" +
        "                          {% if (tempView.defineName) { %}android:id=\"@+id/{%=tempView.defineName %}\"{% } %}\n" +
        "                android:layout_width=\"{%=tempView.width %}dp\"\n" +
        "                android:layout_height=\"{%=tempView.height %}dp\"\n" +
        "                {% if (parseFloat(tempView.x) > 0) { %}android:layout_marginLeft=\"{%=tempView.x %}dp\"{% } %}\n" +
        "                         {% if (parseFloat(tempView.y) > 0) { %}android:layout_marginTop=\"{%=tempView.y %}dp\"{% } %}\n" +
        "                         {% if (tempView.bgColor) { %}android:background=\"{%=tempView.bgColor %}\"{% } %}\n" +
        "                         >\n" +
        "            </SeekBar>\n" +
        "          {% } %}\n" +
        "          {% if (tempView.viewType == \"relativeLayout\") { %}\n" +
        "            <RelativeLayout\n" +
        "                          {% if (tempView.defineName) { %}android:id=\"@+id/{%=tempView.defineName %}\"{% } %}\n" +
        "                android:layout_width=\"{%=tempView.width %}dp\"\n" +
        "                android:layout_height=\"{%=tempView.height %}dp\"\n" +
        "                {% if (parseFloat(tempView.x) > 0) { %}android:layout_marginLeft=\"{%=tempView.x %}dp\"{% } %}\n" +
        "                         {% if (parseFloat(tempView.y) > 0) { %}android:layout_marginTop=\"{%=tempView.y %}dp\"{% } %}\n" +
        "                         {% if (tempView.bgColor) { %}android:background=\"{%=tempView.bgColor %}\"{% } %}\n" +
        "                         >\n" +
        "                         {% if (tempView.views) { %}\n" +
        "                      {% var templateViewsValue = tmpl_android_views();var map = {};map[\"root\"] = tempView.views; var ret = tmpl(templateViewsValue, map); %}\n" +
        "                      {% if(ret) { %}\n" +
        "                      {%=ret%}\n" +
        "                      {% } %}\n" +
        "                      {% } %}\n" +
        "            </RelativeLayout>\n" +
        "          {% } %}\n" +
        "    \n" +
        "          {% } %}";
    return string;
}

//------------------- 安卓模板 模块 -------------------



