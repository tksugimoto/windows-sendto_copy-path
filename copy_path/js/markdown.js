var args = WScript.arguments;
if (args.length === 2) {
	var path = args(1);
	var title = path.replace(/`|~|_|\[|\]|\\/g, "\\$&");
	var url = "file:///" + path.replace(/\\/g, "/").replace(/[)]/g, "\\)");
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
