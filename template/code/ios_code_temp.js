


//------------------- iOS代码 模块 -------------------

function tmpl_ios_code_views() {
    var string =
        "    {% for (var i=0; i<o.root.length; i++) { %}\n" +
        "        {% var tempView = o.root[i]; %}\n" +
        "        {% var fatherView = o[\"fatherView\"]; %}\n" +
        "    \n" +
        "        {% if (tempView.viewType == \"label\") { %}\n" +
        "             UILabel *{%=tempView.defineName %} = ({\n" +
        "              UILabel *label = [[UILabel alloc] initWithFrame:CGRectMake({%=tempView.x %}, {%=tempView.y %}, {%=tempView.width %}, {%=tempView.height %})];\n" +
        "              {% if (tempView.text) { %}label.text = @\"{%=tempView.text %}\";{% } %}\n" +
        "              label.font = {% if (tempView.font_family) { %}[UIFont fontWithName:@\"{%=tempView.font_family %}\" size:{% if (tempView.font) { %}{%=tempView.font %}{% } else { %}14{% } %}];{% } else { %}[UIFont systemFontSize:{% if (tempView.font) { %}{%=tempView.font %}{% } else { %}14{% } %}];{% } %}\n" +
        "              {% if (tempView.align) { %}\n" +
        "              {% if (tempView.align == \"default\") { %}label.textAlignment = NSTextAlignmentLeft;{% } %}\n" +
        "              {% if (tempView.align == \"left\") { %}label.textAlignment = NSTextAlignmentLeft;{% } %}\n" +
        "              {% if (tempView.align == \"right\") { %}label.textAlignment = NSTextAlignmentRight;{% } %}\n" +
        "              {% if (tempView.align == \"center\") { %}label.textAlignment = NSTextAlignmentCenter;{% } %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.textColor) { %}\n" +
        "              label.textColor = [UIColor colorWithRed:{% if (tempView.textColorRed) { %}{%=tempView.textColorRed %}{% } else { %}1{% } %} green:{% if (tempView.textColorGreen) { %}{%=tempView.textColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.textColorBlue) { %}{%=tempView.textColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.textColorAlpha) { %}{%=tempView.textColorAlpha %}{% } else { %}1{% } %}];//{%=tempView.textColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              label.backgroundColor = [UIColor colorWithRed:{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %} green:{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}];//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}label.layer.cornerRadius = {%=tempView.border_radius%};{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}label.layer.borderColor = [[UIColor colorWithRed:{% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %} green:{% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}] CGColor];//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}label.layer.borderWidth = {%=tempView.border_width%};{% } %}\n" +
        "              label.layer.masksToBounds = YES;\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} [{%=fatherView %} addSubview:label]; {% } %}\n" +
        "              label;\n" +
        "             });\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"switch\") { %}\n" +
        "               UISwitch *{%=tempView.defineName %} = ({\n" +
        "              UISwitch *switch = [[UISwitch alloc] initWithFrame:CGRectMake({%=tempView.x %}, {%=tempView.y %}, {%=tempView.width %}, {%=tempView.height %})];\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              switch.backgroundColor = [UIColor colorWithRed:{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %} green:{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}];//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}switch.layer.cornerRadius = {%=tempView.border_radius%};{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}switch.layer.borderColor = [[UIColor colorWithRed:{% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %} green:{% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}] CGColor];//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}switch.layer.borderWidth = {%=tempView.border_width%};{% } %}\n" +
        "              switch.layer.masksToBounds = YES;\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} [{%=fatherView %} addSubview:switch]; {% } %}\n" +
        "              switch;\n" +
        "             });\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"scrollView\") { %}\n" +
        "               UIScrollView *{%=tempView.defineName %} = ({\n" +
        "              UIScrollView *scrollView = [[UIScrollView alloc] initWithFrame:CGRectMake({%=tempView.x %}, {%=tempView.y %}, {%=tempView.width %}, {%=tempView.height %})];\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              scrollView.backgroundColor = [UIColor colorWithRed:{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %} green:{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}];//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}scrollView.layer.cornerRadius = {%=tempView.border_radius%};{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}scrollView.layer.borderColor = [[UIColor colorWithRed:{% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %} green:{% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}] CGColor];//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}scrollView.layer.borderWidth = {%=tempView.border_width%};{% } %}\n" +
        "              scrollView.layer.masksToBounds = YES;\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} [{%=fatherView %} addSubview:scrollView]; {% } %}\n" +
        "              scrollView;\n" +
        "             });\n" +
        "             {% if (tempView.views) { %}\n" +
        "                                    {% var templateViewsValue = tmpl_ios_code_views();var map = {};map[\"root\"] = tempView.views;map[\"fatherView\"] = tempView.defineName; var ret = tmpl(templateViewsValue, map); %}\n" +
        "                                    {% if(ret) { %}\n" +
        "                                    {%=ret%}\n" +
        "                                    {% } %}\n" +
        "                                    {% } %}\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"textField\") { %}\n" +
        "               UITextField *{%=tempView.defineName %} = ({\n" +
        "              UITextField *textField = [[UITextField alloc] initWithFrame:CGRectMake({%=tempView.x %}, {%=tempView.y %}, {%=tempView.width %}, {%=tempView.height %})];\n" +
        "              {% if (tempView.text) { %}textField.text = @\"{%=tempView.text %}\";{% } %}\n" +
        "              textField.font = {% if (tempView.font_family) { %}[UIFont fontWithName:@\"{%=tempView.font_family %}\" size:{% if (tempView.font) { %}{%=tempView.font %}{% } else { %}14{% } %}];{% } else { %}[UIFont systemFontSize:{% if (tempView.font) { %}{%=tempView.font %}{% } else { %}14{% } %}];{% } %}\n" +
        "              {% if (tempView.align) { %}\n" +
        "              {% if (tempView.align == \"default\") { %}textField.textAlignment = NSTextAlignmentLeft;{% } %}\n" +
        "              {% if (tempView.align == \"left\") { %}textField.textAlignment = NSTextAlignmentLeft;{% } %}\n" +
        "              {% if (tempView.align == \"right\") { %}textField.textAlignment = NSTextAlignmentRight;{% } %}\n" +
        "              {% if (tempView.align == \"center\") { %}textField.textAlignment = NSTextAlignmentCenter;{% } %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.textColor) { %}\n" +
        "              textField.textColor = [UIColor colorWithRed:{% if (tempView.textColorRed) { %}{%=tempView.textColorRed %}{% } else { %}1{% } %} green:{% if (tempView.textColorGreen) { %}{%=tempView.textColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.textColorBlue) { %}{%=tempView.textColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.textColorAlpha) { %}{%=tempView.textColorAlpha %}{% } else { %}1{% } %}];//{%=tempView.textColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              textField.backgroundColor = [UIColor colorWithRed:{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %} green:{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}];//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}textField.layer.cornerRadius = {%=tempView.border_radius%};{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}textField.layer.borderColor = [[UIColor colorWithRed:{% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %} green:{% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}] CGColor];//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}textField.layer.borderWidth = {%=tempView.border_width%};{% } %}\n" +
        "              textField.layer.masksToBounds = YES;\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} [{%=fatherView %} addSubview:textField]; {% } %}\n" +
        "              textField;\n" +
        "             });\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"textView\") { %}\n" +
        "               UITextView *{%=tempView.defineName %} = ({\n" +
        "              UITextView *textView = [[UITextView alloc] initWithFrame:CGRectMake({%=tempView.x %}, {%=tempView.y %}, {%=tempView.width %}, {%=tempView.height %})];\n" +
        "              {% if (tempView.text) { %}textView.text = @\"{%=tempView.text %}\";{% } %}\n" +
        "              textView.font = {% if (tempView.font_family) { %}[UIFont fontWithName:@\"{%=tempView.font_family %}\" size:{% if (tempView.font) { %}{%=tempView.font %}{% } else { %}14{% } %}];{% } else { %}[UIFont systemFontSize:{% if (tempView.font) { %}{%=tempView.font %}{% } else { %}14{% } %}];{% } %}\n" +
        "              {% if (tempView.align) { %}\n" +
        "              {% if (tempView.align == \"default\") { %}textView.textAlignment = NSTextAlignmentLeft;{% } %}\n" +
        "              {% if (tempView.align == \"left\") { %}textView.textAlignment = NSTextAlignmentLeft;{% } %}\n" +
        "              {% if (tempView.align == \"right\") { %}textView.textAlignment = NSTextAlignmentRight;{% } %}\n" +
        "              {% if (tempView.align == \"center\") { %}textView.textAlignment = NSTextAlignmentCenter;{% } %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.textColor) { %}\n" +
        "              textView.textColor = [UIColor colorWithRed:{% if (tempView.textColorRed) { %}{%=tempView.textColorRed %}{% } else { %}1{% } %} green:{% if (tempView.textColorGreen) { %}{%=tempView.textColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.textColorBlue) { %}{%=tempView.textColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.textColorAlpha) { %}{%=tempView.textColorAlpha %}{% } else { %}1{% } %}];//{%=tempView.textColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              textView.backgroundColor = [UIColor colorWithRed:{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %} green:{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}];//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}textView.layer.cornerRadius = {%=tempView.border_radius%};{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}textView.layer.borderColor = [[UIColor colorWithRed:{% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %} green:{% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}] CGColor];//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}textView.layer.borderWidth = {%=tempView.border_width%};{% } %}\n" +
        "              textView.layer.masksToBounds = YES;\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} [{%=fatherView %} addSubview:textView]; {% } %}\n" +
        "              textView;\n" +
        "             });\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"imageView\") { %}\n" +
        "               UIImageView *{%=tempView.defineName %} = ({\n" +
        "              UIImageView *imageView = [[UIImageView alloc] initWithFrame:CGRectMake({%=tempView.x %}, {%=tempView.y %}, {%=tempView.width %}, {%=tempView.height %})];\n" +
        "              {% if (tempView.image) { %}imageView.image = [UIImage imageNamed:@\"{%=tempView.image %}\"];{% } %}\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              imageView.backgroundColor = [UIColor colorWithRed:{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %} green:{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}];//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}imageView.layer.cornerRadius = {%=tempView.border_radius%};{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}imageView.layer.borderColor = [[UIColor colorWithRed:{% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %} green:{% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}] CGColor];//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}imageView.layer.borderWidth = {%=tempView.border_width%};{% } %}\n" +
        "              imageView.layer.masksToBounds = YES;\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} [{%=fatherView %} addSubview:imageView]; {% } %}\n" +
        "              imageView;\n" +
        "             });\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"activityIndicatorView\") { %}\n" +
        "               UIActivityIndicatorView *{%=tempView.defineName %} = ({\n" +
        "              UIActivityIndicatorView *activityIndicatorView = [[UIActivityIndicatorView alloc] initWithFrame:CGRectMake({%=tempView.x %}, {%=tempView.y %}, {%=tempView.width %}, {%=tempView.height %})];\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              activityIndicatorView.backgroundColor = [UIColor colorWithRed:{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %} green:{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}];//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}activityIndicatorView.layer.cornerRadius = {%=tempView.border_radius%};{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}activityIndicatorView.layer.borderColor = [[UIColor colorWithRed:{% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %} green:{% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}] CGColor];//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}activityIndicatorView.layer.borderWidth = {%=tempView.border_width%};{% } %}\n" +
        "              activityIndicatorView.layer.masksToBounds = YES;\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} [{%=fatherView %} addSubview:activityIndicatorView]; {% } %}\n" +
        "              activityIndicatorView;\n" +
        "             });\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"button\") { %}\n" +
        "               UIButton *{%=tempView.defineName %} = ({\n" +
        "                UIButton *button = [UIButton buttonWithType:UIButtonTypeSystem];\n" +
        "              button.frame = CGRectMake({%=tempView.x %}, {%=tempView.y %}, {%=tempView.width %}, {%=tempView.height %});\n" +
        "              {% if (tempView.text) { %}[button setTitle:@\"{%=tempView.text %}\" forState:UIControlStateNormal];{% } %}\n" +
        "              button.titleLabel.font = {% if (tempView.font_family) { %}[UIFont fontWithName:@\"{%=tempView.font_family %}\" size:{% if (tempView.font) { %}{%=tempView.font %}{% } else { %}14{% } %}];{% } else { %}[UIFont systemFontSize:{% if (tempView.font) { %}{%=tempView.font %}{% } else { %}14{% } %}];{% } %}\n" +
        "              {% if (tempView.align) { %}\n" +
        "              {% if (tempView.align == \"default\") { %}button.titleLabel.textAlignment = NSTextAlignmentLeft;{% } %}\n" +
        "              {% if (tempView.align == \"left\") { %}button.titleLabel.textAlignment = NSTextAlignmentLeft;{% } %}\n" +
        "              {% if (tempView.align == \"right\") { %}button.titleLabel.textAlignment = NSTextAlignmentRight;{% } %}\n" +
        "              {% if (tempView.align == \"center\") { %}button.titleLabel.textAlignment = NSTextAlignmentCenter;{% } %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.textColor) { %}\n" +
        "              [button setTitleColor:[UIColor colorWithRed:{% if (tempView.textColorRed) { %}{%=tempView.textColorRed %}{% } else { %}1{% } %} green:{% if (tempView.textColorGreen) { %}{%=tempView.textColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.textColorBlue) { %}{%=tempView.textColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.textColorAlpha) { %}{%=tempView.textColorAlpha %}{% } else { %}1{% } %}]; forState:UIControlStateNormal];//{%=tempView.textColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              button.backgroundColor = [UIColor colorWithRed:{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %} green:{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}];//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}button.layer.cornerRadius = {%=tempView.border_radius%};{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}button.layer.borderColor = [[UIColor colorWithRed:{% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %} green:{% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}] CGColor];//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}button.layer.borderWidth = {%=tempView.border_width%};{% } %}\n" +
        "              button.layer.masksToBounds = YES;\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} [{%=fatherView %} addSubview:button]; {% } %}\n" +
        "              button;\n" +
        "             });\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"progressView\") { %}\n" +
        "                                    UIProgressView *{%=tempView.defineName %} = ({\n" +
        "              UIProgressView *progressView = [[UIProgressView alloc] initWithFrame:CGRectMake({%=tempView.x %}, {%=tempView.y %}, {%=tempView.width %}, {%=tempView.height %})];\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              progressView.backgroundColor = [UIColor colorWithRed:{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %} green:{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}];//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}progressView.layer.cornerRadius = {%=tempView.border_radius%};{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}progressView.layer.borderColor = [[UIColor colorWithRed:{% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %} green:{% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}] CGColor];//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}progressView.layer.borderWidth = {%=tempView.border_width%};{% } %}\n" +
        "              progressView.layer.masksToBounds = YES;\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} [{%=fatherView %} addSubview:progressView]; {% } %}\n" +
        "              progressView;\n" +
        "             });\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"tableView\") { %}\n" +
        "                                    UITableView *{%=tempView.defineName %} = ({\n" +
        "              UITableView *tableView = [[UITableView alloc] initWithFrame:CGRectMake({%=tempView.x %}, {%=tempView.y %}, {%=tempView.width %}, {%=tempView.height %})];\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              tableView.backgroundColor = [UIColor colorWithRed:{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %} green:{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}];//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}tableView.layer.cornerRadius = {%=tempView.border_radius%};{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}tableView.layer.borderColor = [[UIColor colorWithRed:{% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %} green:{% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}] CGColor];//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}tableView.layer.borderWidth = {%=tempView.border_width%};{% } %}\n" +
        "              tableView.layer.masksToBounds = YES;\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} [{%=fatherView %} addSubview:tableView]; {% } %}\n" +
        "              tableView;\n" +
        "             });\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"collectionView\") { %}\n" +
        "                                    UICollectionView *{%=tempView.defineName %} = ({\n" +
        "              UICollectionView *collectionView = [[UICollectionView alloc] initWithFrame:CGRectMake({%=tempView.x %}, {%=tempView.y %}, {%=tempView.width %}, {%=tempView.height %})];\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              collectionView.backgroundColor = [UIColor colorWithRed:{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %} green:{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}];//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}collectionView.layer.cornerRadius = {%=tempView.border_radius%};{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}collectionView.layer.borderColor = [[UIColor colorWithRed:{% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %} green:{% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}] CGColor];//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}collectionView.layer.borderWidth = {%=tempView.border_width%};{% } %}\n" +
        "              collectionView.layer.masksToBounds = YES;\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} [{%=fatherView %} addSubview:collectionView]; {% } %}\n" +
        "              collectionView;\n" +
        "             });\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"stepper\") { %}\n" +
        "                                    UIStepper *{%=tempView.defineName %} = ({\n" +
        "              UIStepper *stepper = [[UIStepper alloc] initWithFrame:CGRectMake({%=tempView.x %}, {%=tempView.y %}, {%=tempView.width %}, {%=tempView.height %})];\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              stepper.backgroundColor = [UIColor colorWithRed:{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %} green:{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}];//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}stepper.layer.cornerRadius = {%=tempView.border_radius%};{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}stepper.layer.borderColor = [[UIColor colorWithRed:{% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %} green:{% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}] CGColor];//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}stepper.layer.borderWidth = {%=tempView.border_width%};{% } %}\n" +
        "              stepper.layer.masksToBounds = YES;\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} [{%=fatherView %} addSubview:stepper]; {% } %}\n" +
        "              stepper;\n" +
        "             });\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"pageControl\") { %}\n" +
        "                                    UIPageControl *{%=tempView.defineName %} = ({\n" +
        "              UIPageControl *pageControl = [[UIPageControl alloc] initWithFrame:CGRectMake({%=tempView.x %}, {%=tempView.y %}, {%=tempView.width %}, {%=tempView.height %})];\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              pageControl.backgroundColor = [UIColor colorWithRed:{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %} green:{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}];//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}pageControl.layer.cornerRadius = {%=tempView.border_radius%};{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}pageControl.layer.borderColor = [[UIColor colorWithRed:{% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %} green:{% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}] CGColor];//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}pageControl.layer.borderWidth = {%=tempView.border_width%};{% } %}\n" +
        "              pageControl.layer.masksToBounds = YES;\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} [{%=fatherView %} addSubview:pageControl]; {% } %}\n" +
        "              pageControl;\n" +
        "             });\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"pickerView\") { %}\n" +
        "                                    UIPickerView *{%=tempView.defineName %} = ({\n" +
        "              UIPickerView *pickerView = [[UIPickerView alloc] initWithFrame:CGRectMake({%=tempView.x %}, {%=tempView.y %}, {%=tempView.width %}, {%=tempView.height %})];\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              pickerView.backgroundColor = [UIColor colorWithRed:{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %} green:{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}];//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}pickerView.layer.cornerRadius = {%=tempView.border_radius%};{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}pickerView.layer.borderColor = [[UIColor colorWithRed:{% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %} green:{% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}] CGColor];//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}pickerView.layer.borderWidth = {%=tempView.border_width%};{% } %}\n" +
        "              pickerView.layer.masksToBounds = YES;\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} [{%=fatherView %} addSubview:pickerView]; {% } %}\n" +
        "              pickerView;\n" +
        "             });\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"datePicker\") { %}\n" +
        "                                    UIDatePicker *{%=tempView.defineName %} = ({\n" +
        "              UIDatePicker *datePicker = [[UIDatePicker alloc] initWithFrame:CGRectMake({%=tempView.x %}, {%=tempView.y %}, {%=tempView.width %}, {%=tempView.height %})];\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              datePicker.backgroundColor = [UIColor colorWithRed:{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %} green:{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}];//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}datePicker.layer.cornerRadius = {%=tempView.border_radius%};{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}datePicker.layer.borderColor = [[UIColor colorWithRed:{% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %} green:{% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}] CGColor];//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}datePicker.layer.borderWidth = {%=tempView.border_width%};{% } %}\n" +
        "              datePicker.layer.masksToBounds = YES;\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} [{%=fatherView %} addSubview:datePicker]; {% } %}\n" +
        "              datePicker;\n" +
        "             });\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"mapView\") { %}\n" +
        "                                    UIMapView *{%=tempView.defineName %} = ({\n" +
        "              UIMapView *mapView = [[UIMapView alloc] initWithFrame:CGRectMake({%=tempView.x %}, {%=tempView.y %}, {%=tempView.width %}, {%=tempView.height %})];\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              mapView.backgroundColor = [UIColor colorWithRed:{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %} green:{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}];//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}mapView.layer.cornerRadius = {%=tempView.border_radius%};{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}mapView.layer.borderColor = [[UIColor colorWithRed:{% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %} green:{% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}] CGColor];//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}mapView.layer.borderWidth = {%=tempView.border_width%};{% } %}\n" +
        "              mapView.layer.masksToBounds = YES;\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} [{%=fatherView %} addSubview:mapView]; {% } %}\n" +
        "              mapView;\n" +
        "             });\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"searchBar\") { %}\n" +
        "                                    UISearchBar *{%=tempView.defineName %} = ({\n" +
        "              UISearchBar *searchBar = [[UISearchBar alloc] initWithFrame:CGRectMake({%=tempView.x %}, {%=tempView.y %}, {%=tempView.width %}, {%=tempView.height %})];\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              searchBar.backgroundColor = [UIColor colorWithRed:{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %} green:{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}];//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}searchBar.layer.cornerRadius = {%=tempView.border_radius%};{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}searchBar.layer.borderColor = [[UIColor colorWithRed:{% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %} green:{% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}] CGColor];//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}searchBar.layer.borderWidth = {%=tempView.border_width%};{% } %}\n" +
        "              searchBar.layer.masksToBounds = YES;\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} [{%=fatherView %} addSubview:searchBar]; {% } %}\n" +
        "              searchBar;\n" +
        "             });\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"webView\") { %}\n" +
        "                                    WKWebView *{%=tempView.defineName %} = ({\n" +
        "              WKWebView *webView = [[WKWebView alloc] initWithFrame:CGRectMake({%=tempView.x %}, {%=tempView.y %}, {%=tempView.width %}, {%=tempView.height %})];\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              webView.backgroundColor = [UIColor colorWithRed:{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %} green:{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}];//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}webView.layer.cornerRadius = {%=tempView.border_radius%};{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}webView.layer.borderColor = [[UIColor colorWithRed:{% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %} green:{% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}] CGColor];//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}webView.layer.borderWidth = {%=tempView.border_width%};{% } %}\n" +
        "              webView.layer.masksToBounds = YES;\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} [{%=fatherView %} addSubview:webView]; {% } %}\n" +
        "              webView;\n" +
        "             });\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"slider\") { %}\n" +
        "                                    UISlider *{%=tempView.defineName %} = ({\n" +
        "              UISlider *slider = [[UISlider alloc] initWithFrame:CGRectMake({%=tempView.x %}, {%=tempView.y %}, {%=tempView.width %}, {%=tempView.height %})];\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              slider.backgroundColor = [UIColor colorWithRed:{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %} green:{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}];//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}slider.layer.cornerRadius = {%=tempView.border_radius%};{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}slider.layer.borderColor = [[UIColor colorWithRed:{% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %} green:{% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}] CGColor];//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}slider.layer.borderWidth = {%=tempView.border_width%};{% } %}\n" +
        "              slider.layer.masksToBounds = YES;\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} [{%=fatherView %} addSubview:slider]; {% } %}\n" +
        "              slider;\n" +
        "             });\n" +
        "        {% } %}\n" +
        "        {% if (tempView.viewType == \"view\") { %}\n" +
        "              UIView *{%=tempView.defineName %} = ({\n" +
        "              UIView *view = [[UIView alloc] initWithFrame:CGRectMake({%=tempView.x %}, {%=tempView.y %}, {%=tempView.width %}, {%=tempView.height %})];\n" +
        "              {% if (tempView.bgColor) { %}\n" +
        "              view.backgroundColor = [UIColor colorWithRed:{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %} green:{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}];//{%=tempView.bgColor %}\n" +
        "              {% } %}\n" +
        "              {% if (tempView.border_radius || tempView.border_width) { %}\n" +
        "              {% if (tempView.border_radius) { %}view.layer.cornerRadius = {%=tempView.border_radius%};{% } %}\n" +
        "              {% if (tempView.borderColorRed) { %}view.layer.borderColor = [[UIColor colorWithRed:{% if (tempView.borderColorRed) { %}{%=tempView.borderColorRed %}{% } else { %}1{% } %} green:{% if (tempView.borderColorGreen) { %}{%=tempView.borderColorGreen %}{% } else { %}1{% } %} blue:{% if (tempView.borderColorBlue) { %}{%=tempView.borderColorBlue %}{% } else { %}1{% } %} alpha:{% if (tempView.borderColorAlpha) { %}{%=tempView.borderColorAlpha %}{% } else { %}1{% } %}] CGColor];//{%=tempView.borderColor %}{% } %}\n" +
        "              {% if (tempView.border_width) { %}view.layer.borderWidth = {%=tempView.border_width%};{% } %}\n" +
        "              view.layer.masksToBounds = YES;\n" +
        "              {% } %}\n" +
        "              {% if (fatherView && fatherView.length > 0) { %} [{%=fatherView %} addSubview:view]; {% } %}\n" +
        "              view;\n" +
        "             });\n" +
        "                                {% if (tempView.views) { %}\n" +
        "                                    {% var templateViewsValue = tmpl_ios_code_views();var map = {};map[\"root\"] = tempView.views;map[\"fatherView\"] = tempView.defineName; var ret = tmpl(templateViewsValue, map); %}\n" +
        "                                    {% if(ret) { %}\n" +
        "                                    {%=ret%}\n" +
        "                                    {% } %}\n" +
        "                                    {% } %}\n" +
        "        {% } %}\n" +
        "        {% } %}";
    return string;
}

//------------------- iOS代码模板 模块 -------------------



