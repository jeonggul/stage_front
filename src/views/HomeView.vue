<script>
export default {
  name: 'HomeView',
  methods:{
    gotoAboutView(){
      this.$router.push('/about')
    }
  }
}
</script>

<template>
  <main>
    <h2>아래 버튼을 클릭하면, 다음 페이지로 이동합니다.</h2>
    <button class="aboutbutton" @click="gotoAboutView"> 이동하기 </button>
  </main>
</template>

<style>
.aboutbutton {
  display: inline-block;
  padding: 12px 20px;
  background-color: #2196F3;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
}

.aboutbutton:hover {
  background-color: #1976D2;
}
</style>
