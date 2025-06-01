<template>
  <div class="page-wrapper">
    <!-- 헤더 -->
    <header class="main-header">
      <nav class="navbar">
        <div class="logo">🍿</div>
        <ul class="menu">
          <li>소개</li>
          <li>뮤지컬과</li>
          <li>영화과</li>
          <li>예매</li>
        </ul>
        <div class="header-right">
          <div class="search-container">
            <input
              class="search-txt"
              type="text"
              placeholder="검색어를 입력해주세요"
              v-model="searchQuery"
            />
            <button class="search-btn" type="submit" @click="performSearch">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div class="user-icon">👤</div>
        </div>
      </nav>
    </header>

    <!-- 본문 -->
    <main class="main-content">
      <!-- 슬라이드 -->
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(img, i) in slideImages" :key="i">
            <img :src="img" :alt="'slide ' + (i + 1)" />
          </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-pagination"></div>
      </div>

      <!-- 콘텐츠 -->
      <section class="show-section">
        <h2>뮤지컬과</h2>
        <div class="tabs">
          <span>현재 상영작</span>
          <span>상영 예정작</span>
        </div>

        <div class="cards">
          <div class="card" v-for="(show, index) in shows" :key="index">
            <img :src="show.image" :alt="show.title" />
            <div class="card-info">
              <strong>{{ show.title }}</strong>
              <p>{{ show.dates }}</p>
              <p>{{ show.venue }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- 푸터 -->
    <footer class="main-footer">
      <div>
        문의 시간 > 010-xxxx-xxxx<br />
        평일 09:00~18:00<br />
        (주말 및 공휴일 휴무)
      </div>
      <div>
        회사소개 | 이용약관 | 개인정보처리방침 | 제휴문의
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'detail_page',
};
</script>

<script setup>
import App from '../App.vue'
import { ref, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

const router = useRouter()
const searchQuery = ref('')

const slideImages = [
  'https://i.pinimg.com/736x/80/ba/16/80ba161f36421a677ccdf8cb99412a4d.jpg',
  'https://i.pinimg.com/736x/28/80/cb/2880cb46ae6fd5d6d3d64f692614a7dd.jpg',
  'https://i.pinimg.com/736x/eb/4f/9e/eb4f9ee63be3fa568aec15e95309fd05.jpg',
  'https://i.pinimg.com/736x/af/f9/c1/aff9c18f3a71b7c9c6d2dbfb7d500ff0.jpg',
  'https://i.pinimg.com/736x/d1/f0/1d/d1f01d38ab5358142d23d3f82458d611.jpg'
]

const shows = [
  {
    title: '캣츠 CATS',
    dates: '2025.05.01~2025.05.23',
    venue: '서울예술시립회관뮤지엄',
    image: 'https://cdn.ceomagazine.co.kr/news/photo/201712/1294_3799_2641.jpg'
  },
  {
    title: '페드라 뮤지컬',
    dates: '2025.05.01~2025.05.23',
    venue: '서울예술시립회관뮤지엄',
    image: 'https://blog.kakaocdn.net/dn/c5G3Nc/btraHrO55VV/9rY2J1UkNCxzHLnEA2BorK/img.png'
  },
  {
    title: '젠틀맨스 가이드',
    dates: '2025.05.01~2025.05.23',
    venue: '서울예술시립회관뮤지엄',
    image: 'https://img.newspim.com/news/2018/11/01/1811011558557240.jpg'
  },
  {
    title: '연극 오펀스',
    dates: '2025.05.01~2025.05.23',
    venue: '서울예술시립회관뮤지엄',
    image: 'https://cdn.dailysportshankook.co.kr/news/photo/202210/264940_264359_318.jpg'
  }
]

const performSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({ path: '/search', query: { query: searchQuery.value.trim() } })
  }
}

onMounted(() => {
  nextTick(() => {
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
})
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css');
@import url('https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css');

body {
  margin: 0;
  background-color: #fff !important;
  font-family: 'Arial', sans-serif;
  color: #000;
}

.page-wrapper {
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  margin: 0;
  /* max-width: 1440px; ← 이 줄 제거됨 */
}

.main-header {
  background-color: #fff;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 1px solid #ddd;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 30px;
  flex-wrap: wrap;
}

.menu {
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
  color: #000;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
}

.search-container {
  display: flex;
  align-items: center;
  border: 1px solid #000;
  border-radius: 20px;
  padding: 5px 10px;
  background-color: white;
}

.search-txt {
  border: none;
  outline: none;
  padding: 5px;
  font-size: 14px;
  flex: 1;
}

.search-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.user-icon {
  font-size: 20px;
  color: #000;
}

.main-content {
  padding: 30px 40px;
  color: #000;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-bottom: 40px;
  background-color: #8FAC8B;
  padding: 20px;
  border-radius: 10px;
  box-sizing: border-box;
}

.swiper-slide {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.show-section {
  padding-bottom: 40px;
}

.tabs {
  display: flex;
  gap: 20px;
  font-weight: bold;
  margin-top: 20px;
  color: #000;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.card img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 6px;
}

.card-info {
  margin-top: 10px;
  text-align: center;
}

.main-footer {
  background-color: #ebe9e8;
  padding: 30px 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 14px;
  margin-top: 40px;
  color: #000;
}
</style>
<!--dd-->