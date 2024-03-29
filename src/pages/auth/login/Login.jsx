import { useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { ioGenerateTokenPost } from "src/api-client";
import { useFetch } from "src/components/hooks";
import { LoginForm } from "src/components/molecules";
import { isSuccessStatus } from "src/utils";

const Login = () => {
  const methods = useForm();

  const toast = useToast();
  const navigate = useNavigate();
  const { query } = useFetch(ioGenerateTokenPost);

  const onSubmit = async (data) => {
    try {
      const params = new URLSearchParams(data);
      const loginRes = await query(params);
      if (isSuccessStatus(loginRes)) {
        const { access_token, expires, user, user_id, user_type } = loginRes.data;
        localStorage.setItem("io_at", access_token);
        localStorage.setItem("io_ed", new Date(expires).getTime());
        localStorage.setItem("io_un", user);
        localStorage.setItem("io_uc", user_id);
        localStorage.setItem("io_ut", user_type);
        navigate("/");
        window.location.reload(true);
      }
    } catch (error) {
      console.error("Error in onSubmit", error);
      toast({
        status: "error",
        description: error.data.detail || "Oops! Something went wrong",
        isClosable: true,
        position: "top-right",
      });
    }
  };

  const token = localStorage.getItem("io_at");
  const isTokenExpired = localStorage.getItem("io_ed") <= new Date().getTime();

  return token && !isTokenExpired ? (
    <Navigate to="/" />
  ) : (
    <LoginForm methods={methods} onSubmit={onSubmit} />
  );
};

export default Login;
