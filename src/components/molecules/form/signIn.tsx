import { PATH } from "@/constants";
import { signIn } from "@/feature/user/userAction";
import { useAppDispatch } from "@/hooks";
import { useFormik } from "formik";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/button";
import Input from "../../atoms/input";
import "./styles.scss";

export default function SignIn() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(signIn(values)).then((data: any) => {
        if (data.error) return;
        navigate(PATH.HOME);
      });
    },
  });

  const onClick = useCallback(() => {
    formik.submitForm();
  }, []);

  return (
    <form className="auth-form sign-in-form" onSubmit={formik.handleSubmit}>
      <div className="blur-bg"></div>
      <Input
        name="email"
        placeholder="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <Input
        name="password"
        placeholder="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <div className="font__sm auth-form__checkbox">
        <Input name="save-password" type="checkbox" /> Remember Password
      </div>
      <Button text="Log in" className="app-btn__main" onClick={onClick} />
    </form>
  );
}
