var args = WScript.arguments;
if (args.length === 1) {
	var path = args(0);
	var title = path.replace(/`|~|_|\[|\]|\\/g, "\\$&");
	var url = "file:///" + path.replace(/\\/g, "/");
	var tooltip = url;
	var data = {
		title: title,
		url: encodeURI(url),
		tooltip: tooltip
	};
	var format = '[{{title}}]({{url}} "{{tooltip}}")';
	var text = format.replace(/{{([a-z]+)}}/ig, function (all, name) {
		return data[name] || "";
	});
	WScript.Echo(text);
}
