<template>
  <div class="about">
    <h1>두 개의 정수를 입력해주세요.</h1>

    <div class="inputgroup">
      <input type="number" v-model.number="num1"/>
    </div>

    <div class="inputgroup">
      <input type="number" v-model.number="num2"/>
    </div>

    <div class="inputgroup">
      <button @click="onCalculate" :disabled="loading">
        {{ loading ? '계산 중...' : '결과' }}
      </button>
    </div>

    <p class="add_result">{{ displayMessage }}</p>
  </div>
</template>

<script>
import {calculateSum} from '@/api/sum';

export default {
  name: 'SumPage',
  data() {
    return {
      num1: 0,
      num2: 0,
      result: null,
      loading: false,
      errorMsg: '',
    };
  },
  computed: {
    displayMessage() {
      if (this.errorMsg) {
        return `에러: ${this.errorMsg}`;
      }
      if (this.result !== null) {
        return `덧셈 결과: ${this.result}`;
      }
      return '';
    }
  },
  methods: {
    async onCalculate() {
      this.loading = true;
      this.errorMsg = '';
      try {
        const {result} = await calculateSum(this.num1, this.num2);
        this.result = result;
      } catch (err) {
        this.errorMsg = err.title || err.reason || '알 수 없는 에러';
        console.error('[SumPage] API 에러:', err);
      } finally {
        this.loading = false;
      }
    }
  }
};
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

button {
  padding: 12px;
  background-color: #2196F3;
  color: #fff;
  border: none;
  border-radius: 12px;
  width: 100%;
  cursor: pointer;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #1976D2;
}

.add_result {
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
}
</style>
