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

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authenticate(email, password);
      localStorage.setItem("authToken", response.data.token);
    } catch (error) {
      toaster.negative(error.message);
    }
  };

  return (
    <div className="page-container">
      <ToasterContainer />
      <div className="login-container">
        <LoginWrapper data-testid="Login">
          <HeadingMedium>Whats your email and password?</HeadingMedium>
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
              disabled={!email || !password}
              className="w-full mt-4"
              overrides={{
                BaseButton: { style: { width: "100%" } }
              }}
            >
              Continue
            </Button>
          </form>
        </LoginWrapper>

        <div className="login-divider">
          <span className="line" />
          <span className="text"> or </span>
          <span className="line" />
        </div>

        <SocialLogin />
      </div>  
    </div>
  );
}