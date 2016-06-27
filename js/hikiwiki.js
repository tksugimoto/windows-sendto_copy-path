var args = WScript.arguments;
if (args.length === 1) {
	var path = args(0);
	var url = "file:///" + path.replace(/\\/g, "/");
	var data = {
		title: path,
		url: url
	};
	var format = "[[{{title}}|{{url}}]]";
	var text = format.replace(/{{([a-z]+)}}/ig, function (all, name) {
		return data[name] || "";
	});
	WScript.Echo(text);
}
