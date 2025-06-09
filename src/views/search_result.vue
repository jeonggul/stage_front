<template>
  <div class="search_container">
    <h2><strong>6</strong>개의 작품이 검색되었습니다.</h2>

    <div class="gaebong_slider">
      <label class="toggle_switch">
        <input type="checkbox" />
        <span class="toggle"></span>
        <span class="toggle_text">개봉작만</span>
      </label>
    </div>

    <div class="view">
      <div class="item">
        <img :src="cats" />
        <h3>캣츠 CATS</h3>
        <p>2025.02.05~2025.02.03<br />서울 예그린시어터 뮤지컬</p>
      </div>
      <div class="item">
        <img :src="fedora" />
        <h3>페도라 뮤지컬</h3>
        <p>2025.02.05~2025.02.03<br />서울 예그린시어터 뮤지컬</p>
      </div>
      <div class="item">
        <img :src="gentlemans" />
        <h3>젠틀맨스 가이드</h3>
        <p>2025.02.05~2025.02.03<br />서울 예그린시어터 뮤지컬</p>
      </div>
      <div class="item">
        <img :src="orphans" />
        <h3>연극 오펀스</h3>
        <p>2025.02.05~2025.02.03<br />서울 예그린시어터 뮤지컬</p>
      </div>
      <div class="item">
        <img :src="ellen" />
        <h3>나의 엘레닌</h3>
        <p>2025.02.05~2025.02.03<br />서울 예그린시어터 뮤지컬</p>
      </div>
      <div class="item">
        <img :src="anne" />
        <h3>앤 ANNE</h3>
        <p>2025.02.05~2025.02.03<br />서울 예그린시어터 뮤지컬</p>
      </div>
    </div>

    <h3 class="view_about">😉 이런 티켓은 어떠세요?</h3>

    <div class="about_ticket">
      <div class="item_about">
        <img :src="frida" />
        <h3>프리다</h3>
        <p>2025.02.05~2025.02.03<br />서울 예그린시어터 뮤지컬</p>
      </div>
      <div class="item_about">
        <img :src="frankenstein" />
        <h3>프랑켄슈타인</h3>
        <p>2025.02.05~2025.02.03<br />서울 예그린시어터 뮤지컬</p>
      </div>
      <div class="item_about">
        <img :src="rebecca" />
        <h3>레베카</h3>
        <p>2025.02.05~2025.02.03<br />서울 예그린시어터 뮤지컬</p>
      </div>
      <div class="item_about">
        <img :src="bballae" />
        <h3>빨래</h3>
        <p>2025.02.05~2025.02.03<br />서울 예그린시어터 뮤지컬</p>
      </div>
      <div class="item_about">
        <img :src="love" />
        <h3>사랑에 스치다</h3>
        <p>2025.02.05~2025.02.03<br />서울 예그린시어터 뮤지컬</p>
      </div>
    </div>
  </div>

</template>

<script setup>
const cats = new URL('@/assets/images/cats.jpeg', import.meta.url).href
const fedora = new URL('@/assets/images/fedora.jpg', import.meta.url).href
const gentlemans = new URL('@/assets/images/gentlemans.png', import.meta.url).href
const orphans = new URL('@/assets/images/orphans.jpeg', import.meta.url).href
const ellen = new URL('@/assets/images/ellen.jpg', import.meta.url).href
const anne = new URL('@/assets/images/anne.jpg', import.meta.url).href

const frida = new URL('@/assets/images/frida.jpg', import.meta.url).href
const frankenstein = new URL('@/assets/images/frankenstein.png', import.meta.url).href
const rebecca = new URL('@/assets/images/rebecca.jpg', import.meta.url).href
const bballae = new URL('@/assets/images/bballae.jpg', import.meta.url).href
const love = new URL('@/assets/images/love.jpeg', import.meta.url).href
</script>

<style>
@import "@/assets/style_search.css";
</style>
