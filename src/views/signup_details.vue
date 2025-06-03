<template>
  <div class="signup_details_box">
    <img :src="cwulogo" class="logo" />
    <div class="title">Stage_Play</div>

    <div class="input_details">
      <img :src="idimg" />
      <input type="text" placeholder="아이디" />
    </div>
    <div class="input_details">
      <img :src="pwimg" />
      <input type="password" placeholder="비밀번호" />
    </div>
    <div class="input_details">
      <img :src="pw2img" />
      <input type="password" placeholder="비밀번호 확인" />
    </div>
    <div class="input_details">
      <img :src="emailimg" />
      <input type="email" placeholder="이메일" />
    </div>
    <div class="input_details">
      <img :src="nameimg" />
      <input type="text" placeholder="이름" />
    </div>

    <div>
      <div class="title_text">휴대폰 인증하기</div>
      <div class="number_input">
        <img :src="phoneimg" />
        <input type="text" placeholder="휴대폰 번호" />
        <button type="button" class="auth_btn" id="request_btn">인증요청</button>
      </div>

      <div class="number_input hidden" id="verify_section">
        <img :src="emailimg" />
        <input type="text" placeholder="인증번호" />
        <button type="button" class="auth_btn" id="auth_btn">인증확인</button>
      </div>
    </div>

    <div class="notice">
      · 해외 이용자는 여기를 <span class="view"><a href="#">(foreign)</a></span> 클릭 후 가입해주세요.<br />
      · 회원가입/휴대폰 인증에 문제가 있다면 <span class="view"><a href="#">연결</a></span>을 확인해주세요.
    </div>

    <div class="title_text">이용약관 동의</div>
    <div class="terms_box">
      <label class="terms_check">
        <input type="checkbox" id="all_agree" />
        <span class="all_agree">전체 동의</span>
      </label>
      <hr />
      <label class="terms_check">
        <input type="checkbox" class="agree_check" />
        <span>만 14세 이상입니다. <span class="pilsu">(필수)</span></span>
      </label>
      <hr />
      <label class="terms_check">
        <input type="checkbox" class="agree_check" />
        <span>이용약관 동의 <span class="pilsu">(필수)</span></span><span class="view"><a href="#">내용보기</a></span>
      </label>
      <hr />
      <label class="terms_check">
        <input type="checkbox" class="agree_check" />
        <span>개인정보 수집/이용 동의 <span class="pilsu">(필수)</span></span><span class="view"><a href="#">내용보기</a></span>
      </label>
    </div>

    <div class="submit_btn">
      <button type="submit" @click="submitForm">가입완료</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupDetailsView",
  data() {
    return {
      cwulogo: new URL('@/assets/images/cwu.png', import.meta.url).href,
      idimg: new URL('@/assets/images/id.png', import.meta.url).href,
      pwimg: new URL('@/assets/images/pw.png', import.meta.url).href,
      pw2img: new URL('@/assets/images/pw2.png', import.meta.url).href,
      emailimg: new URL('@/assets/images/email.png', import.meta.url).href,
      nameimg: new URL('@/assets/images/name.png', import.meta.url).href,
      phoneimg: new URL('@/assets/images/phone.png', import.meta.url).href,
    };
  },
  mounted() {
    document.getElementById("request_btn")?.addEventListener("click", function () {
      document.getElementById("verify_section")?.classList.remove("hidden");
      this.classList.add("disabled");
      this.disabled = true;
    });

    document.getElementById("auth_btn")?.addEventListener("click", function () {
      alert("휴대폰 인증이 완료되었습니다.");
    });

    document.getElementById("all_agree")?.addEventListener("change", function () {
      const items = document.querySelectorAll(".agree_check");
      items.forEach((item) => {
        item.checked = this.checked;
      });
    });
  },
  methods: {
    submitForm() {
      alert("(임시) 가입 완료 - 버튼 동작 테스트");
    }
  }
};
</script>

<style>
@import "@/assets/style.css";
</style>
