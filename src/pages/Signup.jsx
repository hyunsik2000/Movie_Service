import { UserInputField } from "@/components/InputField/UserInputField";
import { useState } from "react";
import {
  validateName,
  validateEmail,
  validatePassword,
  validatePasswordConfirm,
} from "@/utils/validateForm";

export function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (field) => (e) => {
    const value = e.target.value;

    setForm((prev) => {
      const updatedForm = { ...prev, [field]: value };
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: field === "name" ? validateName(value) : prevErrors.name,
        email: field === "email" ? validateEmail(value) : prevErrors.email,
        password:
          field === "password" ? validatePassword(value) : prevErrors.password,
        passwordConfirm:
          field === "passwordConfirm"
            ? validatePasswordConfirm(updatedForm.password, value)
            : prevErrors.passwordConfirm,
      }));
      return updatedForm;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalErrors = {
      name: validateName(form.name),
      email: validateEmail(form.email),
      password: validatePassword(form.password),
      passwordConfirm: validatePasswordConfirm(
        form.password,
        form.passwordConfirm,
      ),
    };
    setErrors(finalErrors);
    const hasError = Object.values(finalErrors).some((v) => v !== "");
    if (hasError) return;
    alert("회원가입 성공!");
  };

  return (
    <section className="mx-auto w-[300px] max-w-md py-20">
      <h2 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-gray-100">
        회원가입
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <UserInputField
          id="name"
          label="이름"
          placeholder="2~8자 사이 숫자, 한글, 영어만 사용"
          value={form.name}
          onChange={handleChange("name")}
          error={errors.name}
        />

        <UserInputField
          id="email"
          label="이메일"
          type="email"
          placeholder="이메일 형식 사용"
          value={form.email}
          onChange={handleChange("email")}
          error={errors.email}
        />

        <UserInputField
          id="password"
          label="비밀번호"
          type="password"
          placeholder="영어 대문자/소문자 + 숫자의 조합 사용"
          value={form.password}
          onChange={handleChange("password")}
          error={errors.password}
        />

        <UserInputField
          id="passwordConfirm"
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호와 일치 확인"
          value={form.passwordConfirm}
          onChange={handleChange("passwordConfirm")}
          error={errors.passwordConfirm}
        />

        <button
          type="submit"
          className="mt-4 cursor-pointer rounded-lg bg-red-600 py-[13px] text-white"
        >
          회원가입
        </button>
      </form>
    </section>
  );
}
