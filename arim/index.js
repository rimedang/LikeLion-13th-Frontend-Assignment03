const nameInput = document.querySelector('#textinput'); // #붙임!
const emailInput = document.querySelector('#emailinput');
const pwInput = document.querySelector('#passinput');
const pwCheckInput = document.querySelector('#passcheckinput');

const signupBtn = document.getElementById('signup');
const resetBtn = document.getElementById('reset');
const lookBtns = document.querySelectorAll('#look');
const pwError = document.querySelectorAll('.error-msg');

lookBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const pwField = btn.previousElementSibling;
    if (pwField.type === 'password') {
      pwField.type = 'text';
      btn.textContent = '보기';
    } else {
      pwField.type = 'password';
      btn.textContent = '보기';
    }
  });
});

// 회원가입 버튼 클릭 시
signupBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const pw = pwInput.value;
  const pwCheck = pwCheckInput.value;

  let isValid = true;

  // 이름 검사
  if (!name) {
    nameInput.style.border = '2px solid red';
    pwError[0].textContent = '이름을 입력하세요';
    isValid = false;
  } else {
    nameInput.style.border = '2px solid green';
    pwError[0].textContent = '';
  }

  // 이메일 검사 (간단한 형식 검사)
  if (!email.includes('@') || !email.includes('.')) {
    emailInput.style.border = '2px solid red';
    pwError[1].textContent = '유효한 이메일을 입력하세요';
    isValid = false;
  } else {
    emailInput.style.border = '2px solid green';
    pwError[1].textContent = '';
  }

  // 비밀번호 검사 (6자 이상)
  if (pw.length < 6) {
    pwInput.style.border = '2px solid red';
    pwError[2].textContent = '비밀번호는 최소 6자입니다.';
    isValid = false;
  } else {
    pwInput.style.border = '2px solid green';
    pwError[2].textContent = '';
  }

  // 비밀번호 확인 검사
  if (pw !== pwCheck || !pwCheck) {
    pwCheckInput.style.border = '2px solid red';
    pwError[3].textContent = '비밀번호가 일치하지 않습니다.';
    isValid = false;
  } else {
    pwCheckInput.style.border = '2px solid green';
    pwError[3].textContent = '';
  }

  if (isValid) {
    alert('회원가입 완료!');
  } else {
  }
});
