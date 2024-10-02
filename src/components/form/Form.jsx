import React from "react";
import styles from "./Form.module.scss";
import { useForm } from "react-hook-form";

const Form = ({ title }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({mode:"onBlur"})

  const onSubmit = ({ email, password }) => {
    reset();
  };

  const userPassword = {
    required: "필수 필드입니다.",
    minLength: {
      value: 4,
      message: "최소 4자입니다.",
    },
    maxLength: {
      value: 13,
      message: "최대 13자입니다.",
    },
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gm,
      message: `최소 8자, 영문 1자, 숫자 1자.`,
    },
  };

  const userEmail = {
    required: "필수 필드입니다.",
    pattern: {
      value:
        /^([A-Z|a-z|0-9](\-|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm,
      message: "입력하신 이메일 주소가 올바르지 않습니다.",
    },
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="email"
          placeholder="E-mail"
          {...register("email", userEmail)}
        />
        {errors?.email && (
          <div>
            <span className={styles.form_errors}>{errors?.email?.message}</span>
          </div>
        )}
        <div>
          <span className={styles.form_error}></span>
        </div>
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          {...register("password", userPassword)}
        />
        {errors?.email && (
          <div>
            <span className={styles.form_errors}>{errors?.email?.message}</span>
          </div>
        )}
        <div>
          <span className={styles.form_error}></span>
        </div>
      </div>
      <button type="submit">{title}</button>
      <span className={styles.form_error}></span>
    </form>
  );
};

export default Form;
