"use strict";

// カウントの数字を代入する変数を作ります。
let num = 0;
// ボタンをクリックした時に、処理が発火するようにします。
let btn = document.getElementById("btn-plus");
btn.addEventListener("click", () => {
  // 発火する処理の中で
  // 変数の数字を「1」増やす処理
  num++;
  //※カウントが「100」になったら、その次に「0」に戻るようにしてみましょう。
  if (num > 100) {
    num = 0;
  }
  // 表示されている数字のDOMの表示を「1」増えた変数に変更する
  document.querySelector("h3").textContent = num;
});

//※※リセットボタン
let btn_reset = document.getElementById("btn-reset");
btn_reset.addEventListener("click", () => {
  num = 0;
  document.querySelector("h3").textContent = num;
});

//※カウントが減るようなボタンと機能を作りましょう。
//   (カウントが「0」の時は動かないようにしましょう。)
let btn_minus = document.getElementById("btn-minus");
btn_minus.addEventListener("click", () => {
  if (num > 0) {
    num--;
  }
  document.querySelector("h3").textContent = num;
});
