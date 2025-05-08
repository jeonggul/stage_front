<template>
  <div class="about">
    <h1>두 개의 정수를 입력해주세요.</h1>
    
    <div class="inputgroup">
    <input type="number" v-model.number="num1" />
    </div>
    
    <div class="inputgroup">
    <input type="number" v-model.number="num2" />
    </div>

    <div class="inputgroup">
    <button @click="resultbutton">결과</button>
    </div>

    <p class="add_result">덧셈 결과: {{ result }}</p>

  </div>
</template>

<script>
export default {
  data() {
    return {
      num1: 0,
      num2: 0,
      result: 0
    }
  },
  methods: {
    resultbutton() {
      this.result = this.num1 + this.num2
    }
  }
}

</script>

<style>
.about {
  max-width: 400px;
  margin: 40px auto;
  font-family: Arial, sans-serif;
}

.inputgroup {
  margin-bottom: 16px;
}

input {
  padding: 10px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
}

.resultbutton {
  padding: 12px 20px;
  background-color: #2196F3; /* 파란색 */
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
}

.resultbutton:hover {
  background-color: #1976D2;
}

.add_result {
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
}
</style>
