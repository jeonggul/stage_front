<template>
  <div class="login_box">
    <img :src="cwuimage" class="logo" />
    <div class="title">Stage_Play</div>

    <div class="input_idpw">
      <img :src="idimage" />
      <input type="text" placeholder="아이디" />
    </div>

    <div class="input_idpw">
      <img :src="pwimage" />
      <input type="password" placeholder="비밀번호" />
    </div>

    <button class="login_button" @click="login">로그인</button>

    <div class="login_signup">
      <a href="#">아이디 찾기&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
      <a href="#">비밀번호 찾기&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
      <a href="/signup">회원가입</a>
    </div>

    <div class="simple">
      <hr /><span>간편 로그인</span><hr />
    </div>

    <div class="simple_button">
      <button type="button">
        <img :src="naverimage" />
      </button>
      <button type="button">
        <img :src="kakaoimage" />
      </button>
      <button type="button">
        <img :src="googleimage" />
      </button>
    </div>

    <div class="help">
      <a href="#">*회원가입/로그인에 문제가 있어요!</a>
    </div>
  </div>
</template>

<script setup>
// 이미지 경로 상수를 정의합니다.
const cwuimage = new URL('@/assets/images/cwu.png', import.meta.url).href
const idimage = new URL('@/assets/images/id.png', import.meta.url).href
const pwimage = new URL('@/assets/images/pw.png', import.meta.url).href
const naverimage = new URL('@/assets/images/naver.png', import.meta.url).href
const kakaoimage = new URL('@/assets/images/kakao.png', import.meta.url).href
const googleimage = new URL('@/assets/images/google.png', import.meta.url).href

function login() {
  alert('로그인 버튼 동작 테스트')
}
</script>

<style>
@import "@/assets/style.css";
</style>
