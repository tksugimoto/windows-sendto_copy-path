var args = WScript.arguments;
if (args.length === 1) {
	var path = args(0);
	var url = "file:///" + encodeURI(path.replace(/\\/g, "/"));
	WScript.Echo(url);
}
