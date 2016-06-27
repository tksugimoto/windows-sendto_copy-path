# [Windows] 右クリックの「送る」メニューにファイルパスをMarkdownやWiki書式でコピーする項目を追加

## 対応書式
* Markdown  
  `[C:\\Program Files\\Git](file:///C:/Program Files/Git "file:///C:/Program Files/Git")`
* Huki(Wikiクローン)  
  `[[C:\Program Files\Git|file:///C:/Program Files/Git]]`


## セットアップ
1. このリポジトリをCloneする
1. `shell:sendto`（「送る」フォルダ）を開く（以下からお好きな方法で）
  * Windowsスタートメニューの検索欄
  * ファイル名を指定して実行
  * エクスプローラー
1. 「送る」フォルダに使いたいcmdファイルのショートカットを作成  
  ※  ショートカット名は自由に変更可
  * パスをHikiWiki書式でコピー.cmd
  * パスをMarkdown書式でコピー.cmd
