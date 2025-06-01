
document.getElementById('request_btn').addEventListener('click', function () {
    document.getElementById('verify_section').classList.remove('hidden');
    this.classList.add('disabled');
    this.disabled = true;
});

document.getElementById('auth_btn').addEventListener('click', function () {
    alert('휴대폰 인증이 완료되었습니다.');
});

document.getElementById('all_agree').addEventListener('change', function () {
    const items = document.querySelectorAll('.agree_check');
    items.forEach(item => item.checked = this.checked);
});
