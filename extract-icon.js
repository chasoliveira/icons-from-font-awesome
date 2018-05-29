function faIcons() {
	var faIcons = $.map(document.styleSheets, function (s) {
        if (s.href)
            return $.map(s.rules, function (item) {
                if (item.cssText.indexOf(".fa-") != -1 && item.cssText.indexOf("::before { content:") > 0)
                    return item.cssText.substring(1, item.cssText.indexOf("::"));
                else
                    return null;
            });
        return null;
    });
    return faIcons;
}
