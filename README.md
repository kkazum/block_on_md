## block_on_md
githubのレビューの効率化を目的として開発された、コードブロックを生成する拡張機能です。

## 起動方法
1. プロジェクトのルートディレクトリで`yarn install`
2. プロジェクトのルートディレクトリで`yarn build`
3. 生成された`dist`ディレクトリを`chrome://extensions/`で読み込む(デベロッパーモード)
4. 念の為、使いたいページでブラウザを一度リロード

## 使用方法
テキストを選択後右クリックし、メニューの`ブロックを生成`から
言語を選択する。この時点でクリップボードに選択した言語でコードブロックが生成されている。後はマークダウン対応のエディタにペーストするのみ。

## License
MIT
