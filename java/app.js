// let hello = "Hello World";
// alert(hello);
// letとは？変数を使う際の変数名を宣言する際のキーワード 他にも"var","const"がある
// alertは引数の文字列をアラートウィンドウに表示する関数

// for (初期値; 条件式; 増減値;){繰り返し処理}
// 変数iの宣言
// let i;
// // 変数numの宣言、初期値を0に設定
// let num = 0;
// // iの初期値を1に設定、iが11未満の時は変数iに1を足す、'i++'は'i = i + 1'と同じ
// for (i = 1; i < 11; i++) {
//   num = num + i;
// }

// alert("1から10まで足した結果は" + num + "です");


// // function 関数名(引数){
// //  処理内容
// //  return 戻り値;
// // }

// let alertString;
// alertString = addString("WebCamp");

// alert(alertString);

// function addString(strA){
//   let addStr = "Hello" + strA;
//   return addStr;
// }

// let promptStr = prompt("何か文字を入力");

// alert(promptStr);

// ダイヤログボックスについて
// javascriptでは３種類(alert,confirm,prompt)
// -- alert :OKボタンのみ
// -- confirm :OKボタン + キャンセルボタン --OKの時にはtrue キャンセルの時にはfalseが入る
// -- prompt :OKボタン + キャンセルボタン + テキストボックス --OKの時にはボックスの文字列 キャンセルの時はnullが入る


// じゃんけんの入力用のダイヤログ生成
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
// 条件式がtrueである間は繰り返し処理が実行される。
// while(条件){
  // 処理
// }
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert("グー・チョキ・パーのいずれかを入力して下さい");
  user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください。");
}
// じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();
// ユーザとの勝敗結果を入れる
let judge = winLose(user_hand, js_hand);
// 結果を表示 -- "\n"は改行コード
if (user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaの選んだ手は' + js_hand + "です。\n結果は" + judge + "です。");
} else {
  alert("またチャレンジしてね")
}


// じゃんけんの手をランダムに作成する関数
function getJShand(){
  // Math.floor()関数は与えられた数値以下の最大の整数を返す。小数点を出さないために使用
  // Math.random()関数は0以上1未満の範囲で疑似乱数を返す。今回は0以上3未満
  let js_hand_num = Math.floor( Math.random() * 3 );
  let js_hand;

  if(js_hand_num == 0){
    js_hand = "グー";
  } else if(js_hand_num == 1){
    js_hand = "チョキ";
  } else if(js_hand_num == 2){
    js_hand = "パー";
  }

  return js_hand;
}

// 勝敗結果を判断する関数
function winLose(user,js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }
  return winLoseStr;
}
