$(function(){
  $('#back a').on('click',function(event){
    $('body, html').animate({
      scrollTop:0
    },800);
    event.preventDefault();
  });
});

// L2 $('#back a')は $('#id名 要素名')と読む、id内の子要素に対してのみ指定される
// animate()はアニメーション効果を設定するjQueryの関数
// $('セレクタ名').animate({
//   変化対象のプロパティ名：変化値
// },アニメーションの動作時間);
// scrollTopはスクロール一を取得できるメソッド
// scrollTop:0と指定しているため最上部に移動するという意味
// 動作時間は800ms(0.8秒)かけて移動するという意味になる
// セレクタは$('body,html')と設定されており意味はbody要素またはhtml要素となる
// ２つの要素を指定するのはユーザの利用環境によって指定対象の要素が変化するため
// event.preventDefault();はaタグの機能を無効にするメソッド
// aタグの画面遷移機能は保つが、今回は必要がないため無効化している