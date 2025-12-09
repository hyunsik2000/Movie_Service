export const validateName = (name) => {
  const regex = /^[A-Za-z0-9가-힣]{2,8}$/;
  if (!name) return "이름을 입력해주세요.";
  if (!regex.test(name)) return "2~8자, 영어/숫자/한글만 사용 가능합니다.";
  return "";
};

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return "이메일을 입력해주세요.";
  if (!regex.test(email)) return "올바른 이메일 형식이 아닙니다";
  return "";
};

export const validatePassword = (password) => {
  const regex = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
  if (!password) return "비밀번호를 입력해주세요.";
  if (!regex.test(password))
    return "영문 + 숫자 조합, 최소 6자 이상이어야 합니다.";
  return "";
};

export const validatePasswordConfirm = (password, passwordConfirm) => {
  if (!passwordConfirm) return "비밀번호 확인을 입력해주세요.";
  if (password !== passwordConfirm) return "비밀번호가 일치하지 않습니다.";
  return "";
};
