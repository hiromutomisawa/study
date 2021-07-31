// 変数宣言について
// 再宣言可能=>"var",再代入可能=>"let",両方不可=>"const"

// グローバルスコープ
// ローカルスコープ---関数スコープ---var
//                L--ブロックスコープ---let,const

// varのスコープ
var str = "webcamp"
// グローバルスコープ
function foo() {
  console.log(str)
  var y = "hello"
  // 関数スコープ
}
foo()
// console.log(y)
// 結果
// 「Uncaught ReferenceError: y is not defined」というエラーが発生。js:17
// yという定義がされていない。参照エラー
// この場合、関数の外からyを参照しようとしたため有効範囲外となりエラーとなる。

// let,constのスコープ
function hoge() {
  let x = "webcamp"
  {
    let y = "hello webcamp"
  }
  console.log(x)
  // console.log(y)
}
hoge()
// 結果
// 「Uncaught ReferenceError: y is not defined」というエラーが発生。js:30
// ｙという変数は{}のブロック内でletに宣言されたもののためブロック外からの参照はエラーとなった。

for (let i = 0; i < 10; i++) {
  console.log(i)
}
// console.log(i)
// 結果
// 「Uncaught ReferenceError: i is not defined」というエラーが発生。js:40
// 変数iはfor句の()ブロック内でletによって宣言された。
// letによる変数宣言では宣言されたブロック内が有効範囲となる。

// 巻き上げ
var str = "webcamp"

function foo() {
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}

foo()
// 結果
// undefinedが出力される。　js:50
// 上から順に変数展開していけばjs:50でwebcampと出力されることを考えるがそうならなかった。
// 以下のような変数の巻き上げる現象が発生している。
var str = "webcamp"

function foo() {
  var str
  console.log(str)
  str = "dmm webcamp"
  console.log(str)
}
foo()
// 変数の巻き上げとは関数内のどの部分で変数を宣言したとしても関数冒頭で変数をしたことになるというもの。

// まとめ
// 変数宣言の際に意識すべきことはスコープと再代入である。
// 可能な限り変数スコープは使用される箇所で局所的である方が意図しない参照エラーを防ぐことができる。
// そのため昨今ではlet,constを変数宣言に使用していくことになる。
// letとconstの違いは再代入の可不可であるため、そこを意識して使い分ける。



// memo
  // javaにおける「''」「""」の違いについて=>JavaScriptでは違いはほぼないが統一するべき
  // コード内に「''」,「""」で囲まれた文字列を文字列リテラルと呼ぶ
  // fooとは？=> hogeの海外版。意味のないことが暗黙の了解になっている名称
  //                            ∟メタ構文変数という
  // ブロックとは(),{}で区切られたものを指す。