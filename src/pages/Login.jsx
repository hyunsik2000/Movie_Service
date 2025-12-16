import { UserInputField } from "@/components/InputField/UserInputField";
import { useState } from "react";
import { validateEmail, validatePassword } from "@/utils/validateForm";

export function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (field) => (e) => {
    const value = e.target.value;

    setForm((prev) => {
      const updatedForm = { ...prev, [field]: value };
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: field === "email" ? validateEmail(value) : prevErrors.email,
        password:
          field === "password" ? validatePassword(value) : prevErrors.password,
      }));
      return updatedForm;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalErrors = {
      email: validateEmail(form.email),
      password: validatePassword(form.password),
    };
    setErrors(finalErrors);
    const hasError = Object.values(finalErrors).some((v) => v !== "");
    if (hasError) return;
    alert("로그인 성공!");
  };

  return (
    <section className="mx-auto w-[300px] max-w-md py-20">
      <h2 className="flex-center mb-6 text-2xl font-semibold text-gray-800 dark:text-gray-100">
        로그인
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <UserInputField
          id="email"
          label="이메일"
          type="email"
          placeholder="ozCoding@email.com"
          value={form.email}
          onChange={handleChange("email")}
          error={errors.email}
        />

        <UserInputField
          id="password"
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={form.password}
          onChange={handleChange("password")}
          error={errors.password}
        />
        <button
          type="submit"
          className="mt-4 cursor-pointer rounded-lg bg-red-600 py-[13px] text-white"
        >
          로그인
        </button>
      </form>
    </section>
  );
}
