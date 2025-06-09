<script setup>
import App from '../App.vue'
import { ref, onMounted } from 'vue'
import { useRouter, RouterLink, RouterView } from 'vue-router'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

const router = useRouter()
const isMenuOpen = ref(false)
const searchQuery = ref('')

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const performSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({ path: '/search', query: { query: searchQuery.value.trim() } })
  }
}

onMounted(() => {
  new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
})
</script>

<template>
  <div>
    <!-- Header -->
    <header class="header">
      <div class="menu-icon" @click="toggleMenu">
        <img v-if="!isMenuOpen" src="https://img.icons8.com/fluency-systems-filled/48/xbox-menu.png" alt="menu" />
        <img v-else src="https://img.icons8.com/fluency-systems-filled/48/cancel.png" alt="close" />
      </div>

      <div class="header-center">
        <RouterLink to="/about">소개</RouterLink>
        <RouterLink to="/musical">뮤지컬과</RouterLink>
        <RouterLink to="/film">영화과</RouterLink>
        <RouterLink to="/reservasion">예약</RouterLink>

        <div class="search-wrapper">
          <input type="text" v-model="searchQuery" class="search-input" @keyup.enter="performSearch" />
          <img src="https://img.icons8.com/fluency-systems-filled/48/search.png" alt="search" class="search-icon" @click="performSearch" />
        </div>
      </div>

      <div class="mypage-icon">
        <RouterLink to="/mypage">
          <img src="https://img.icons8.com/fluency-systems-filled/48/user-male-circle.png" alt="mypage" />
        </RouterLink>
      </div>

      <!-- Dropdown Menu -->
      <div v-if="isMenuOpen" class="dropdown-menu">
        <div class="dropdown-group">
          <p class="group-title">뮤지컬과</p>
          <RouterLink to="/musical">- 전체</RouterLink>
          <RouterLink :to="{ path: '/musical', query: { available: true } }">- 예매가능</RouterLink>
        </div>

        <div class="dropdown-group">
          <p class="group-title">영화과</p>
          <RouterLink to="/film">- 전체</RouterLink>
          <RouterLink :to="{ path: '/film', query: { available: true } }">- 예매가능</RouterLink>
        </div>

        <RouterLink to="/notice">공지사항</RouterLink>
        <RouterLink to="/event">이벤트</RouterLink>
        <RouterLink to="/about">소개</RouterLink>
        <RouterLink to="/guide">이용안내</RouterLink>
        <RouterLink to="/myticket">MY 티켓 - 예약확인/취소</RouterLink>
        <RouterLink to="/recent">최근 본 작품</RouterLink>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://i.pinimg.com/736x/80/ba/16/80ba161f36421a677ccdf8cb99412a4d.jpg" alt="1">
          </div>
          <div class="swiper-slide">
            <img src="https://i.pinimg.com/736x/28/80/cb/2880cb46ae6fd5d6d3d64f692614a7dd.jpg" alt="2">
          </div>
          <div class="swiper-slide">
            <img src="https://i.pinimg.com/736x/eb/4f/9e/eb4f9ee63be3fa568aec15e95309fd05.jpg" alt="3">
          </div>
          <div class="swiper-slide">
            <img src="https://i.pinimg.com/736x/af/f9/c1/aff9c18f3a71b7c9c6d2dbfb7d500ff0.jpg" alt="4">
          </div>
          <div class="swiper-slide">
            <img src="https://i.pinimg.com/736x/d1/f0/1d/d1f01d38ab5358142d23d3f82458d611.jpg" alt="5">
          </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-pagination"></div>
      </div>
      <RouterView />

      <div class="white-box">
        <div class="theme-wrapper">
          <div class="theme-box">
            <h1>테마별 추천</h1>
            <p class="theme-subtitle">취향에 맞는 공연을 찾아보세요</p>
          </div>
          <div class="theme-links">
            <RouterLink to="/Today">오늘상영</RouterLink>
            <span class="divider"></span>
            <RouterLink to="/musical">뮤지컬과</RouterLink>
            <span class="divider"></span>
            <RouterLink to="/film">영화과</RouterLink>
            <span class="divider"></span>
            <RouterLink to="/notice">공지사항</RouterLink>
          </div>
        </div>
      </div>

      <div class="musical-box">
        <div class="musical-header">
          <h1>ABOUT</h1>
          <h2>뮤지컬과</h2>
          <div class="musical-subline">
            <p>우리 학교 뮤지컬과 학생들의 공연들이에요</p>
            <RouterLink to="/musical" class="more-link">더보기 ></RouterLink>
          </div>
        </div>
      </div>

      <div class="film-box">
        <div class="film-header">
          <h2>영화과</h2>
          <div class="film-subline">
            <p>우리 학교 영화과 학생들의 공연들이에요</p>
            <RouterLink to="/film" class="more-link">더보기 ></RouterLink>
          </div>
        </div>
      </div>

    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-left">
        <span class="footer-title">문의시간</span>
        <span class="footer-phone">02-1234-5678</span>
        <span class="footer-hours">평일 09:00 ~ 18:00</span>
      </div>

      <div class="footer-divider"></div>

      <div class="footer-right">
        <RouterLink to="/company" class="footer-link">회사소개</RouterLink>
        <RouterLink to="/terms" class="footer-link">이용약관</RouterLink>
        <RouterLink to="/privacy" class="footer-link">개인정보처리방침</RouterLink>
        <RouterLink to="/partner" class="footer-link">제휴문의</RouterLink>
      </div>
    </footer>
  </div>
</template>


<style scoped>
.swiper {
  width: 100%;
  height: 400px;
  background-color: #8FAC8B;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
}

.swiper-wrapper {
  display: flex;
}

.swiper-slide {
  height: 300px;
  margin-top: 50px;
  opacity: 0.4;
  transform: scale(0.9);
  transition: transform 0.5s, opacity 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.swiper-button-next,
.swiper-button-prev {
  color: #ffff;
}

.swiper-slide-active {
  opacity: 1;
  transform: scale(1.05);
}

.header {
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: #EBE9E8;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
  z-index: 1000;
  justify-content: space-between;
}

.menu-icon,
.mypage-icon {
  width: 48px;
  height: 48px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-center {
  display: flex;
  align-items: center;
  gap: 5rem;
}

.header-center a {
  font-weight: bold;
  color: #373536;
  text-decoration: none;
}

.search-wrapper {
  display: flex;
  align-items: center;
  background-color: white;
  border: 2px solid #aaa;
  border-radius: 20px;
  padding: 2px 8px;
}

.search-input {
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 4px;
  background: none;
  width: 150px;
}

.search-icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 999;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-size: 1rem;
}

.dropdown-menu a {
  color: #373536;
  text-decoration: none;
  font-weight: 500;
}

.dropdown-group {
  margin-bottom: 0.5rem;
}

.group-title {
  font-weight: bold;
  color: #335938;
}

.main-content {
  padding-top: 60px;
  background-color: white;
  flex: 1;
}

.white-box {
  height: 80px;
  background-color: white;
  justify-content: center;
  align-items: center;
  position: relative;
}

.theme-box h1 {
  font-size: 2rem;
  color: white;
}

.theme-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  padding-left: 1rem;
  z-index: 10;
  height: 100px;
}

.theme-box {
  width: 250px;
  background-color: #335938;
  border-radius: 15px 15px 0 0;
  padding: 1rem 1.5rem;
}

.theme-subtitle {
  font-size: 0.85rem;
  color: white;
  margin-top: -0.25rem;
}

.theme-links {
  display: flex;
  color: #373536;
  padding: 6px 12px;
  margin-left: 15rem;
  margin-bottom: 1rem;
  gap: 5rem;
  align-items: flex-end;
  font-size: 20px;
}

.theme-links a {
  text-decoration: none;
  color: #373536;
  font-weight: 400;
}

.divider {
  width: 1.5px;
  height: 55px;
  background-color: gray;
  align-self: center;
  margin-bottom: -10px;
}

.musical-box {
  background-color: #E5E3D6;
  margin: 0 auto;
  padding: 2.5rem;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
}

.musical-header {
  color: black;
}

.musical-header h1 {
  font-size: 50px;
  font-weight: bold;
}

.musical-header h2 {
  font-size: 40px;
}

.musical-subline {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.musical-subline p {
  color: gray;
  font-size: 1rem;
}

.film-box {
  background-color: white;
  margin: 0 auto;
  padding: 2.5rem;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
}

.film-header {
  color: black;
}

.film-header h1 {
  font-size: 50px;
  font-weight: bold;
}

.film-header h2 {
  font-size: 40px;
}

.film-subline {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.film-subline p {
  color: gray;
  font-size: 1rem;
}

.more-link {
  font-size: 1rem;
  color: gray;
  padding: 6px 14px;
  text-decoration: underline;
}

.footer {
  position: relative;
  bottom: 0;
  left: 0;
  height: 150px;
  background-color: #EBE9E8;
  display: flex;
  align-items: center;
  z-index: 1;
  color: #373536;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.footer-left {
  flex: 0 0 25%;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
}

.footer-divider {
  width: 1px;
  height: 80%;
  background-color: #373536;
  margin-right: 2rem;
}

.footer-right {
  flex: 0 0 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5px;
  padding-right: 1rem;
}

.footer-title {
  font-weight: 600;
  font-size: 1rem;
}

.footer-phone {
  font-weight: 700;
  font-size: 1.2rem;
}

.footer-link {
  font-size: 0.85rem;
  color: #373536;
  text-decoration: none;
  cursor: pointer;
  padding: 4px 0;
}
</style>