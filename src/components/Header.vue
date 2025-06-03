<template>
  <header class="header">
    <div class="header-container">

      <div class="menu-wrapper">
        <button class="menu-toggle" @click="toggleMenu">☰</button>
        <nav :class="{ open: isMenuOpen }">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>

      <div class="header-link">
        <a href="#">소개</a>
        <a href="#">뮤지컬과</a>
        <a href="#">영화과</a>
        <a href="#">예약</a>
      </div>

      <div class="search-bar">
        <input
            type="text"
            v-model="searchQuery"
            placeholder="검색어를 입력하세요"
        />
        <button @click="handleSearch">
          🔍
        </button>
      </div>

      <!-- 내 정보 아이콘 -->
      <router-link to="/profile" class="profile-icon">
        <img src="" alt="내 정보" />
      </router-link>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

const searchQuery = ref('')

function handleSearch() {
  if (searchQuery.value.trim()) {
    console.log('검색:', searchQuery.value)
    // 필요 시 router로 이동하거나 API 호출
  }
}
</script>

<style scoped>
a {
  all: unset;
  cursor: pointer;
}


/*햄버거 버튼*/

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 20px;
  border-bottom: 2px solid green;
}

.menu-wrapper {
  position: relative;
  margin-right: 1rem;
}

.menu-toggle {
  font-size: 1.5rem;
  background-color: black;
  border-radius: 20px;
  border: none;
  color: white;
  cursor: pointer;
}

nav {
  display: none;
  position: absolute;
  top: 100%; /* 햄버거 버튼 바로 아래 */
  left: 0;
  background-color: black;
  padding: 1rem;
  border-radius: 8px;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 10;
  min-width: 120px;
}

nav.open {
  display: flex;
}

nav a {
  color: white;
  text-decoration: none;
}

/*소개 뮤지컬과 영화과 예약*/
.header-link a{
  padding-left: 50px;
}

/*검색바*/
.search-bar {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 20px;
  overflow: hidden;
  background: white;
}

.search-bar input {
  border: none;
  padding: 0.5rem 1rem;
  outline: none;
  flex: 1;
  font-size: 1rem;
}

.search-bar button {
  background: none;
  border: none;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

/* 내 정보 아이콘 스타일 */
.profile-icon img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
}
/* 모바일용 수정필요
@media (max-width: 768px) {
  .top-bar {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .header-container {
    flex-direction: column;
    align-items: stretch;
  }

  .header-link {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .search-bar {
    width: 100%;
    margin-top: 10px;
  }

  .profile-icon {
    margin-left: auto;
  }

  nav {
    position: relative;
  }
}*/

</style>
