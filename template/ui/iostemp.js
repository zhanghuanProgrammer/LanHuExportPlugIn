


//------------------- iOS模板 模块 -------------------

//模板数据ViewController
function tmpl_ios_viewcontroller() {
  var string =
      "  <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
      "    <document type=\"com.apple.InterfaceBuilder3.CocoaTouch.Storyboard.XIB\" version=\"3.0\" toolsVersion=\"12121\" systemVersion=\"16G29\" targetRuntime=\"iOS.CocoaTouch\" propertyAccessControl=\"none\" useAutolayout=\"YES\" useTraitCollections=\"YES\" colorMatched=\"YES\">\n" +
      "        <device id=\"retina4_7\" orientation=\"portrait\">\n" +
      "            <adaptation id=\"fullscreen\"/>\n" +
      "        </device>\n" +
      "        <dependencies>\n" +
      "            <plugIn identifier=\"com.apple.InterfaceBuilder.IBCocoaTouchPlugin\" version=\"12089\"/>\n" +
      "            <capability name=\"documents saved in the Xcode 8 format\" minToolsVersion=\"8.0\"/>\n" +
      "        </dependencies>\n" +
      "        <scenes>\n" +
      "            <!--View Controller-->\n" +
      "            <scene sceneID=\"84N-Jg-pdF\">\n" +
      "                <objects>\n" +
      "                    <viewController id=\"zis-Mr-Kss\" sceneMemberID=\"viewController\">\n" +
      "                        <layoutGuides>\n" +
      "                            <viewControllerLayoutGuide type=\"top\" id=\"tKX-wS-7Jq\"/>\n" +
      "                            <viewControllerLayoutGuide type=\"bottom\" id=\"tku-jY-el4\"/>\n" +
      "                        </layoutGuides>\n" +
      "                        <view key=\"view\" contentMode=\"scaleToFill\" id=\"n0Z-fF-wfF\">\n" +
      "                            <rect key=\"frame\" x=\"0.0\" y=\"0.0\" width=\"{%=o.root.width %}\" height=\"{%=o.root.height %}\"/>\n" +
      "                            <autoresizingMask key=\"autoresizingMask\" widthSizable=\"YES\" heightSizable=\"YES\"/>\n" +
      "                            <subviews>\n" +
      "                                <view contentMode=\"scaleToFill\" translatesAutoresizingMaskIntoConstraints=\"NO\" id=\"9ju-6x-dsY\">\n" +
      "                                    <rect key=\"frame\" x=\"0.0\" y=\"20\" width=\"{%=o.root.width %}\" height=\"{%=o.root.height %}\"/>\n" +
      "                                    {% if (o.root.views) { %}\n" +
      "                                    {% var templateViewsValue = tmpl_ios_views();var map = {};map[\"root\"] = o.root.views; var ret = tmpl(templateViewsValue, map); %}\n" +
      "                                    {% if(ret) { %}\n" +
      "                                    {%=ret%}\n" +
      "                                    {% } %}\n" +
      "                                    {% } %}\n" +
      "                                    <color key=\"backgroundColor\" white=\"1\" alpha=\"1\" colorSpace=\"custom\" customColorSpace=\"genericGamma22GrayColorSpace\"/>\n" +
      "                                </view>\n" +
      "                            </subviews>\n" +
      "                            <color key=\"backgroundColor\" white=\"1\" alpha=\"1\" colorSpace=\"calibratedWhite\"/>\n" +
      "                            <constraints>\n" +
      "                                <constraint firstItem=\"9ju-6x-dsY\" firstAttribute=\"leading\" secondItem=\"n0Z-fF-wfF\" secondAttribute=\"leading\" id=\"L4g-fe-NOp\"/>\n" +
      "                                <constraint firstItem=\"tku-jY-el4\" firstAttribute=\"top\" secondItem=\"9ju-6x-dsY\" secondAttribute=\"bottom\" id=\"kHf-Tw-7eh\"/>\n" +
      "                                <constraint firstItem=\"9ju-6x-dsY\" firstAttribute=\"top\" secondItem=\"tKX-wS-7Jq\" secondAttribute=\"bottom\" id=\"ynb-x5-XOo\"/>\n" +
      "                                <constraint firstAttribute=\"trailing\" secondItem=\"9ju-6x-dsY\" secondAttribute=\"trailing\" id=\"zkA-27-wdD\"/>\n" +
      "                            </constraints>\n" +
      "                        </view>\n" +
      "                        <size key=\"freeformSize\" width=\"{%=o.root.width %}\" height=\"{%=o.root.height %}\"/>\n" +
      "                    </viewController>\n" +
      "                    <placeholder placeholderIdentifier=\"IBFirstResponder\" id=\"giQ-2R-Y34\" userLabel=\"First Responder\" sceneMemberID=\"firstResponder\"/>\n" +
      "                </objects>\n" +
      "                <point key=\"canvasLocation\" x=\"599.20000000000005\" y=\"100.29985007496252\"/>\n" +
      "            </scene>\n" +
      "        </scenes>\n" +
      "    </document>";
  return string;
}

//模板数据View
function tmpl_ios_views() {
  var string =
      "<subviews>\n" +
      "    {% for (var i=0; i<o.root.length; i++) { %}\n" +
      "    {% var tempView = o.root[i]; %}\n" +
      "    \n" +
      "    {% if (tempView.viewType == \"label\") { %}\n" +
      "                                <label opaque=\"NO\" userInteractionEnabled=\"NO\" contentMode=\"left\" horizontalHuggingPriority=\"251\" verticalHuggingPriority=\"251\" fixedFrame=\"YES\" text=\"{% if (tempView.text) { %}{%=tempView.text %}{% } else { %}Label{% } %}\" {% if (tempView.align) { %}textAlignment=\"{% if (tempView.align == \"default\") { %}natural{% } %}{% if (tempView.align == \"left\") { %}natural{% } %}{% if (tempView.align == \"right\") { %}right{% } %}{% if (tempView.align == \"center\") { %}center{% } %}\"{% } else { %}textAlignment=\"natural\"{% } %} lineBreakMode=\"tailTruncation\" {% if (tempView.line) { %}numberOfLines=\"{%=tempView.line %}\"{% } %} baselineAdjustment=\"alignBaselines\" adjustsFontSizeToFit=\"NO\" translatesAutoresizingMaskIntoConstraints=\"NO\" id=\"{%=tempView.idStr %}\">\n" +
      "                                    <rect key=\"frame\" x=\"{%=tempView.x %}\" y=\"{%=tempView.y %}\" width=\"{%=tempView.width %}\" height=\"{%=tempView.height %}\"/>\n" +
      "                                    <autoresizingMask key=\"autoresizingMask\" flexibleMaxX=\"YES\" flexibleMaxY=\"YES\"/>\n" +
      "                    {% if (tempView.bgColorRed) { %}<color key=\"backgroundColor\" red=\"{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}\" green=\"{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}\" blue=\"{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}\" alpha=\"{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}\" colorSpace=\"calibratedRGB\"/>{% } %}\n" +
      "                                    <fontDescription key=\"fontDescription\" {% if (tempView.font_family) { %} {% if (tempView.font_family) { %} name=\"{%=tempView.font_family%}\" {% } %} {% if (tempView.font_family_for_name) { %} family=\"{%=tempView.font_family_for_name%}\" {% } %} {% } else { %} type=\"system\" {% } %} pointSize=\"{% if (tempView.font) { %}{%=tempView.font %}{% } else { %}14{% } %}\"/>\n" +
      "                                    {% if (tempView.textColorRed) { %}<color key=\"textColor\" red=\"{% if (tempView.textColorRed) { %}{%=tempView.textColorRed %}{% } else { %}1{% } %}\" green=\"{% if (tempView.textColorGreen) { %}{%=tempView.textColorGreen %}{% } else { %}1{% } %}\" blue=\"{% if (tempView.textColorBlue) { %}{%=tempView.textColorBlue %}{% } else { %}1{% } %}\" alpha=\"{% if (tempView.textColorAlpha) { %}{%=tempView.textColorAlpha %}{% } else { %}1{% } %}\" colorSpace=\"calibratedRGB\"/>{% } else { %}<nil key=\"textColor\"/>{% } %}\n" +
      "                                    <nil key=\"highlightedColor\"/>\n" +
      "                                          {% if (tempView.border_radius || tempView.border_width) { %}<userDefinedRuntimeAttributes>\\n {% if (tempView.border_width) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderWidth\">\\n<integer key=\"value\" value=\"{%=tempView.border_width%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.border_radius) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderRadius\">\\n<integer key=\"value\" value=\"{%=tempView.border_radius%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.borderColorRed) { %}<userDefinedRuntimeAttribute type=\"color\" keyPath=\"layer.borderUIColor\">\\n<color key=\"value\" red=\"{%=tempView.borderColorRed%}\" green=\"{%=tempView.borderColorGreen%}\" blue=\"{%=tempView.borderColorBlue%}\" alpha=\"{%=tempView.borderColorAlpha%}\" colorSpace=\"custom\" customColorSpace=\"sRGB\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %}</userDefinedRuntimeAttributes>{% } %}\n" +
      "                    \n" +
      "                                </label>\n" +
      "    {% } %}\n" +
      "    {% if (tempView.viewType == \"switch\") { %}\n" +
      "                                <switch opaque=\"NO\" contentMode=\"scaleToFill\" horizontalHuggingPriority=\"750\" verticalHuggingPriority=\"750\" fixedFrame=\"YES\" contentHorizontalAlignment=\"center\" contentVerticalAlignment=\"center\" on=\"YES\" translatesAutoresizingMaskIntoConstraints=\"NO\" id=\"{%=tempView.idStr %}\">\n" +
      "                                    <rect key=\"frame\" x=\"{%=tempView.x %}\" y=\"{%=tempView.y %}\" width=\"51\" height=\"31\"/>\n" +
      "                                    <autoresizingMask key=\"autoresizingMask\" flexibleMaxX=\"YES\" flexibleMaxY=\"YES\"/>\n" +
      "                    {% if (tempView.bgColorRed) { %}<color key=\"backgroundColor\" red=\"{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}\" green=\"{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}\" blue=\"{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}\" alpha=\"{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}\" colorSpace=\"calibratedRGB\"/>{% } %}\n" +
      "                                          {% if (tempView.border_radius || tempView.border_width) { %}<userDefinedRuntimeAttributes>\\n {% if (tempView.border_width) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderWidth\">\\n<integer key=\"value\" value=\"{%=tempView.border_width%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.border_radius) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderRadius\">\\n<integer key=\"value\" value=\"{%=tempView.border_radius%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.borderColorRed) { %}<userDefinedRuntimeAttribute type=\"color\" keyPath=\"layer.borderUIColor\">\\n<color key=\"value\" red=\"{%=tempView.borderColorRed%}\" green=\"{%=tempView.borderColorGreen%}\" blue=\"{%=tempView.borderColorBlue%}\" alpha=\"{%=tempView.borderColorAlpha%}\" colorSpace=\"custom\" customColorSpace=\"sRGB\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %}</userDefinedRuntimeAttributes>{% } %}\n" +
      "                    \n" +
      "                                </switch>\n" +
      "    {% } %}\n" +
      "    {% if (tempView.viewType == \"scrollView\") { %}\n" +
      "                                <scrollView clipsSubviews=\"YES\" multipleTouchEnabled=\"YES\" contentMode=\"scaleToFill\" fixedFrame=\"YES\" translatesAutoresizingMaskIntoConstraints=\"NO\" id=\"{%=tempView.idStr %}\">\n" +
      "                                    <rect key=\"frame\" x=\"{%=tempView.x %}\" y=\"{%=tempView.y %}\" width=\"{%=tempView.width %}\" height=\"{%=tempView.height %}\"/>\n" +
      "                                    <autoresizingMask key=\"autoresizingMask\" flexibleMaxX=\"YES\" flexibleMaxY=\"YES\"/>\n" +
      "                    {% if (tempView.bgColorRed) { %}<color key=\"backgroundColor\" red=\"{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}\" green=\"{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}\" blue=\"{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}\" alpha=\"{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}\" colorSpace=\"calibratedRGB\"/>{% } %}\n" +
      "                                           {% if (tempView.views) { %}\n" +
      "                                           {% var templateViewsValue = tmpl_ios_views();var map = {};map[\"root\"] = tempView.views; var ret = tmpl(templateViewsValue, map); %}\n" +
      "                                           {% if(ret) { %}\n" +
      "                                           {%=ret%}\n" +
      "                                           {% } %}\n" +
      "                                           {% } %}\n" +
      "                                          {% if (tempView.border_radius || tempView.border_width) { %}<userDefinedRuntimeAttributes>\\n {% if (tempView.border_width) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderWidth\">\\n<integer key=\"value\" value=\"{%=tempView.border_width%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.border_radius) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderRadius\">\\n<integer key=\"value\" value=\"{%=tempView.border_radius%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.borderColorRed) { %}<userDefinedRuntimeAttribute type=\"color\" keyPath=\"layer.borderUIColor\">\\n<color key=\"value\" red=\"{%=tempView.borderColorRed%}\" green=\"{%=tempView.borderColorGreen%}\" blue=\"{%=tempView.borderColorBlue%}\" alpha=\"{%=tempView.borderColorAlpha%}\" colorSpace=\"custom\" customColorSpace=\"sRGB\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %}</userDefinedRuntimeAttributes>{% } %}\n" +
      "                    \n" +
      "                                </scrollView>\n" +
      "    {% } %}\n" +
      "    {% if (tempView.viewType == \"textField\") { %}\n" +
      "                                <textField opaque=\"NO\" clipsSubviews=\"YES\" contentMode=\"scaleToFill\" fixedFrame=\"YES\" contentHorizontalAlignment=\"left\" contentVerticalAlignment=\"center\" borderStyle=\"roundedRect\" textAlignment=\"natural\" minimumFontSize=\"17\" translatesAutoresizingMaskIntoConstraints=\"NO\" id=\"{%=tempView.idStr %}\">\n" +
      "                                    <rect key=\"frame\" x=\"{%=tempView.x %}\" y=\"{%=tempView.y %}\" width=\"{%=tempView.width %}\" height=\"30\"/>\n" +
      "                                    <autoresizingMask key=\"autoresizingMask\" flexibleMaxX=\"YES\" flexibleMaxY=\"YES\"/>\n" +
      "                    {% if (tempView.bgColorRed) { %}<color key=\"backgroundColor\" red=\"{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}\" green=\"{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}\" blue=\"{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}\" alpha=\"{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}\" colorSpace=\"calibratedRGB\"/>{% } %}\n" +
      "                                    {% if (tempView.textColorRed) { %}<color key=\"textColor\" red=\"{% if (tempView.textColorRed) { %}{%=tempView.textColorRed %}{% } else { %}1{% } %}\" green=\"{% if (tempView.textColorGreen) { %}{%=tempView.textColorGreen %}{% } else { %}1{% } %}\" blue=\"{% if (tempView.textColorBlue) { %}{%=tempView.textColorBlue %}{% } else { %}1{% } %}\" alpha=\"{% if (tempView.textColorAlpha) { %}{%=tempView.textColorAlpha %}{% } else { %}1{% } %}\" colorSpace=\"calibratedRGB\"/>{% } else { %}<nil key=\"textColor\"/>{% } %}\n" +
      "                                    <fontDescription key=\"fontDescription\" {% if (tempView.font_family) { %} {% if (tempView.font_family) { %} name=\"{%=tempView.font_family%}\" {% } %} {% if (tempView.font_family_for_name) { %} family=\"{%=tempView.font_family_for_name%}\" {% } %} {% } else { %} type=\"system\" {% } %} pointSize=\"{% if (tempView.font) { %}{%=tempView.font %}{% } else { %}14{% } %}\"/>\n" +
      "                                    <textInputTraits key=\"textInputTraits\"/>\n" +
      "                                          {% if (tempView.border_radius || tempView.border_width) { %}<userDefinedRuntimeAttributes>\\n {% if (tempView.border_width) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderWidth\">\\n<integer key=\"value\" value=\"{%=tempView.border_width%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.border_radius) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderRadius\">\\n<integer key=\"value\" value=\"{%=tempView.border_radius%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.borderColorRed) { %}<userDefinedRuntimeAttribute type=\"color\" keyPath=\"layer.borderUIColor\">\\n<color key=\"value\" red=\"{%=tempView.borderColorRed%}\" green=\"{%=tempView.borderColorGreen%}\" blue=\"{%=tempView.borderColorBlue%}\" alpha=\"{%=tempView.borderColorAlpha%}\" colorSpace=\"custom\" customColorSpace=\"sRGB\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %}</userDefinedRuntimeAttributes>{% } %}\n" +
      "                    \n" +
      "                                </textField>\n" +
      "    {% } %}\n" +
      "    {% if (tempView.viewType == \"textView\") { %}\n" +
      "                                <textView clipsSubviews=\"YES\" multipleTouchEnabled=\"YES\" contentMode=\"scaleToFill\" fixedFrame=\"YES\" textAlignment=\"natural\" translatesAutoresizingMaskIntoConstraints=\"NO\" id=\"{%=tempView.idStr %}\">\n" +
      "                                    <rect key=\"frame\" x=\"{%=tempView.x %}\" y=\"{%=tempView.y %}\" width=\"{%=tempView.width %}\" height=\"{%=tempView.height %}\"/>\n" +
      "                                    <autoresizingMask key=\"autoresizingMask\" flexibleMaxX=\"YES\" flexibleMaxY=\"YES\"/>\n" +
      "                    {% if (tempView.bgColorRed) { %}<color key=\"backgroundColor\" red=\"{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}\" green=\"{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}\" blue=\"{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}\" alpha=\"{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}\" colorSpace=\"calibratedRGB\"/>{% } else { %}<color key=\"backgroundColor\" white=\"0.0\" alpha=\"0.0\" colorSpace=\"custom\" customColorSpace=\"genericGamma22GrayColorSpace\"/>{% } %}\n" +
      "                                    <string key=\"text\">Lorem ipsum dolor sit er elit lamet, consectetaur cillium adipisicing pecu, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nam liber te conscient to factor tum poen legum odioque civiuda.</string>\n" +
      "                    {% if (tempView.textColorRed) { %}<color key=\"textColor\" red=\"{% if (tempView.textColorRed) { %}{%=tempView.textColorRed %}{% } else { %}1{% } %}\" green=\"{% if (tempView.textColorGreen) { %}{%=tempView.textColorGreen %}{% } else { %}1{% } %}\" blue=\"{% if (tempView.textColorBlue) { %}{%=tempView.textColorBlue %}{% } else { %}1{% } %}\" alpha=\"{% if (tempView.textColorAlpha) { %}{%=tempView.textColorAlpha %}{% } else { %}1{% } %}\" colorSpace=\"calibratedRGB\"/>{% } %}\n" +
      "                                    <fontDescription key=\"fontDescription\" {% if (tempView.font_family) { %} {% if (tempView.font_family) { %} name=\"{%=tempView.font_family%}\" {% } %} {% if (tempView.font_family_for_name) { %} family=\"{%=tempView.font_family_for_name%}\" {% } %} {% } else { %} type=\"system\" {% } %} pointSize=\"{% if (tempView.font) { %}{%=tempView.font %}{% } else { %}14{% } %}\"/>\n" +
      "                                    <textInputTraits key=\"textInputTraits\" autocapitalizationType=\"sentences\"/>\n" +
      "                                          {% if (tempView.border_radius || tempView.border_width) { %}<userDefinedRuntimeAttributes>\\n {% if (tempView.border_width) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderWidth\">\\n<integer key=\"value\" value=\"{%=tempView.border_width%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.border_radius) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderRadius\">\\n<integer key=\"value\" value=\"{%=tempView.border_radius%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.borderColorRed) { %}<userDefinedRuntimeAttribute type=\"color\" keyPath=\"layer.borderUIColor\">\\n<color key=\"value\" red=\"{%=tempView.borderColorRed%}\" green=\"{%=tempView.borderColorGreen%}\" blue=\"{%=tempView.borderColorBlue%}\" alpha=\"{%=tempView.borderColorAlpha%}\" colorSpace=\"custom\" customColorSpace=\"sRGB\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %}</userDefinedRuntimeAttributes>{% } %}\n" +
      "                    \n" +
      "                                </textView>\n" +
      "    {% } %}\n" +
      "    {% if (tempView.viewType == \"imageView\") { %}\n" +
      "                                <imageView userInteractionEnabled=\"NO\" contentMode=\"scaleToFill\" horizontalHuggingPriority=\"251\" verticalHuggingPriority=\"251\" fixedFrame=\"YES\" {% if (tempView.image) { %}image=\"{%=tempView.image %}\"{% } %} translatesAutoresizingMaskIntoConstraints=\"NO\" id=\"{%=tempView.idStr %}\">\n" +
      "                                    <rect key=\"frame\" x=\"{%=tempView.x %}\" y=\"{%=tempView.y %}\" width=\"{%=tempView.width %}\" height=\"{%=tempView.height %}\"/>\n" +
      "                                    <autoresizingMask key=\"autoresizingMask\" flexibleMaxX=\"YES\" flexibleMaxY=\"YES\"/>\n" +
      "                    {% if (tempView.bgColorRed) { %}<color key=\"backgroundColor\" red=\"{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}\" green=\"{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}\" blue=\"{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}\" alpha=\"{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}\" colorSpace=\"calibratedRGB\"/>{% } %}\n" +
      "                                          {% if (tempView.border_radius || tempView.border_width) { %}<userDefinedRuntimeAttributes>\\n {% if (tempView.border_width) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderWidth\">\\n<integer key=\"value\" value=\"{%=tempView.border_width%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.border_radius) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderRadius\">\\n<integer key=\"value\" value=\"{%=tempView.border_radius%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.borderColorRed) { %}<userDefinedRuntimeAttribute type=\"color\" keyPath=\"layer.borderUIColor\">\\n<color key=\"value\" red=\"{%=tempView.borderColorRed%}\" green=\"{%=tempView.borderColorGreen%}\" blue=\"{%=tempView.borderColorBlue%}\" alpha=\"{%=tempView.borderColorAlpha%}\" colorSpace=\"custom\" customColorSpace=\"sRGB\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %}</userDefinedRuntimeAttributes>{% } %}\n" +
      "                    \n" +
      "                                </imageView>\n" +
      "    {% } %}\n" +
      "    {% if (tempView.viewType == \"activityIndicatorView\") { %}\n" +
      "                                <activityIndicatorView opaque=\"NO\" contentMode=\"scaleToFill\" horizontalHuggingPriority=\"750\" verticalHuggingPriority=\"750\" fixedFrame=\"YES\" style=\"gray\" translatesAutoresizingMaskIntoConstraints=\"NO\" id=\"{%=tempView.idStr %}\">\n" +
      "                                    <rect key=\"frame\" x=\"{%=tempView.x %}\" y=\"{%=tempView.y %}\" width=\"20\" height=\"20\"/>\n" +
      "                                    <autoresizingMask key=\"autoresizingMask\" flexibleMaxX=\"YES\" flexibleMaxY=\"YES\"/>\n" +
      "                    {% if (tempView.bgColorRed) { %}<color key=\"backgroundColor\" red=\"{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}\" green=\"{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}\" blue=\"{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}\" alpha=\"{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}\" colorSpace=\"calibratedRGB\"/>{% } %}\n" +
      "                                          {% if (tempView.border_radius || tempView.border_width) { %}<userDefinedRuntimeAttributes>\\n {% if (tempView.border_width) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderWidth\">\\n<integer key=\"value\" value=\"{%=tempView.border_width%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.border_radius) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderRadius\">\\n<integer key=\"value\" value=\"{%=tempView.border_radius%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.borderColorRed) { %}<userDefinedRuntimeAttribute type=\"color\" keyPath=\"layer.borderUIColor\">\\n<color key=\"value\" red=\"{%=tempView.borderColorRed%}\" green=\"{%=tempView.borderColorGreen%}\" blue=\"{%=tempView.borderColorBlue%}\" alpha=\"{%=tempView.borderColorAlpha%}\" colorSpace=\"custom\" customColorSpace=\"sRGB\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %}</userDefinedRuntimeAttributes>{% } %}\n" +
      "                    \n" +
      "                                </activityIndicatorView>\n" +
      "    {% } %}\n" +
      "    {% if (tempView.viewType == \"button\") { %}\n" +
      "                                <button opaque=\"NO\" contentMode=\"scaleToFill\" fixedFrame=\"YES\" contentHorizontalAlignment=\"center\" contentVerticalAlignment=\"center\" buttonType=\"roundedRect\" lineBreakMode=\"middleTruncation\" translatesAutoresizingMaskIntoConstraints=\"NO\" id=\"{%=tempView.idStr %}\">\n" +
      "                                    <rect key=\"frame\" x=\"{%=tempView.x %}\" y=\"{%=tempView.y %}\" width=\"{%=tempView.width %}\" height=\"{%=tempView.height %}\"/>\n" +
      "                                    <autoresizingMask key=\"autoresizingMask\" flexibleMaxX=\"YES\" flexibleMaxY=\"YES\"/>\n" +
      "                    {% if (tempView.bgColorRed) { %}<color key=\"backgroundColor\" red=\"{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}\" green=\"{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}\" blue=\"{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}\" alpha=\"{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}\" colorSpace=\"calibratedRGB\"/>{% } %}\n" +
      "                    <fontDescription key=\"fontDescription\" {% if (tempView.font_family) { %} {% if (tempView.font_family) { %} name=\"{%=tempView.font_family%}\" {% } %} {% if (tempView.font_family_for_name) { %} family=\"{%=tempView.font_family_for_name%}\" {% } %} {% } else { %} type=\"system\" {% } %} pointSize=\"{% if (tempView.font) { %}{%=tempView.font %}{% } else { %}14{% } %}\"/>\n" +
      "                                    {% if (tempView.textColorRed) { %}<state key=\"normal\" title=\"{% if (tempView.text) { %}{%=tempView.text %}{% } else { %}Button{% } %}\">\n" +
      "                        <color key=\"titleColor\" red=\"{% if (tempView.textColorRed) { %}{%=tempView.textColorRed %}{% } else { %}1{% } %}\" green=\"{% if (tempView.textColorGreen) { %}{%=tempView.textColorGreen %}{% } else { %}1{% } %}\" blue=\"{% if (tempView.textColorBlue) { %}{%=tempView.textColorBlue %}{% } else { %}1{% } %}\" alpha=\"{% if (tempView.textColorAlpha) { %}{%=tempView.textColorAlpha %}{% } else { %}1{% } %}\" colorSpace=\"calibratedRGB\"/>\n" +
      "                        </state>{% } else { %}<state key=\"normal\" title=\"{% if (tempView.text) { %}{%=tempView.text %}{% } else { %}Button{% } %}\"/>{% } %}\n" +
      "                                          {% if (tempView.border_radius || tempView.border_width) { %}<userDefinedRuntimeAttributes>\\n {% if (tempView.border_width) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderWidth\">\\n<integer key=\"value\" value=\"{%=tempView.border_width%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.border_radius) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderRadius\">\\n<integer key=\"value\" value=\"{%=tempView.border_radius%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.borderColorRed) { %}<userDefinedRuntimeAttribute type=\"color\" keyPath=\"layer.borderUIColor\">\\n<color key=\"value\" red=\"{%=tempView.borderColorRed%}\" green=\"{%=tempView.borderColorGreen%}\" blue=\"{%=tempView.borderColorBlue%}\" alpha=\"{%=tempView.borderColorAlpha%}\" colorSpace=\"custom\" customColorSpace=\"sRGB\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %}</userDefinedRuntimeAttributes>{% } %}\n" +
      "                    \n" +
      "                                </button>\n" +
      "    {% } %}\n" +
      "    {% if (tempView.viewType == \"progressView\") { %}\n" +
      "                                <progressView opaque=\"NO\" contentMode=\"scaleToFill\" verticalHuggingPriority=\"750\" fixedFrame=\"YES\" progress=\"0.5\" translatesAutoresizingMaskIntoConstraints=\"NO\" id=\"{%=tempView.idStr %}\">\n" +
      "                                    <rect key=\"frame\" x=\"{%=tempView.x %}\" y=\"{%=tempView.y %}\" width=\"{%=tempView.width %}\" height=\"2\"/>\n" +
      "                                    <autoresizingMask key=\"autoresizingMask\" flexibleMaxX=\"YES\" flexibleMaxY=\"YES\"/>\n" +
      "                    {% if (tempView.bgColorRed) { %}<color key=\"backgroundColor\" red=\"{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}\" green=\"{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}\" blue=\"{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}\" alpha=\"{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}\" colorSpace=\"calibratedRGB\"/>{% } %}\n" +
      "                                          {% if (tempView.border_radius || tempView.border_width) { %}<userDefinedRuntimeAttributes>\\n {% if (tempView.border_width) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderWidth\">\\n<integer key=\"value\" value=\"{%=tempView.border_width%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.border_radius) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderRadius\">\\n<integer key=\"value\" value=\"{%=tempView.border_radius%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.borderColorRed) { %}<userDefinedRuntimeAttribute type=\"color\" keyPath=\"layer.borderUIColor\">\\n<color key=\"value\" red=\"{%=tempView.borderColorRed%}\" green=\"{%=tempView.borderColorGreen%}\" blue=\"{%=tempView.borderColorBlue%}\" alpha=\"{%=tempView.borderColorAlpha%}\" colorSpace=\"custom\" customColorSpace=\"sRGB\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %}</userDefinedRuntimeAttributes>{% } %}\n" +
      "                    \n" +
      "                                </progressView>\n" +
      "    {% } %}\n" +
      "    {% if (tempView.viewType == \"tableView\") { %}\n" +
      "                                <tableView clipsSubviews=\"YES\" contentMode=\"scaleToFill\" fixedFrame=\"YES\" alwaysBounceVertical=\"YES\" dataMode=\"prototypes\" style=\"plain\" separatorStyle=\"default\" rowHeight=\"44\" sectionHeaderHeight=\"28\" sectionFooterHeight=\"28\" translatesAutoresizingMaskIntoConstraints=\"NO\" id=\"{%=tempView.idStr %}\">\n" +
      "                                    <rect key=\"frame\" x=\"{%=tempView.x %}\" y=\"{%=tempView.y %}\" width=\"{%=tempView.width %}\" height=\"{%=tempView.height %}\"/>\n" +
      "                                    <autoresizingMask key=\"autoresizingMask\" flexibleMaxX=\"YES\" flexibleMaxY=\"YES\"/>\n" +
      "                    {% if (tempView.bgColorRed) { %}<color key=\"backgroundColor\" red=\"{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}\" green=\"{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}\" blue=\"{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}\" alpha=\"{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}\" colorSpace=\"calibratedRGB\"/>{% } else { %}<color key=\"backgroundColor\" white=\"0.0\" alpha=\"0.0\" colorSpace=\"custom\" customColorSpace=\"genericGamma22GrayColorSpace\"/>{% } %}\n" +
      "                                          {% if (tempView.border_radius || tempView.border_width) { %}<userDefinedRuntimeAttributes>\\n {% if (tempView.border_width) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderWidth\">\\n<integer key=\"value\" value=\"{%=tempView.border_width%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.border_radius) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderRadius\">\\n<integer key=\"value\" value=\"{%=tempView.border_radius%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.borderColorRed) { %}<userDefinedRuntimeAttribute type=\"color\" keyPath=\"layer.borderUIColor\">\\n<color key=\"value\" red=\"{%=tempView.borderColorRed%}\" green=\"{%=tempView.borderColorGreen%}\" blue=\"{%=tempView.borderColorBlue%}\" alpha=\"{%=tempView.borderColorAlpha%}\" colorSpace=\"custom\" customColorSpace=\"sRGB\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %}</userDefinedRuntimeAttributes>{% } %}\n" +
      "                    \n" +
      "                                </tableView>\n" +
      "    {% } %}\n" +
      "    {% if (tempView.viewType == \"collectionView\") { %}\n" +
      "                                <collectionView clipsSubviews=\"YES\" multipleTouchEnabled=\"YES\" contentMode=\"scaleToFill\" fixedFrame=\"YES\" dataMode=\"prototypes\" translatesAutoresizingMaskIntoConstraints=\"NO\" id=\"{%=tempView.idStr %}\">\n" +
      "                                    <rect key=\"frame\" x=\"{%=tempView.x %}\" y=\"{%=tempView.y %}\" width=\"{%=tempView.width %}\" height=\"{%=tempView.height %}\"/>\n" +
      "                                    <autoresizingMask key=\"autoresizingMask\" flexibleMaxX=\"YES\" flexibleMaxY=\"YES\"/>\n" +
      "                    {% if (tempView.bgColorRed) { %}<color key=\"backgroundColor\" red=\"{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}\" green=\"{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}\" blue=\"{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}\" alpha=\"{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}\" colorSpace=\"calibratedRGB\"/>{% } else { %}<color key=\"backgroundColor\" white=\"0.0\" alpha=\"0.0\" colorSpace=\"custom\" customColorSpace=\"genericGamma22GrayColorSpace\"/>{% } %}\n" +
      "                                    <collectionViewFlowLayout key=\"collectionViewLayout\" minimumLineSpacing=\"10\" minimumInteritemSpacing=\"10\" id=\"iud-6I-mZG\">\n" +
      "                                        <size key=\"itemSize\" width=\"50\" height=\"50\"/>\n" +
      "                                        <size key=\"headerReferenceSize\" width=\"0.0\" height=\"0.0\"/>\n" +
      "                                        <size key=\"footerReferenceSize\" width=\"0.0\" height=\"0.0\"/>\n" +
      "                                        <inset key=\"sectionInset\" minX=\"0.0\" minY=\"0.0\" maxX=\"0.0\" maxY=\"0.0\"/>\n" +
      "                                    </collectionViewFlowLayout>\n" +
      "                                    <cells>\n" +
      "                                        <collectionViewCell opaque=\"NO\" clipsSubviews=\"YES\" multipleTouchEnabled=\"YES\" contentMode=\"center\" id=\"kFT-tQ-qBs\">\n" +
      "                                            <rect key=\"frame\" x=\"0.0\" y=\"0.0\" width=\"50\" height=\"50\"/>\n" +
      "                                            <autoresizingMask key=\"autoresizingMask\" flexibleMaxX=\"YES\" flexibleMaxY=\"YES\"/>\n" +
      "                                            <view key=\"contentView\" opaque=\"NO\" clipsSubviews=\"YES\" multipleTouchEnabled=\"YES\" contentMode=\"center\">\n" +
      "                                                <rect key=\"frame\" x=\"0.0\" y=\"0.0\" width=\"50\" height=\"50\"/>\n" +
      "                                                <autoresizingMask key=\"autoresizingMask\"/>\n" +
      "                                            </view>\n" +
      "                                        </collectionViewCell>\n" +
      "                                    </cells>\n" +
      "                                          {% if (tempView.border_radius || tempView.border_width) { %}<userDefinedRuntimeAttributes>\\n {% if (tempView.border_width) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderWidth\">\\n<integer key=\"value\" value=\"{%=tempView.border_width%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.border_radius) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderRadius\">\\n<integer key=\"value\" value=\"{%=tempView.border_radius%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.borderColorRed) { %}<userDefinedRuntimeAttribute type=\"color\" keyPath=\"layer.borderUIColor\">\\n<color key=\"value\" red=\"{%=tempView.borderColorRed%}\" green=\"{%=tempView.borderColorGreen%}\" blue=\"{%=tempView.borderColorBlue%}\" alpha=\"{%=tempView.borderColorAlpha%}\" colorSpace=\"custom\" customColorSpace=\"sRGB\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %}</userDefinedRuntimeAttributes>{% } %}\n" +
      "                    \n" +
      "                                </collectionView>\n" +
      "    {% } %}\n" +
      "    {% if (tempView.viewType == \"stepper\") { %}\n" +
      "                                <stepper opaque=\"NO\" contentMode=\"scaleToFill\" horizontalHuggingPriority=\"750\" verticalHuggingPriority=\"750\" fixedFrame=\"YES\" contentHorizontalAlignment=\"center\" contentVerticalAlignment=\"center\" maximumValue=\"100\" translatesAutoresizingMaskIntoConstraints=\"NO\" id=\"{%=tempView.idStr %}\">\n" +
      "                                    <rect key=\"frame\" x=\"{%=tempView.x %}\" y=\"{%=tempView.y %}\" width=\"94\" height=\"29\"/>\n" +
      "                                    <autoresizingMask key=\"autoresizingMask\" flexibleMaxX=\"YES\" flexibleMaxY=\"YES\"/>\n" +
      "                    {% if (tempView.bgColorRed) { %}<color key=\"backgroundColor\" red=\"{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}\" green=\"{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}\" blue=\"{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}\" alpha=\"{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}\" colorSpace=\"calibratedRGB\"/>{% } %}\n" +
      "                                          {% if (tempView.border_radius || tempView.border_width) { %}<userDefinedRuntimeAttributes>\\n {% if (tempView.border_width) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderWidth\">\\n<integer key=\"value\" value=\"{%=tempView.border_width%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.border_radius) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderRadius\">\\n<integer key=\"value\" value=\"{%=tempView.border_radius%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.borderColorRed) { %}<userDefinedRuntimeAttribute type=\"color\" keyPath=\"layer.borderUIColor\">\\n<color key=\"value\" red=\"{%=tempView.borderColorRed%}\" green=\"{%=tempView.borderColorGreen%}\" blue=\"{%=tempView.borderColorBlue%}\" alpha=\"{%=tempView.borderColorAlpha%}\" colorSpace=\"custom\" customColorSpace=\"sRGB\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %}</userDefinedRuntimeAttributes>{% } %}\n" +
      "                    \n" +
      "                                </stepper>\n" +
      "    {% } %}\n" +
      "    {% if (tempView.viewType == \"pageControl\") { %}\n" +
      "                                <pageControl opaque=\"NO\" contentMode=\"scaleToFill\" fixedFrame=\"YES\" contentHorizontalAlignment=\"center\" contentVerticalAlignment=\"center\" numberOfPages=\"3\" translatesAutoresizingMaskIntoConstraints=\"NO\" id=\"{%=tempView.idStr %}\">\n" +
      "                                    <rect key=\"frame\" x=\"{%=tempView.x %}\" y=\"{%=tempView.y %}\" width=\"{%=tempView.width %}\" height=\"37\"/>\n" +
      "                                    <autoresizingMask key=\"autoresizingMask\" flexibleMaxX=\"YES\" flexibleMaxY=\"YES\"/>\n" +
      "                    {% if (tempView.bgColorRed) { %}<color key=\"backgroundColor\" red=\"{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}\" green=\"{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}\" blue=\"{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}\" alpha=\"{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}\" colorSpace=\"calibratedRGB\"/>{% } %}\n" +
      "                                          {% if (tempView.border_radius || tempView.border_width) { %}<userDefinedRuntimeAttributes>\\n {% if (tempView.border_width) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderWidth\">\\n<integer key=\"value\" value=\"{%=tempView.border_width%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.border_radius) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderRadius\">\\n<integer key=\"value\" value=\"{%=tempView.border_radius%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.borderColorRed) { %}<userDefinedRuntimeAttribute type=\"color\" keyPath=\"layer.borderUIColor\">\\n<color key=\"value\" red=\"{%=tempView.borderColorRed%}\" green=\"{%=tempView.borderColorGreen%}\" blue=\"{%=tempView.borderColorBlue%}\" alpha=\"{%=tempView.borderColorAlpha%}\" colorSpace=\"custom\" customColorSpace=\"sRGB\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %}</userDefinedRuntimeAttributes>{% } %}\n" +
      "                    \n" +
      "                                </pageControl>\n" +
      "    {% } %}\n" +
      "    {% if (tempView.viewType == \"pickerView\") { %}\n" +
      "                                <pickerView contentMode=\"scaleToFill\" fixedFrame=\"YES\" translatesAutoresizingMaskIntoConstraints=\"NO\" id=\"{%=tempView.idStr %}\">\n" +
      "                                    <rect key=\"frame\" x=\"{%=tempView.x %}\" y=\"{%=tempView.y %}\" width=\"{%=tempView.width %}\" height=\"{%=tempView.height %}\"/>\n" +
      "                                    <autoresizingMask key=\"autoresizingMask\" widthSizable=\"YES\" flexibleMaxY=\"YES\"/>\n" +
      "                    {% if (tempView.bgColorRed) { %}<color key=\"backgroundColor\" red=\"{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}\" green=\"{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}\" blue=\"{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}\" alpha=\"{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}\" colorSpace=\"calibratedRGB\"/>{% } %}\n" +
      "                                          {% if (tempView.border_radius || tempView.border_width) { %}<userDefinedRuntimeAttributes>\\n {% if (tempView.border_width) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderWidth\">\\n<integer key=\"value\" value=\"{%=tempView.border_width%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.border_radius) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderRadius\">\\n<integer key=\"value\" value=\"{%=tempView.border_radius%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.borderColorRed) { %}<userDefinedRuntimeAttribute type=\"color\" keyPath=\"layer.borderUIColor\">\\n<color key=\"value\" red=\"{%=tempView.borderColorRed%}\" green=\"{%=tempView.borderColorGreen%}\" blue=\"{%=tempView.borderColorBlue%}\" alpha=\"{%=tempView.borderColorAlpha%}\" colorSpace=\"custom\" customColorSpace=\"sRGB\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %}</userDefinedRuntimeAttributes>{% } %}\n" +
      "                    \n" +
      "                                </pickerView>\n" +
      "    {% } %}\n" +
      "    {% if (tempView.viewType == \"datePicker\") { %}\n" +
      "                                <datePicker contentMode=\"scaleToFill\" fixedFrame=\"YES\" contentHorizontalAlignment=\"center\" contentVerticalAlignment=\"center\" datePickerMode=\"dateAndTime\" minuteInterval=\"1\" translatesAutoresizingMaskIntoConstraints=\"NO\" id=\"{%=tempView.idStr %}\">\n" +
      "                                    <rect key=\"frame\" x=\"{%=tempView.x %}\" y=\"{%=tempView.y %}\" width=\"{%=tempView.width %}\" height=\"{%=tempView.height %}\"/>\n" +
      "                                    <autoresizingMask key=\"autoresizingMask\" widthSizable=\"YES\" flexibleMaxY=\"YES\"/>\n" +
      "                    {% if (tempView.bgColorRed) { %}<color key=\"backgroundColor\" red=\"{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}\" green=\"{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}\" blue=\"{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}\" alpha=\"{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}\" colorSpace=\"calibratedRGB\"/>{% } %}\n" +
      "                                    <date key=\"date\" timeIntervalSinceReferenceDate=\"524554937.78742898\">\n" +
      "                                        <!--2017-08-16 05:42:17 +0000-->\n" +
      "                                    </date>\n" +
      "                                          {% if (tempView.border_radius || tempView.border_width) { %}<userDefinedRuntimeAttributes>\\n {% if (tempView.border_width) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderWidth\">\\n<integer key=\"value\" value=\"{%=tempView.border_width%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.border_radius) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderRadius\">\\n<integer key=\"value\" value=\"{%=tempView.border_radius%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.borderColorRed) { %}<userDefinedRuntimeAttribute type=\"color\" keyPath=\"layer.borderUIColor\">\\n<color key=\"value\" red=\"{%=tempView.borderColorRed%}\" green=\"{%=tempView.borderColorGreen%}\" blue=\"{%=tempView.borderColorBlue%}\" alpha=\"{%=tempView.borderColorAlpha%}\" colorSpace=\"custom\" customColorSpace=\"sRGB\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %}</userDefinedRuntimeAttributes>{% } %}\n" +
      "                    \n" +
      "                                </datePicker>\n" +
      "    {% } %}\n" +
      "    {% if (tempView.viewType == \"mapView\") { %}\n" +
      "                                <mapView clipsSubviews=\"YES\" multipleTouchEnabled=\"YES\" contentMode=\"scaleToFill\" fixedFrame=\"YES\" mapType=\"standard\" translatesAutoresizingMaskIntoConstraints=\"NO\" id=\"{%=tempView.idStr %}\">\n" +
      "                                    <rect key=\"frame\" x=\"{%=tempView.x %}\" y=\"{%=tempView.y %}\" width=\"{%=tempView.width %}\" height=\"{%=tempView.height %}\"/>\n" +
      "                                    <autoresizingMask key=\"autoresizingMask\" flexibleMaxX=\"YES\" flexibleMaxY=\"YES\"/>\n" +
      "                    {% if (tempView.bgColorRed) { %}<color key=\"backgroundColor\" red=\"{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}\" green=\"{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}\" blue=\"{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}\" alpha=\"{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}\" colorSpace=\"calibratedRGB\"/>{% } %}\n" +
      "                                          {% if (tempView.border_radius || tempView.border_width) { %}<userDefinedRuntimeAttributes>\\n {% if (tempView.border_width) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderWidth\">\\n<integer key=\"value\" value=\"{%=tempView.border_width%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.border_radius) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderRadius\">\\n<integer key=\"value\" value=\"{%=tempView.border_radius%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.borderColorRed) { %}<userDefinedRuntimeAttribute type=\"color\" keyPath=\"layer.borderUIColor\">\\n<color key=\"value\" red=\"{%=tempView.borderColorRed%}\" green=\"{%=tempView.borderColorGreen%}\" blue=\"{%=tempView.borderColorBlue%}\" alpha=\"{%=tempView.borderColorAlpha%}\" colorSpace=\"custom\" customColorSpace=\"sRGB\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %}</userDefinedRuntimeAttributes>{% } %}\n" +
      "                    \n" +
      "                                </mapView>\n" +
      "    {% } %}\n" +
      "    {% if (tempView.viewType == \"searchBar\") { %}\n" +
      "                                <searchBar contentMode=\"redraw\" fixedFrame=\"YES\" translatesAutoresizingMaskIntoConstraints=\"NO\" id=\"{%=tempView.idStr %}\">\n" +
      "                                    <rect key=\"frame\" x=\"{%=tempView.x %}\" y=\"{%=tempView.y %}\" width=\"{%=tempView.width %}\" height=\"44\"/>\n" +
      "                                    <autoresizingMask key=\"autoresizingMask\" widthSizable=\"YES\" flexibleMaxY=\"YES\"/>\n" +
      "                    {% if (tempView.bgColorRed) { %}<color key=\"backgroundColor\" red=\"{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}\" green=\"{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}\" blue=\"{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}\" alpha=\"{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}\" colorSpace=\"calibratedRGB\"/>{% } %}\n" +
      "                                    <textInputTraits key=\"textInputTraits\"/>\n" +
      "                                          {% if (tempView.border_radius || tempView.border_width) { %}<userDefinedRuntimeAttributes>\\n {% if (tempView.border_width) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderWidth\">\\n<integer key=\"value\" value=\"{%=tempView.border_width%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.border_radius) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderRadius\">\\n<integer key=\"value\" value=\"{%=tempView.border_radius%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.borderColorRed) { %}<userDefinedRuntimeAttribute type=\"color\" keyPath=\"layer.borderUIColor\">\\n<color key=\"value\" red=\"{%=tempView.borderColorRed%}\" green=\"{%=tempView.borderColorGreen%}\" blue=\"{%=tempView.borderColorBlue%}\" alpha=\"{%=tempView.borderColorAlpha%}\" colorSpace=\"custom\" customColorSpace=\"sRGB\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %}</userDefinedRuntimeAttributes>{% } %}\n" +
      "                    \n" +
      "                                </searchBar>\n" +
      "    {% } %}\n" +
      "    {% if (tempView.viewType == \"webView\") { %}\n" +
      "                                <webView contentMode=\"scaleToFill\" fixedFrame=\"YES\" translatesAutoresizingMaskIntoConstraints=\"NO\" id=\"{%=tempView.idStr %}\">\n" +
      "                                    <rect key=\"frame\" x=\"{%=tempView.x %}\" y=\"{%=tempView.y %}\" width=\"{%=tempView.width %}\" height=\"{%=tempView.height %}\"/>\n" +
      "                                    <autoresizingMask key=\"autoresizingMask\" flexibleMaxX=\"YES\" flexibleMaxY=\"YES\"/>\n" +
      "                    {% if (tempView.bgColorRed) { %}<color key=\"backgroundColor\" red=\"{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}\" green=\"{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}\" blue=\"{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}\" alpha=\"{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}\" colorSpace=\"calibratedRGB\"/>{% } else { %}<color key=\"backgroundColor\" red=\"0.36078431370000003\" green=\"0.38823529410000002\" blue=\"0.4039215686\" alpha=\"1\" colorSpace=\"custom\" customColorSpace=\"sRGB\"/>{% } %}\n" +
      "                                          {% if (tempView.border_radius || tempView.border_width) { %}<userDefinedRuntimeAttributes>\\n {% if (tempView.border_width) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderWidth\">\\n<integer key=\"value\" value=\"{%=tempView.border_width%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.border_radius) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderRadius\">\\n<integer key=\"value\" value=\"{%=tempView.border_radius%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.borderColorRed) { %}<userDefinedRuntimeAttribute type=\"color\" keyPath=\"layer.borderUIColor\">\\n<color key=\"value\" red=\"{%=tempView.borderColorRed%}\" green=\"{%=tempView.borderColorGreen%}\" blue=\"{%=tempView.borderColorBlue%}\" alpha=\"{%=tempView.borderColorAlpha%}\" colorSpace=\"custom\" customColorSpace=\"sRGB\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %}</userDefinedRuntimeAttributes>{% } %}\n" +
      "                    \n" +
      "                                </webView>\n" +
      "    {% } %}\n" +
      "    {% if (tempView.viewType == \"slider\") { %}\n" +
      "                                <slider opaque=\"NO\" contentMode=\"scaleToFill\" fixedFrame=\"YES\" contentHorizontalAlignment=\"center\" contentVerticalAlignment=\"center\" value=\"0.5\" minValue=\"0.0\" maxValue=\"1\" translatesAutoresizingMaskIntoConstraints=\"NO\" id=\"{%=tempView.idStr %}\">\n" +
      "                                    <rect key=\"frame\" x=\"{%=tempView.x %}\" y=\"31\" width=\"{%=tempView.width %}\" height=\"{%=tempView.height %}\"/>\n" +
      "                                    <autoresizingMask key=\"autoresizingMask\" flexibleMaxX=\"YES\" flexibleMaxY=\"YES\"/>\n" +
      "                    {% if (tempView.bgColorRed) { %}<color key=\"backgroundColor\" red=\"{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}\" green=\"{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}\" blue=\"{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}\" alpha=\"{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}\" colorSpace=\"calibratedRGB\"/>{% } %}\n" +
      "                                          {% if (tempView.border_radius || tempView.border_width) { %}<userDefinedRuntimeAttributes>\\n {% if (tempView.border_width) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderWidth\">\\n<integer key=\"value\" value=\"{%=tempView.border_width%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.border_radius) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderRadius\">\\n<integer key=\"value\" value=\"{%=tempView.border_radius%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.borderColorRed) { %}<userDefinedRuntimeAttribute type=\"color\" keyPath=\"layer.borderUIColor\">\\n<color key=\"value\" red=\"{%=tempView.borderColorRed%}\" green=\"{%=tempView.borderColorGreen%}\" blue=\"{%=tempView.borderColorBlue%}\" alpha=\"{%=tempView.borderColorAlpha%}\" colorSpace=\"custom\" customColorSpace=\"sRGB\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %}</userDefinedRuntimeAttributes>{% } %}\n" +
      "                    \n" +
      "                                </slider>\n" +
      "    {% } %}\n" +
      "    {% if (tempView.viewType == \"view\") { %}\n" +
      "                            <view contentMode=\"scaleToFill\" fixedFrame=\"YES\" translatesAutoresizingMaskIntoConstraints=\"NO\" id=\"{%=tempView.idStr %}\">\n" +
      "                                <rect key=\"frame\" x=\"{%=tempView.x %}\" y=\"{%=tempView.y %}\" width=\"{%=tempView.width %}\" height=\"{%=tempView.height %}\"/>\n" +
      "                                <autoresizingMask key=\"autoresizingMask\" flexibleMaxX=\"YES\" flexibleMaxY=\"YES\"/>\n" +
      "                                      {% if (tempView.bgColorRed) { %} <color key=\"backgroundColor\" red=\"{% if (tempView.bgColorRed) { %}{%=tempView.bgColorRed %}{% } else { %}1{% } %}\" green=\"{% if (tempView.bgColorGreen) { %}{%=tempView.bgColorGreen %}{% } else { %}1{% } %}\" blue=\"{% if (tempView.bgColorBlue) { %}{%=tempView.bgColorBlue %}{% } else { %}1{% } %}\" alpha=\"{% if (tempView.bgColorAlpha) { %}{%=tempView.bgColorAlpha %}{% } else { %}1{% } %}\" colorSpace=\"calibratedRGB\"/> {% } else { %} <color key=\"backgroundColor\" white=\"0.0\" alpha=\"0.0\" colorSpace=\"custom\" customColorSpace=\"genericGamma22GrayColorSpace\"/> {% } %}\n" +
      "                                      {% if (tempView.border_radius || tempView.border_width) { %}<userDefinedRuntimeAttributes>\\n {% if (tempView.border_width) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderWidth\">\\n<integer key=\"value\" value=\"{%=tempView.border_width%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.border_radius) { %}<userDefinedRuntimeAttribute type=\"number\" keyPath=\"layer.borderRadius\">\\n<integer key=\"value\" value=\"{%=tempView.border_radius%}\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %} {% if (tempView.borderColorRed) { %}<userDefinedRuntimeAttribute type=\"color\" keyPath=\"layer.borderUIColor\">\\n<color key=\"value\" red=\"{%=tempView.borderColorRed%}\" green=\"{%=tempView.borderColorGreen%}\" blue=\"{%=tempView.borderColorBlue%}\" alpha=\"{%=tempView.borderColorAlpha%}\" colorSpace=\"custom\" customColorSpace=\"sRGB\"/>\\n</userDefinedRuntimeAttribute>\\n {% } %}</userDefinedRuntimeAttributes>{% } %}\n" +
      "                                \n" +
      "                                {% if (tempView.views) { %}\n" +
      "                                {% var templateViewsValue = tmpl_ios_views();var map = {};map[\"root\"] = tempView.views; var ret = tmpl(templateViewsValue, map); %}\n" +
      "                                {% if(ret) { %}\n" +
      "                                {%=ret%}\n" +
      "                                {% } %}\n" +
      "                                {% } %}\n" +
      "                            </view>\n" +
      "    {% } %}\n" +
      "            \n" +
      "    {% } %}\n" +
      "</subviews>";
  return string;
}

//------------------- iOS模板 模块 -------------------



