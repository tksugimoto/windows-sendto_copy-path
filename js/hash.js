var stdin = WScript.StdIn;
var stdout = WScript.StdOut;

while (!stdin.AtEndOfStream) {
     var str = stdin.ReadLine();
     if (/^[0-9a-f ]+$/.test(str)) {
     	// ハッシュだけの行：スペースを消す
     	str = "\n" + str.replace(/ /g, "") + "\n";
     }
     stdout.WriteLine(str);
}
