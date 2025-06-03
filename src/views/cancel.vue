<template>
  <div class="page">
    <Header/>
    <div class="layout">
      <div class="main-body">
        <div class="body-top">
          <div class="top-1 font-main">
            <a>MY</a>
            <a>Ticket</a>
          </div>
          <div class="top-2 border-r">
            <a>안녕하세요</a>
            <a>준혁님 ></a>
          </div>
          <div class="top-3 border-r">
            <a>이용가능 티켓</a>
            <a class="text-green font-main">10개</a>
          </div>
          <div class="top-4"></div>
        </div>

        <div class="body-bottom">
          <div class="bottom-left">
            <div class="bottom-left-1 border-b font-main">
              마이티켓
            </div>
            <div class="bottom-left-2 border-b">
              <a>예매내역</a>
              <a>취소/환불내역</a>
              <a>나의 이용후기</a>
            </div>
            <div class="bottom-left-3 border-b">
              <a>회원정보 수정</a>
            </div>
            <div class="bottom-left-4">
              <a>공지사항</a>
              <a>자주묻는질문</a>
              <a>1:1문의</a>
            </div>
          </div>

          <div class="bottom-right">
            <div class="right-title border-b">취소/환불내역</div>
            <div class="res">
              <div class="border-a">
                <div class="res-top border-b j-c-sb p-lr-10">
                  <p>입금기한초과</p>
                  <p>2025-05-30</p>
                </div>
                <div class="res-bottom d-flex j-c-sb p-lr-10">
                  <img class="w-2" src="">
                  <div class="w-5">
                    <p>The 오펀스</p>
                    <p class="text-grey">4.24(목) 13:00</p>
                    <p>총 1매</p>
                    <div>
                      <p>입금기간이 초과되어 자동 취소된 티켓입니다.</p>
                    </div>

                  </div>

                  <div class="res-button">
                    <a>상세내역</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>


<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}


/*추가기능*/
.p-lr-10 {
  padding: 0 10px;
}

.w-2 {
  width: 20%;
}

.w-3 {
  width: 30%;
}

.w-5 {
  width: 50%;
}

.h-1 {
  height: 10%;
}

.back-grey {
  background-color: #f2f2f2;
}

.text-green {
  color: green;
}

.text-grey {
  color: grey;
}

.border-a {
  border: 1px solid lightgrey;
}

.border-b {
  border-bottom: 1px solid lightgrey;
}

.border-r {
  border-right: 1px solid lightgrey;
}

.font-main {
  font-size: larger;
  font-weight: bolder;
}

.column { /*세로정렬*/
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
}

.d-flex {
  display: flex;
  gap: 10px;
  padding: 10px 0;
}

.t-m {
  color: darkgrey;
  width: 100px;
  padding: 5px 0;
  display: flex;
  justify-content: center; /* 가로 중앙 */
  align-items: center; /* 세로 중앙 */
}

.j-c-sb {
  display: flex;
  justify-content: space-between;
}

/*메인css*/
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layout {
  flex: 1;
  background-color: #e0e0e0;
  display: flex;
}

.main-body {
  flex: 1;
  padding: 30px;
}

.body-top {
  display: flex;
  justify-content: start;
  padding: 10px;
  height: 15%;
}

.top-1 {
  width: 28%;
  padding: 20px;
  background-color: darkgreen;
  color: white;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  display: flex;
  flex-direction: column; /* 세로 방향 정렬 */
}

.top-2 {
  width: 30%;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column; /* 세로 방향 정렬 */
}

.top-3 {
  width: 30%;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column; /* 세로 방향 정렬 */
}

.top-4 {
  width: 10%;
  padding: 20px;
  background-color: white;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}

.body-bottom {
  display: flex;
  padding: 10px;
  gap: 20px;
  height: 70%;
}

.bottom-left {
  width: 26%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  /*letter-spacing: 3px; 자간*/

}

.bottom-right {
  width: 70%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  gap: 1rem;
}

.bottom-left-1 {
  padding-bottom: 10px;
  height: 10%;
  justify-content: center; /* 가로 중앙 */
  align-items: start; /* 세로 시작 */
}

.bottom-left-2 {
  padding: 10px 0;
  display: flex;
  flex-direction: column; /* 세로 방향 정렬 */
  gap: 10px; /* 링크 사이 간격 (선택사항) */
  height: 30%;
  justify-content: center; /* 가로 중앙 */
  align-items: start; /* 세로 시작 */
}

.bottom-left-3 {
  padding: 10px 0;
  display: flex;
  flex-direction: column; /* 세로 방향 정렬 */
  gap: 10px; /* 링크 사이 간격 (선택사항) */
  height: 10%;
  justify-content: center; /* 가로 중앙 */
  align-items: start; /* 세로 시작 */
}

.bottom-left-4 {
  padding: 10px 0;
  display: flex;
  flex-direction: column; /* 세로 방향 정렬 */
  gap: 10px; /* 링크 사이 간격 (선택사항) */
  height: 30%;
  justify-content: center; /* 가로 중앙 */
  align-items: start; /* 세로 시작 */
}

.right-title {
  font-size: 20px;
  padding-bottom: 10px;
  font-weight: bolder;
  height: 10%;
}

.res-button {
  width: 90px;
  height: 30px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  background-color: #f8f8f8;
  text-align: center;
}
</style>
