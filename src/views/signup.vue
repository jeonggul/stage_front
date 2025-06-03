<template>
  <div class="login_box">
    <img :src="cwulogo" class="logo" />
    <div class="title">Stage_Play</div>

    <button class="login_button" @click="signup_details">stage_play 회원가입</button>
    <!-- 검색결과창과 연결할 페이지가 없어서 버튼 하나 만들었습니다. -->
    <button class="login_button" @click="search_result">검색 결과 창으로 이동</button>

    <div class="simple">
      <hr /><span>간편 로그인</span><hr />
    </div>

    <div class="simple_button">
      <button type="button">
        <img :src="naverlogo" />
      </button>
      <button type="button">
        <img :src="kakaologo" />
      </button>
      <button type="button">
        <img :src="googlelogo" />
      </button>
    </div>

    <div class="help">
      <a href="#">*회원가입/로그인에 문제가 있어요!</a>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const signup_details = () => {
  router.push('/signup_details')
}
const search_result = () => {
  router.push('/search_result')
}

// 이미지 경로
const cwulogo = new URL('@/assets/images/cwu.png', import.meta.url).href
const naverlogo = new URL('@/assets/images/naver.png', import.meta.url).href
const kakaologo = new URL('@/assets/images/kakao.png', import.meta.url).href
const googlelogo = new URL('@/assets/images/google.png', import.meta.url).href
</script>

<style>
@import "@/assets/style.css";
</style>
