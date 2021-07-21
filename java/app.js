let hello = "Hello World";
alert(hello);
// letとは？変数を使う際の変数名を宣言する際のキーワード 他にも"var","const"がある
// alertは引数の文字列をアラートウィンドウに表示する関数

// for (初期値; 条件式; 増減値;){繰り返し処理}
// 変数iの宣言
let i;
// 変数numの宣言、初期値を0に設定
let num = 0;
// iの初期値を1に設定、iが11未満の時は変数iに1を足す、'i++'は'i = i + 1'と同じ
for (i = 1; i < 11; i++) {
  num = num + i;
}

alert("1から10まで足した結果は" + num + "です");
