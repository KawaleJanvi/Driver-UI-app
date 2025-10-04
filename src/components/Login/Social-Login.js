import React from 'react';
import { auth, googleProvider, githubProvider, appleProvider, signInWithPopup } from '../../services/Initialize-sso';
import { Button } from "baseui/button";
import { FaGoogle, FaGithub, FaApple } from "react-icons/fa";

export default function SocialLogin() {
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log('User info:', result.user);
        } catch (error) {
            console.error('Google sign-in error:', error);
        }
    };

    const signInWithGitHub = async () => {
        try {
            const result = await signInWithPopup(auth, githubProvider);
            console.log('User info:', result.user);
        } catch (error) {
            console.error('GitHub sign-in error:', error);
        }
    };

    const signInWithApple = async () => {
        try {
            const result = await signInWithPopup(auth, appleProvider);
            console.log('User info:', result.user);
        } catch (error) {
            console.error('Apple sign-in error:', error);
        }
    };

    return (
        <div style={{ display: "flex", gap: "12px", flexDirection: "column" }}>

            <Button
                startEnhancer={() => <FaGoogle size={20} />}
                overrides={{
                    BaseButton: {
                        style: ({ $theme }) => ({
                            backgroundColor: "#4285F4",
                            color: "white",
                            ":hover": {
                                backgroundColor: "#357AE8",
                            },
                        }),
                    },
                }}
                onClick={signInWithGoogle}
            >
                Continue with Google
            </Button>

            <Button
                startEnhancer={() => <FaGithub size={20} />}
                overrides={{
                    BaseButton: {
                        style: ({ $theme }) => ({
                            backgroundColor: "#24292e",
                            color: "white",
                            ":hover": {
                                backgroundColor: "#1b1f23",
                            },
                        }),
                    },
                }}
                onClick={signInWithGitHub}
            >
                Continue with GitHub
            </Button>

            <Button
                startEnhancer={() => <FaApple size={20} />}
                overrides={{
                    BaseButton: {
                        style: ({ $theme }) => ({
                            backgroundColor: "black",
                            color: "white",
                            ":hover": {
                                backgroundColor: "#333333",
                            },
                        }),
                    },
                }}
                onClick={signInWithApple}
            >
                Continue with Apple
            </Button>

        </div>

    );
}
