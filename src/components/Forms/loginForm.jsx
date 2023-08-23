import { useForm } from "react-hook-form";
import auth from "../../store/auth";
import { useState } from "react";

import { Eye } from "../../icons/iconComponent";

export default function LoginForm() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    auth.loginAction(data);
  };

  return (
    <form
      className="flex flex-col justify-center text-txt-main-white p-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="username">Ім&apos;я користувача або Email адреса</label>
      <input
        type="text"
        className={`px-4 py-1 outline-none border border-transparent focus:border-b-txt-main-yellow transition-all duration-250 ${
          errors.username ? "bg-bg-orange" : "bg-bg-main"
        }`}
        {...register("username", { required: true })}
      />
      <p className="text-bg-orange txt-lg font-semibold mb-8">
        {errors.username?.message}
      </p>

      <label htmlFor="password">Пароль</label>
      <div className="relative">
        <input
          type={isPasswordShown ? "text" : "password"}
          className={`w-full px-4 py-1 outline-none border border-transparent focus:border-b-txt-main-yellow transition-all duration-250 ${
            errors.password ? "bg-bg-orange" : "bg-bg-main"
          }`}
          {...register("password", { required: true })}
        />
        <button
          type="button"
          onClick={() => setIsPasswordShown((prevState) => !prevState)}
          className="absolute right-2 bottom-1/2 translate-y-1/2  w-8 h-8 flex justify-center items-center "
        >
          <Eye className="w-4/5 h-4/5" crossed={!isPasswordShown} />
        </button>
      </div>
      <p className="text-bg-orange txt-lg font-semibold mb-8">
        {errors.password?.message}
      </p>

      <input
        type="submit"
        className="bg-bg-red w-[280px] h-[56px] py-[14px] text-xl font-semibold text-txt-main-white hover:shadow-btnRed focus:shadow-btnRed mx-auto rounded-full"
      />
    </form>
  );
}
