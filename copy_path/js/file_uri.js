var args = WScript.arguments;
if (args.length === 1) {
	var path = args(0);
	var encodedPath = encodeURI(path.replace(/\\/g, "/"));
	if (!/^\/\//.test(encodedPath)) {
		encodedPath = "//localhost/" + encodedPath;
	}
	var url = "file:" + encodedPath;
	WScript.Echo(url);
}
