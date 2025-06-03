<template>
  <div class="layout">
    <header>...</header>
    <main class="main-content">
      <router-view />
    </main>
    <footer class="footer">
      <div class="footer-wrapper">
        <div class="footer-1">
          <p>문의 시간 ></p>
          <p>010-xxxx-xxxx</p>
          <p>월 - 금 10:00 - 18:00<br />(주말/공휴일 휴무)</p>
        </div>

        <div class="footer-2">
          <p>회사소개</p>
          <p>이용약관</p>
          <p>개인정보처리방침</p>
          <p>제휴문의</p>
        </div>

      </div>
    </footer>
  </div>
</template>

<style scoped>
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    color: black;
    text-align: center;
    z-index: 100;
    background-color: white;
    padding: 0 10px;
  }

  .footer-wrapper {
    display: flex;
    justify-content: start;
    text-align: left;

  }

  .footer-1 {
    gap: 10px;
    display: block;
    text-align: left;
    padding-left: 30px;
    padding-right: 30px;
    border-right: 1px solid lightgrey;
  }

  .footer-2 {
    gap: 10px;
    display: block;
    text-align: left;
    border-right: 1px solid lightgrey;
    padding-left: 30px;
    padding-right: 30px;
  }
</style>
<script setup lang="ts">
</script>