"use strict";
{
  //フォームの要素を取得
  const FORM = document.getElementById("form");
  const USER_NAME = document.getElementById("name");
  const MAIL = document.getElementById("mail");
  const DETAIL = document.getElementById("detail");
  const BTN_CONFIRMING = document.getElementById("btn-confirming");

  //メールアドレスの確認
  const ADDRESS_PATTERN =
    /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;

  //確認画面の要素を取得
  const CONFIRMING = document.getElementById("confirming");
  const USER_NAME_CONFIRMING = document.getElementById("name-confirming");
  const MAIL_CONFRIMING = document.getElementById("mail-confirming");
  const DETEIL_CONFIRMING = document.getElementById("detail-confirming");
  const BTN_BACK = document.getElementById("back");
  const BTN_SEND = document.getElementById("send");

  //送信完了画面の要素を取得
  const SEND_VIEW = document.getElementById("send-view");

  console.log(SEND_VIEW);

  //確認ボタン
  BTN_CONFIRMING.addEventListener("click", () => {
    //テキストを取得
    const USER_NAME_TEXT = USER_NAME.value;
    const MAIL_TEXT = MAIL.value;
    const DETAIL_TEXT = DETAIL.value;

    //入力欄に漏れがないかを確認
    if (USER_NAME_TEXT !== "" && MAIL_TEXT !== "" && DETAIL_TEXT !== "") {
      //メールアドレスが正し表記かを確認
      if (ADDRESS_PATTERN.test(MAIL_TEXT)) {
        //テキストを入力
        USER_NAME_CONFIRMING.innerText = USER_NAME_TEXT;
        MAIL_CONFRIMING.innerText = MAIL_TEXT;
        DETEIL_CONFIRMING.innerText = DETAIL_TEXT;
        
        //画面の切り替え
        FORM.classList.add("next");
        CONFIRMING.classList.add("next");
      } else {
        alert('メールアドレスが間違っています。');
      }
    } else {
      alert("記入漏れがあります。");
    }
  });

  //戻るボタン
  BTN_BACK.addEventListener("click", () => {
    //画面の切り替え
    CONFIRMING.classList.remove("next");
    FORM.classList.remove("next");
  });

  //送信ボタン
  BTN_SEND.addEventListener("click", () => {
    CONFIRMING.classList.remove("next");
    SEND_VIEW.classList.add("next");
  });
}
