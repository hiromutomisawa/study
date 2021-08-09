// $(function(){
//   $('.bg1').on('click',function(){
//     $('.bg1').slideUp();
//   });
//   $('.bg2').on('click',function(){
//     $('.bg2').slideUp();
//   });
//   $('.bg3').on('click',function(){
//     $('.bg3').slideUp();
//   });
//   $('.bg4').on('click',function(){
//     $('.bg4').slideUp();
//   });
// })

// 解説
// 上記の書き方ではClass名の異なるイベントを４つも記述しなければならず面倒。
// thisを利用するとシンプルにまとめることが可能になる。
// box3クラスがクリックされたときthis(クリックされた要素)のみslideUPさせる。
// デメリット---コード上からでは何をクリックしたときに動作するか判別しにくい。

$(function(){
  $('.box3').on('click',function(){
    $(this).slideUp();
  });
});



$(function(){
  $('.box1').slideDown(1500,function(){
    $('.box1').css({
      'background-color': '#0000ff',
      'width': '200px',
      'height': '100px'
    });
  }).slideUp(1500);
});
// 解説
// javascriptでは、引数の中に関数を入れることができるため
// slideDownの引数にfunctionを書き加えることでスライドダウンした後に次のメソッドを実行できる。
// 最初はすべて同じ階層に記述していたためアニメーションが干渉しうまく動作しなかった。
// 補足 ---sideDown,Upの第一引数に数字を入力することで速度の変更可能(単位はm秒)


// // マウスオーバー、アウトイベント
// $(function(){
//   $('.box2').mouseover(function(){
//     $('.box2').css({
//       'background-color': '#0000ff'
//     });
//   });
//   $('.box2').mouseout(function(){
//     $('.box2').css({
//       'background-color': 'black'
//     });
//   });
// });

// 上記の方法だとCSSをいちいち記入する手間がかかるため
// cssをあらかじめ定義しておき、class属性を追加(add)/解除(remove)するように設定する
$(function(){
  $('.box2').on('click',function() {
    $('.box2').addClass('box2-ext');
  });
  $('.box2').mouseout(function() {
    $('.box2').removeClass('box2-ext');
  });
});



// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });

// $(document).ready(function () {
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });

// jQueryの書き方
// $(document).ready(function() {
  // jQueryプログラムの内容
// });
// 省略版
// $(function(){
  // jQueryプログラムの内容
// });

// jQueryプログラムの内容の書き方
// $(セレクタ).メソッド(パラメータ);

// CSSメソッドの書き方
// $('セレクタ').css({
//   'プロパティ1': '値1',
//   'プロパティ2': '値2',
//   :
//   'プロパティn': '値n'
// });

// CSSメソッドの種類
// .slideDown(); ---上から下へスライド
// .slideUp(); ---下から上へスライド
// .show(); ---要素を表示する
// .hide(); ---要素を非表示にする