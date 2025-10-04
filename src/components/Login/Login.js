import React, { useState } from "react";
import { Input } from "baseui/input";
import { Button } from "baseui/button";
import { FormControl } from "baseui/form-control";
import { HeadingMedium } from "baseui/typography";
import { LoginWrapper } from "./Login.styled";
import "./Login.css";
import { authenticate } from "../../services/Login.service";
import { ToasterContainer, toaster } from 'baseui/toast';
import SocialLogin from "./Social-Login";
import { useStyletron } from "baseui";
import { showToast } from "../../common/toaster";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [css, theme] = useStyletron();

    const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidPassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/.test(password);

  const isFormValid = isValidEmail(email) && isValidPassword(password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authenticate(email, password);
      localStorage.setItem("authToken", response.data.token);
    } catch (error) {
      showToast(error.message, "error", theme);
    }
  };

  return (
    <div className="page-container">
      <div className="login-container">
        <LoginWrapper data-testid="Login">
          <HeadingMedium overrides={{
            Block: {
              style: {
                color: theme.colors.teal800,
              },
            }
          }}>Whats your email and password?</HeadingMedium>
          <form onSubmit={handleSubmit}>
            <FormControl label={null}>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="mb-4"
              />
            </FormControl>
            <FormControl label={null}>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="mb-4"
              />
            </FormControl>
            <Button
              type="submit"
              disabled={!isFormValid}
              className="w-full mt-4"
              overrides={{
                BaseButton: {
                  style: {
                    width: "100%",
                    backgroundColor: theme.colors.teal600
                  }
                }
              }}
            >
              Continue
            </Button>
          </form>
        </LoginWrapper>
        <div className="login-divider">
          <span className="line" />
          <span className="text">Or Sign In with</span>
          <span className="line" />
        </div>
        <SocialLogin />
      </div>
    </div>
  );
}