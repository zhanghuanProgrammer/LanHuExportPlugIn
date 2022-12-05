


//------------------- Swift代码 模块 -------------------

function tmpl_swift_code_views() {
    var string =
        "        {% for (var i=0; i<o.root.length; i++) { %}\n" +
        "        {% var tempView = o.root[i]; %}\n" +
        "        {% var fatherView = o[\"fatherView\"]; %}\n" +
        "    \n" +
        "        {% if (tempView.viewType == \"label\") { %}\n" +
        "              let {%=tempView.defineName %} = UILabel.init(frame: CGRect(x: {%=tempView.x %},y: {%=tempView.y %},width: {%=tempView.width %},height: {%=tempView.height %}))\n" +
        "              {% if (tempView.text) { %}{%=tempView.defineName %}.text = \"{%=tempView.text %}\"{% } %}\n" +
        "              {%=tempView.defineName %}.font = {% if (tempView.font_family) { %}UIFont.init(name: \"{%=tempView.font_family %}\", size: {% if (tempView.font) { %}{%=tempView.font %}{% } else { %}14{% } %}){% } else { %}UIFont.systemFont(ofSize: {% if (tempView.font) { %}{%=tempView.font %}{% } else { %}14{% } %}){% } %}\n" +
        "              {% if (tempView.align) { %}\n" +
        "              {% if (tempView.align == \"default\") { %}{%=tempView.defineName %}.textAlignment = NSTextAlignment.left{% } %}\n" +
        "              {% if (tempView.align == \"left\") { %}{%=tempView.defineName %}.textAlignment = NSTextAlignment.left{% } %}\n" +
        "              {% if (tempView.align == \"right\") { %}{%=tempView.defineName %}.textAlignment = NSTextAlignment.right{% } %}\n" +
        "              {% if (tempView.align == \"center\") { %}{%=tempView.defineName %}.textAlignment = NSTextAlignment.center{% } %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.textColor) { %}\n" +
        "              {%=tempView.defineName %}.textColor = UIColor.init(red: {% if (tempView.textColorRed) { %}{%=tempView.textColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.textColorGreen) { %}{%=tempView.textColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.textColorBlue) { %}{%=tempView.textColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.textColorAlpha) { %}{%=tempView.textColorAlpha %}{% } else { %}1{% } %})//{%=tempView.textColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              {%=tempView.defineName %}.backgroundColor = UIColor.init(red: {% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %})//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}{%=tempView.defineName %}.layer.cornerRadius = {%=tempView.border_radius%}{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}{%=tempView.defineName %}.layer.borderColor = UIColor.init(red: {% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}).cgColor//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}{%=tempView.defineName %}.layer.borderWidth = {%=tempView.border_width%}{% } %}\n" +
        "              {%=tempView.defineName %}.layer.masksToBounds = YES\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} {%=fatherView %}.addSubview({%=tempView.defineName %}) {% } %}\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"switch\") { %}\n" +
        "                let {%=tempView.defineName %} = UISwitch.init (frame: CGRect(x: {%=tempView.x %},y: {%=tempView.y %},width: {%=tempView.width %},height: {%=tempView.height %}))\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              {%=tempView.defineName %}.backgroundColor = UIColor.init(red: {% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %})//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}{%=tempView.defineName %}.layer.cornerRadius = {%=tempView.border_radius%}{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}{%=tempView.defineName %}.layer.borderColor = UIColor.init(red: {% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}).cgColor//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}{%=tempView.defineName %}.layer.borderWidth = {%=tempView.border_width%}{% } %}\n" +
        "              {%=tempView.defineName %}.layer.masksToBounds = YES\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} {%=fatherView %}.addSubview({%=tempView.defineName %}) {% } %}\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"scrollView\") { %}\n" +
        "              let {%=tempView.defineName %} = UIScrollView.init(frame: CGRect(x: {%=tempView.x %},y: {%=tempView.y %},width: {%=tempView.width %},height: {%=tempView.height %}))\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              {%=tempView.defineName %}.backgroundColor = UIColor.init(red: {% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %})//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}{%=tempView.defineName %}.layer.cornerRadius = {%=tempView.border_radius%}{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}{%=tempView.defineName %}.layer.borderColor = UIColor.init(red: {% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}).cgColor//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}{%=tempView.defineName %}.layer.borderWidth = {%=tempView.border_width%}{% } %}\n" +
        "              {%=tempView.defineName %}.layer.masksToBounds = YES\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} {%=fatherView %}.addSubview({%=tempView.defineName %}) {% } %}\n" +
        "    \n" +
        "             {% if (tempView.views) { %}\n" +
        "                                    {% var templateViewsValue = tmpl_swift_code_views();var map = {};map[\"root\"] = tempView.views;map[\"fatherView\"] = tempView.defineName; var ret = tmpl(templateViewsValue, map); %}\n" +
        "                                    {% if(ret) { %}\n" +
        "                                    {%=ret%}\n" +
        "                                    {% } %}\n" +
        "                                    {% } %}\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"textField\") { %}\n" +
        "              let {%=tempView.defineName %} = UITextField.init(frame: CGRect(x: {%=tempView.x %},y: {%=tempView.y %},width: {%=tempView.width %},height: {%=tempView.height %}))\n" +
        "              {% if (tempView.text) { %}{%=tempView.defineName %}.text = \"{%=tempView.text %}\"{% } %}\n" +
        "              {%=tempView.defineName %}.font = {% if (tempView.font_family) { %}UIFont.init(name: \"{%=tempView.font_family %}\", size: {% if (tempView.font) { %}{%=tempView.font %}{% } else { %}14{% } %}){% } else { %}UIFont.systemFont(ofSize: {% if (tempView.font) { %}{%=tempView.font %}{% } else { %}14{% } %}){% } %}\n" +
        "              {% if (tempView.align) { %}\n" +
        "              {% if (tempView.align == \"default\") { %}{%=tempView.defineName %}.textAlignment = NSTextAlignment.left{% } %}\n" +
        "              {% if (tempView.align == \"left\") { %}{%=tempView.defineName %}.textAlignment = NSTextAlignment.left{% } %}\n" +
        "              {% if (tempView.align == \"right\") { %}{%=tempView.defineName %}.textAlignment = NSTextAlignment.right{% } %}\n" +
        "              {% if (tempView.align == \"center\") { %}{%=tempView.defineName %}.textAlignment = NSTextAlignment.center{% } %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.textColor) { %}\n" +
        "              {%=tempView.defineName %}.textColor = UIColor.init(red: {% if (tempView.textColorRed) { %}{%=tempView.textColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.textColorGreen) { %}{%=tempView.textColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.textColorBlue) { %}{%=tempView.textColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.textColorAlpha) { %}{%=tempView.textColorAlpha %}{% } else { %}1{% } %})//{%=tempView.textColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              {%=tempView.defineName %}.backgroundColor = UIColor.init(red: {% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %})//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}{%=tempView.defineName %}.layer.cornerRadius = {%=tempView.border_radius%}{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}{%=tempView.defineName %}.layer.borderColor = UIColor.init(red: {% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}).cgColor//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}{%=tempView.defineName %}.layer.borderWidth = {%=tempView.border_width%}{% } %}\n" +
        "              {%=tempView.defineName %}.layer.masksToBounds = YES\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} {%=fatherView %}.addSubview({%=tempView.defineName %}) {% } %}\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"textView\") { %}\n" +
        "              let {%=tempView.defineName %} = UITextView.init(frame: CGRect(x: {%=tempView.x %},y: {%=tempView.y %},width: {%=tempView.width %},height: {%=tempView.height %}))\n" +
        "              {% if (tempView.text) { %}{%=tempView.defineName %}.text = \"{%=tempView.text %}\"{% } %}\n" +
        "              {%=tempView.defineName %}.font = {% if (tempView.font_family) { %}UIFont.init(name: \"{%=tempView.font_family %}\", size: {% if (tempView.font) { %}{%=tempView.font %}{% } else { %}14{% } %}){% } else { %}UIFont.systemFont(ofSize: {% if (tempView.font) { %}{%=tempView.font %}{% } else { %}14{% } %}){% } %}\n" +
        "              {% if (tempView.align) { %}\n" +
        "              {% if (tempView.align == \"default\") { %}{%=tempView.defineName %}.textAlignment = NSTextAlignment.left{% } %}\n" +
        "              {% if (tempView.align == \"left\") { %}{%=tempView.defineName %}.textAlignment = NSTextAlignment.left{% } %}\n" +
        "              {% if (tempView.align == \"right\") { %}{%=tempView.defineName %}.textAlignment = NSTextAlignment.right{% } %}\n" +
        "              {% if (tempView.align == \"center\") { %}{%=tempView.defineName %}.textAlignment = NSTextAlignment.center{% } %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.textColor) { %}\n" +
        "              {%=tempView.defineName %}.textColor = UIColor.init(red: {% if (tempView.textColorRed) { %}{%=tempView.textColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.textColorGreen) { %}{%=tempView.textColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.textColorBlue) { %}{%=tempView.textColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.textColorAlpha) { %}{%=tempView.textColorAlpha %}{% } else { %}1{% } %})//{%=tempView.textColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              {%=tempView.defineName %}.backgroundColor = UIColor.init(red: {% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %})//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}{%=tempView.defineName %}.layer.cornerRadius = {%=tempView.border_radius%}{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}{%=tempView.defineName %}.layer.borderColor = UIColor.init(red: {% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}).cgColor//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}{%=tempView.defineName %}.layer.borderWidth = {%=tempView.border_width%}{% } %}\n" +
        "              {%=tempView.defineName %}.layer.masksToBounds = YES\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} {%=fatherView %}.addSubview({%=tempView.defineName %}) {% } %}\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"imageView\") { %}\n" +
        "              let {%=tempView.defineName %} = UIImageView.init(frame: CGRect(x: {%=tempView.x %},y: {%=tempView.y %},width: {%=tempView.width %},height: {%=tempView.height %}))\n" +
        "              {% if (tempView.image) { %}{%=tempView.defineName %}.image = UIImage(named: \"{%=tempView.image %}\"){% } %}\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              {%=tempView.defineName %}.backgroundColor = UIColor.init(red: {% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %})//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}{%=tempView.defineName %}.layer.cornerRadius = {%=tempView.border_radius%}{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}{%=tempView.defineName %}.layer.borderColor = UIColor.init(red: {% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}).cgColor//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}{%=tempView.defineName %}.layer.borderWidth = {%=tempView.border_width%}{% } %}\n" +
        "              {%=tempView.defineName %}.layer.masksToBounds = YES\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} {%=fatherView %}.addSubview({%=tempView.defineName %}) {% } %}\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"activityIndicatorView\") { %}\n" +
        "              let {%=tempView.defineName %} = UIActivityIndicatorView.init(frame: CGRect(x: {%=tempView.x %},y: {%=tempView.y %},width: {%=tempView.width %},height: {%=tempView.height %}))\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              {%=tempView.defineName %}.backgroundColor = UIColor.init(red: {% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %})//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}{%=tempView.defineName %}.layer.cornerRadius = {%=tempView.border_radius%}{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}{%=tempView.defineName %}.layer.borderColor = UIColor.init(red: {% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}).cgColor//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}{%=tempView.defineName %}.layer.borderWidth = {%=tempView.border_width%}{% } %}\n" +
        "              {%=tempView.defineName %}.layer.masksToBounds = YES\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} {%=fatherView %}.addSubview({%=tempView.defineName %}) {% } %}\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"button\") { %}\n" +
        "                let {%=tempView.defineName %} = UIButton.init(type: .custom)\n" +
        "              {%=tempView.defineName %}.frame = CGRect(x: {%=tempView.x %},y: {%=tempView.y %},width: {%=tempView.width %},height: {%=tempView.height %})\n" +
        "              {% if (tempView.text) { %}{%=tempView.defineName %}.setTitle(\"{%=tempView.text %}\" for: .normal]{% } %}\n" +
        "              {%=tempView.defineName %}.titleLabel.font = {% if (tempView.font_family) { %}UIFont.init(name: \"{%=tempView.font_family %}\", size: {% if (tempView.font) { %}{%=tempView.font %}{% } else { %}14{% } %}){% } else { %}UIFont.systemFont(ofSize: {% if (tempView.font) { %}{%=tempView.font %}{% } else { %}14{% } %}){% } %}\n" +
        "              {% if (tempView.align) { %}\n" +
        "              {% if (tempView.align == \"default\") { %}{%=tempView.defineName %}.titleLabel.textAlignment = NSTextAlignment.left{% } %}\n" +
        "              {% if (tempView.align == \"left\") { %}{%=tempView.defineName %}.titleLabel.textAlignment = NSTextAlignment.left{% } %}\n" +
        "              {% if (tempView.align == \"right\") { %}{%=tempView.defineName %}.titleLabel.textAlignment = NSTextAlignment.right{% } %}\n" +
        "              {% if (tempView.align == \"center\") { %}{%=tempView.defineName %}.titleLabel.textAlignment = NSTextAlignment.center{% } %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.textColor) { %}\n" +
        "              {%=tempView.defineName %}.setTitleColor(UIColor.init(red: {% if (tempView.textColorRed) { %}{%=tempView.textColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.textColorGreen) { %}{%=tempView.textColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.textColorBlue) { %}{%=tempView.textColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.textColorAlpha) { %}{%=tempView.textColorAlpha %}{% } else { %}1{% } %}) for: .normal]//{%=tempView.textColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              {%=tempView.defineName %}.backgroundColor = UIColor.init(red: {% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %})//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}{%=tempView.defineName %}.layer.cornerRadius = {%=tempView.border_radius%}{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}{%=tempView.defineName %}.layer.borderColor = UIColor.init(red: {% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}).cgColor//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}{%=tempView.defineName %}.layer.borderWidth = {%=tempView.border_width%}{% } %}\n" +
        "              {%=tempView.defineName %}.layer.masksToBounds = YES\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} {%=fatherView %}.addSubview({%=tempView.defineName %}) {% } %}\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"progressView\") { %}\n" +
        "              let {%=tempView.defineName %} = UIProgressView.init(frame: CGRect(x: {%=tempView.x %},y: {%=tempView.y %},width: {%=tempView.width %},height: {%=tempView.height %}))\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              {%=tempView.defineName %}.backgroundColor = UIColor.init(red: {% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %})//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}{%=tempView.defineName %}.layer.cornerRadius = {%=tempView.border_radius%}{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}{%=tempView.defineName %}.layer.borderColor = UIColor.init(red: {% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}).cgColor//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}{%=tempView.defineName %}.layer.borderWidth = {%=tempView.border_width%}{% } %}\n" +
        "              {%=tempView.defineName %}.layer.masksToBounds = YES\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} {%=fatherView %}.addSubview({%=tempView.defineName %}) {% } %}\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"tableView\") { %}\n" +
        "              let {%=tempView.defineName %} = UITableView.init(frame: CGRect(x: {%=tempView.x %},y: {%=tempView.y %},width: {%=tempView.width %},height: {%=tempView.height %}))\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              {%=tempView.defineName %}.backgroundColor = UIColor.init(red: {% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %})//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}{%=tempView.defineName %}.layer.cornerRadius = {%=tempView.border_radius%}{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}{%=tempView.defineName %}.layer.borderColor = UIColor.init(red: {% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}).cgColor//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}{%=tempView.defineName %}.layer.borderWidth = {%=tempView.border_width%}{% } %}\n" +
        "              {%=tempView.defineName %}.layer.masksToBounds = YES\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} {%=fatherView %}.addSubview({%=tempView.defineName %}) {% } %}\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"collectionView\") { %}\n" +
        "              let {%=tempView.defineName %} = UICollectionView.init(frame: CGRect(x: {%=tempView.x %},y: {%=tempView.y %},width: {%=tempView.width %},height: {%=tempView.height %}))\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              {%=tempView.defineName %}.backgroundColor = UIColor.init(red: {% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %})//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}{%=tempView.defineName %}.layer.cornerRadius = {%=tempView.border_radius%}{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}{%=tempView.defineName %}.layer.borderColor = UIColor.init(red: {% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}).cgColor//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}{%=tempView.defineName %}.layer.borderWidth = {%=tempView.border_width%}{% } %}\n" +
        "              {%=tempView.defineName %}.layer.masksToBounds = YES\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} {%=fatherView %}.addSubview({%=tempView.defineName %}) {% } %}\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"stepper\") { %}\n" +
        "              let {%=tempView.defineName %} = UIStepper.init(frame: CGRect(x: {%=tempView.x %},y: {%=tempView.y %},width: {%=tempView.width %},height: {%=tempView.height %}))\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              {%=tempView.defineName %}.backgroundColor = UIColor.init(red: {% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %})//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}{%=tempView.defineName %}.layer.cornerRadius = {%=tempView.border_radius%}{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}{%=tempView.defineName %}.layer.borderColor = UIColor.init(red: {% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}).cgColor//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}{%=tempView.defineName %}.layer.borderWidth = {%=tempView.border_width%}{% } %}\n" +
        "              {%=tempView.defineName %}.layer.masksToBounds = YES\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} {%=fatherView %}.addSubview({%=tempView.defineName %}) {% } %}\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"pageControl\") { %}\n" +
        "              let {%=tempView.defineName %} = UIPageControl.init(frame: CGRect(x: {%=tempView.x %},y: {%=tempView.y %},width: {%=tempView.width %},height: {%=tempView.height %}))\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              {%=tempView.defineName %}.backgroundColor = UIColor.init(red: {% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %})//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}{%=tempView.defineName %}.layer.cornerRadius = {%=tempView.border_radius%}{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}{%=tempView.defineName %}.layer.borderColor = UIColor.init(red: {% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}).cgColor//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}{%=tempView.defineName %}.layer.borderWidth = {%=tempView.border_width%}{% } %}\n" +
        "              {%=tempView.defineName %}.layer.masksToBounds = YES\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} {%=fatherView %}.addSubview({%=tempView.defineName %}) {% } %}\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"pickerView\") { %}\n" +
        "              let {%=tempView.defineName %} = UIPickerView.init(frame: CGRect(x: {%=tempView.x %},y: {%=tempView.y %},width: {%=tempView.width %},height: {%=tempView.height %}))\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              {%=tempView.defineName %}.backgroundColor = UIColor.init(red: {% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %})//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}{%=tempView.defineName %}.layer.cornerRadius = {%=tempView.border_radius%}{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}{%=tempView.defineName %}.layer.borderColor = UIColor.init(red: {% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}).cgColor//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}{%=tempView.defineName %}.layer.borderWidth = {%=tempView.border_width%}{% } %}\n" +
        "              {%=tempView.defineName %}.layer.masksToBounds = YES\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} {%=fatherView %}.addSubview({%=tempView.defineName %}) {% } %}\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"datePicker\") { %}\n" +
        "              let {%=tempView.defineName %} = UIDatePicker.init(frame: CGRect(x: {%=tempView.x %},y: {%=tempView.y %},width: {%=tempView.width %},height: {%=tempView.height %}))\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              {%=tempView.defineName %}.backgroundColor = UIColor.init(red: {% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %})//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}{%=tempView.defineName %}.layer.cornerRadius = {%=tempView.border_radius%}{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}{%=tempView.defineName %}.layer.borderColor = UIColor.init(red: {% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}).cgColor//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}{%=tempView.defineName %}.layer.borderWidth = {%=tempView.border_width%}{% } %}\n" +
        "              {%=tempView.defineName %}.layer.masksToBounds = YES\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} {%=fatherView %}.addSubview({%=tempView.defineName %}) {% } %}\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"mapView\") { %}\n" +
        "              let {%=tempView.defineName %} = UIMapView.init(frame: CGRect(x: {%=tempView.x %},y: {%=tempView.y %},width: {%=tempView.width %},height: {%=tempView.height %}))\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              {%=tempView.defineName %}.backgroundColor = UIColor.init(red: {% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %})//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}{%=tempView.defineName %}.layer.cornerRadius = {%=tempView.border_radius%}{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}{%=tempView.defineName %}.layer.borderColor = UIColor.init(red: {% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}).cgColor//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}{%=tempView.defineName %}.layer.borderWidth = {%=tempView.border_width%}{% } %}\n" +
        "              {%=tempView.defineName %}.layer.masksToBounds = YES\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} {%=fatherView %}.addSubview({%=tempView.defineName %}) {% } %}\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"searchBar\") { %}\n" +
        "              let {%=tempView.defineName %} = UISearchBar.init(frame: CGRect(x: {%=tempView.x %},y: {%=tempView.y %},width: {%=tempView.width %},height: {%=tempView.height %}))\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              {%=tempView.defineName %}.backgroundColor = UIColor.init(red: {% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %})//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}{%=tempView.defineName %}.layer.cornerRadius = {%=tempView.border_radius%}{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}{%=tempView.defineName %}.layer.borderColor = UIColor.init(red: {% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}).cgColor//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}{%=tempView.defineName %}.layer.borderWidth = {%=tempView.border_width%}{% } %}\n" +
        "              {%=tempView.defineName %}.layer.masksToBounds = YES\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} {%=fatherView %}.addSubview({%=tempView.defineName %}) {% } %}\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"webView\") { %}\n" +
        "              let {%=tempView.defineName %}= WKWebView.init(frame: CGRect(x: {%=tempView.x %},y: {%=tempView.y %},width: {%=tempView.width %},height: {%=tempView.height %}))\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              {%=tempView.defineName %}.backgroundColor = UIColor.init(red: {% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %})//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}{%=tempView.defineName %}.layer.cornerRadius = {%=tempView.border_radius%}{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}{%=tempView.defineName %}.layer.borderColor = UIColor.init(red: {% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}).cgColor//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}{%=tempView.defineName %}.layer.borderWidth = {%=tempView.border_width%}{% } %}\n" +
        "              {%=tempView.defineName %}.layer.masksToBounds = YES\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} {%=fatherView %}.addSubview({%=tempView.defineName %}) {% } %}\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"slider\") { %}\n" +
        "              let {%=tempView.defineName %} = UISlider.init(frame: CGRect(x: {%=tempView.x %},y: {%=tempView.y %},width: {%=tempView.width %},height: {%=tempView.height %}))\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              {%=tempView.defineName %}.backgroundColor = UIColor.init(red: {% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %})//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}{%=tempView.defineName %}.layer.cornerRadius = {%=tempView.border_radius%}{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}{%=tempView.defineName %}.layer.borderColor = UIColor.init(red: {% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}).cgColor//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}{%=tempView.defineName %}.layer.borderWidth = {%=tempView.border_width%}{% } %}\n" +
        "              {%=tempView.defineName %}.layer.masksToBounds = YES\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} {%=fatherView %}.addSubview({%=tempView.defineName %}) {% } %}\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"view\") { %}\n" +
        "              let {%=tempView.defineName %} = UIView.init(frame: CGRect(x: {%=tempView.x %},y: {%=tempView.y %},width: {%=tempView.width %},height: {%=tempView.height %}))\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              {%=tempView.defineName %}.backgroundColor = UIColor.init(red: {% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %})//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}{%=tempView.defineName %}.layer.cornerRadius = {%=tempView.border_radius%}{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}{%=tempView.defineName %}.layer.borderColor = UIColor.init(red: {% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %}, green: {% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %}, blue: {% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %}, alpha: {% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}).cgColor//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}{%=tempView.defineName %}.layer.borderWidth = {%=tempView.border_width%}{% } %}\n" +
        "              {%=tempView.defineName %}.layer.masksToBounds = YES\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} {%=fatherView %}.addSubview({%=tempView.defineName %}) {% } %}\n" +
        "                                {% if (tempView.views) { %}\n" +
        "                                    {% var templateViewsValue = tmpl_swift_code_views();var map = {};map[\"root\"] = tempView.views;map[\"fatherView\"] = tempView.defineName; var ret = tmpl(templateViewsValue, map); %}\n" +
        "                                    {% if(ret) { %}\n" +
        "                                    {%=ret%}\n" +
        "                                    {% } %}\n" +
        "                                    {% } %}\n" +
        "        {% } %}\n" +
        "        {% } %}\n";
    return string;
}

//------------------- Swift代码模板 模块 -------------------



