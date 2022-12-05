


//------------------- flutter模板 模块 -------------------

function tmpl_flutter_xml() {
    var string =
    "Positioned(\n" +
        "     left: 0,\n" +
        "     top: 0,\n" +
        "     child: Container(\n" +
        "        width: {%=o.root.width %},\n" +
        "        height: {%=o.root.height %},\n" +
        "        {% if (o.root.bgColor) { %}color: Color({%=o.root.bgColor %}),{% } %}\n" +
        "        {% if (o.root.views) { %}\n" +
        "         {% var templateViewsValue = tmpl_flutter_views();var map = {};map[\"root\"] = o.root.views; var ret = tmpl(templateViewsValue, map); %}\n" +
        "                      {% if(ret) { %}\n" +
        "                      child: Stack(\n" +
        "         fit: StackFit.passthrough,\n" +
        "         children: <Widget>[\n" +
        "         {%=ret%}\n" +
        "         ]\n" +
        "         ),\n" +
        "         {% } %}\n" +
        "         {% } %}\n" +
        "       )\n" +
        "    ),";
    return string;
}

function tmpl_flutter_views() {
    var string =
    "{% for (var i=0; i<o.root.length; i++) { %}\n" +
    "          {% var viewInfo = o.root[i]; %}\n" +
    "\n" +
    "          {% if (viewInfo.viewType == \"text\") { %}\n" +
    "    Positioned(\n" +
    "     left: {%=viewInfo.x %},\n" +
    "     top: {%=viewInfo.y %},\n" +
    "     child: Container(\n" +
    "      {% if (viewInfo.borderColor || viewInfo.border_width || viewInfo.border_radius) { %}\n" +
    "       decoration: BoxDecoration(\n" +
    "       {% if (viewInfo.border_radius) { %}borderRadius: const BorderRadius.all(const Radius.circular({%=viewInfo.border_radius %})),{% } %}\n" +
    "       {% if (viewInfo.borderColor || viewInfo.border_width) { %}\n" +
    "        borderSide: BorderSide(\n" +
    "         {% if (viewInfo.border_width) { %} width: {%=viewInfo.border_width %},{% } %}\n" +
    "         {% if (viewInfo.borderColor) { %} color: Color({%=viewInfo.borderColor %}),{% } %}\n" +
    "        ),\n" +
    "       ),\n" +
    "       {% } %}\n" +
    "      {% } else { %}\n" +
    "      {% if (viewInfo.bgColor) { %}color: Color({%=viewInfo.bgColor %}),{% } %}\n" +
    "      {% } %}dp\n" +
    "        width: {%=viewInfo.width %},\n" +
    "        height: {%=viewInfo.height %},\n" +
    "        child: Text(\n" +
    "        {% if (viewInfo.text) { %} \"{%=viewInfo.text %}\" {% } %},\n" +
    "        textAlign: TextAlign.{%=viewInfo.align %},\n" +
    "        overflow: TextOverflow.ellipsis,\n" +
    "        style: TextStyle(\n" +
    "        {% if (viewInfo.text) { %} fontFamily: \"{%=viewInfo.font_family %}\", {% } %}\n" +
    "        fontSize: {% if (viewInfo.font) { %}{%=viewInfo.font %}{% } else { %}14{% } %},\n" +
    "        color: Color({%=viewInfo.textColor %}),\n" +
    "        ),\n" +
    "         )\n" +
    "       )\n" +
    "    ),\n" +
    "    {% } %}\n" +
    "\n" +
    "          {% if (viewInfo.viewType == \"textField\") { %}\n" +
    "          Positioned(\n" +
    "     left: {%=viewInfo.x %},\n" +
    "     top: {%=viewInfo.y %},\n" +
    "     child: Container(\n" +
    "      {% if (viewInfo.borderColor || viewInfo.border_width || viewInfo.border_radius) { %}\n" +
    "       decoration: BoxDecoration(\n" +
    "       {% if (viewInfo.border_radius) { %}borderRadius: const BorderRadius.all(const Radius.circular({%=viewInfo.border_radius %})),{% } %}\n" +
    "       {% if (viewInfo.borderColor || viewInfo.border_width) { %}\n" +
    "        borderSide: BorderSide(\n" +
    "         {% if (viewInfo.border_width) { %} width: {%=viewInfo.border_width %},{% } %}\n" +
    "         {% if (viewInfo.borderColor) { %} color: Color({%=viewInfo.borderColor %}),{% } %}\n" +
    "        ),\n" +
    "       ),\n" +
    "       {% } %}\n" +
    "      {% } else { %}\n" +
    "      {% if (viewInfo.bgColor) { %}color: Color({%=viewInfo.bgColor %}),{% } %}\n" +
    "      {% } %}dp\n" +
    "        width: {%=viewInfo.width %},\n" +
    "        height: {%=viewInfo.height %},\n" +
    "        child: TextField(\n" +
    "         textAlign: TextAlign.start,\n" +
    "         decoration: InputDecoration(\n" +
    "          {% if (viewInfo.text) { %} hintText: \"{%=viewInfo.text %}\", {% } %}\n" +
    "        hintStyle: TextStyle(color: Colors.grey),\n" +
    "        hintMaxLines: 1\n" +
    "         ),\n" +
    "         style: TextStyle(\n" +
    "        {% if (viewInfo.text) { %} fontFamily: \"{%=viewInfo.font_family %}\", {% } %}\n" +
    "        fontSize: {% if (viewInfo.font) { %}{%=viewInfo.font %}{% } else { %}14{% } %},\n" +
    "        color: Color({%=viewInfo.textColor %}),\n" +
    "        ),\n" +
    "      )\n" +
    "       )\n" +
    "    ),\n" +
    "          {% } %}\n" +
    "          {% if (viewInfo.viewType == \"image\") { %}\n" +
    "          Positioned(\n" +
    "     left: {%=viewInfo.x %},\n" +
    "     top: {%=viewInfo.y %},\n" +
    "     child: Container(\n" +
    "      {% if (viewInfo.borderColor || viewInfo.border_width || viewInfo.border_radius) { %}\n" +
    "       decoration: BoxDecoration(\n" +
    "       {% if (viewInfo.border_radius) { %}borderRadius: const BorderRadius.all(const Radius.circular({%=viewInfo.border_radius %})),{% } %}\n" +
    "       {% if (viewInfo.borderColor || viewInfo.border_width) { %}\n" +
    "        borderSide: BorderSide(\n" +
    "         {% if (viewInfo.border_width) { %} width: {%=viewInfo.border_width %},{% } %}\n" +
    "         {% if (viewInfo.borderColor) { %} color: Color({%=viewInfo.borderColor %}),{% } %}\n" +
    "        ),\n" +
    "       ),\n" +
    "       {% } %}\n" +
    "      {% } else { %}\n" +
    "      {% if (viewInfo.bgColor) { %}color: Color({%=viewInfo.bgColor %}),{% } %}\n" +
    "      {% } %}dp\n" +
    "        width: {%=viewInfo.width %},\n" +
    "        height: {%=viewInfo.height %},\n" +
    "        child: Image.network(\n" +
    "         {% if (viewInfo.image) { %}\"{%=viewInfo.image %}\",{% } %}\n" +
    "         fit: BoxFit.fill\n" +
    "      )\n" +
    "       )\n" +
    "    ),\n" +
    "          {% } %}\n" +
    "          {% if (viewInfo.viewType == \"button\") { %}\n" +
    "          Positioned(\n" +
    "     left: {%=viewInfo.x %},\n" +
    "     top: {%=viewInfo.y %},\n" +
    "     child: Container(\n" +
    "      {% if (viewInfo.borderColor || viewInfo.border_width || viewInfo.border_radius) { %}\n" +
    "       decoration: BoxDecoration(\n" +
    "       {% if (viewInfo.border_radius) { %}borderRadius: const BorderRadius.all(const Radius.circular({%=viewInfo.border_radius %})),{% } %}\n" +
    "       {% if (viewInfo.borderColor || viewInfo.border_width) { %}\n" +
    "        borderSide: BorderSide(\n" +
    "         {% if (viewInfo.border_width) { %} width: {%=viewInfo.border_width %},{% } %}\n" +
    "         {% if (viewInfo.borderColor) { %} color: Color({%=viewInfo.borderColor %}),{% } %}\n" +
    "        ),\n" +
    "       ),\n" +
    "       {% } %}\n" +
    "      {% } else { %}\n" +
    "      {% if (viewInfo.bgColor) { %}color: Color({%=viewInfo.bgColor %}),{% } %}\n" +
    "      {% } %}dp\n" +
    "        width: {%=viewInfo.width %},\n" +
    "        height: {%=viewInfo.height %},\n" +
    "        child: SizedBox(\n" +
    "       child: FlatButton(\n" +
    "        padding: EdgeInsets.symmetric(horizontal: 0),\n" +
    "        child: Text(\n" +
    "         {% if (viewInfo.text) { %} \"{%=viewInfo.text %}\" {% } %},\n" +
    "         textAlign: TextAlign.{%=viewInfo.align %},\n" +
    "         overflow: TextOverflow.ellipsis,\n" +
    "         style: TextStyle(\n" +
    "          {% if (viewInfo.text) { %} fontFamily: \"{%=viewInfo.font_family %}\", {% } %}\n" +
    "          fontSize: {% if (viewInfo.font) { %}{%=viewInfo.font %}{% } else { %}14{% } %},\n" +
    "          color: Color({%=viewInfo.textColor %}),\n" +
    "         ),\n" +
    "        ),\n" +
    "        onPressed: (){\n" +
    "         print(\"点击事件\");\n" +
    "        },\n" +
    "       )\n" +
    "        )\n" +
    "       )\n" +
    "    ),\n" +
    "          {% } %}\n" +
    "          {% if (viewInfo.viewType == \"container\") { %}\n" +
    "          Positioned(\n" +
    "     left: {%=viewInfo.x %},\n" +
    "     top: {%=viewInfo.y %},\n" +
    "     child: Container(\n" +
    "      {% if (viewInfo.borderColor || viewInfo.border_width || viewInfo.border_radius) { %}\n" +
    "       decoration: BoxDecoration(\n" +
    "       {% if (viewInfo.border_radius) { %}borderRadius: const BorderRadius.all(const Radius.circular({%=viewInfo.border_radius %})),{% } %}\n" +
    "       {% if (viewInfo.borderColor || viewInfo.border_width) { %}\n" +
    "        borderSide: BorderSide(\n" +
    "         {% if (viewInfo.border_width) { %} width: {%=viewInfo.border_width %},{% } %}\n" +
    "         {% if (viewInfo.borderColor) { %} color: Color({%=viewInfo.borderColor %}),{% } %}\n" +
    "        ),\n" +
    "       ),\n" +
    "       {% } %}\n" +
    "      {% } else { %}\n" +
    "      {% if (viewInfo.bgColor) { %}color: Color({%=viewInfo.bgColor %}),{% } %}\n" +
    "      {% } %}dp\n" +
    "        width: {%=viewInfo.width %},\n" +
    "        height: {%=viewInfo.height %},\n" +
    "        {% if (viewInfo.views) { %}\n" +
    "                      {% var templateViewsValue = tmpl_flutter_views();var map = {};map[\"root\"] = viewInfo.views; var ret = tmpl(templateViewsValue, map); %}\n" +
    "                      {% if(ret) { %}\n" +
    "                      child: Stack(\n" +
    "         fit: StackFit.passthrough,\n" +
    "         children: <Widget>[\n" +
    "         {%=ret%}\n" +
    "         ]\n" +
    "         ),\n" +
    "         {% } %}\n" +
    "         {% } %}\n" +
    "       )\n" +
    "    ),\n" +
    "          {% } %}\n" +
    "\n" +
    "         {% } %}";
    return string;
}

//------------------- flutter模板 模块 -------------------



