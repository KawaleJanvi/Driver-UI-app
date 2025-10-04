import React from 'react';
import { auth, googleProvider, githubProvider, appleProvider, signInWithPopup } from '../../services/Initialize-sso';
import { Button } from "baseui/button";
import { FaGoogle, FaGithub, FaApple } from "react-icons/fa";
import { useStyletron } from 'baseui';

export default function SocialLogin() {
    const [css, theme] = useStyletron();
    const overrides = {
        BaseButton: {
            style: {
                backgroundColor: theme.colors.teal600,
                color: "white",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                padding: "0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: "1",
                ":hover": {
                    backgroundColor: theme.colors.teal900,
                },
            },
        },
        StartEnhancer: {
            style: {
                marginLeft: "0", marginRight: "0",
            },
        },
    };
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
        <div style={{ display: "flex", gap: "12px", flexDirection: "row", justifyContent: "center" }}>
            <Button
                startEnhancer={() => <FaGoogle size={18} />}
                overrides={overrides}
                onClick={signInWithGoogle}
            >
            </Button>

            <Button
                startEnhancer={() => <FaGithub size={18} />}
                overrides={overrides}
                onClick={signInWithGitHub}
            >
            </Button>

            <Button
                startEnhancer={() => <FaApple size={18} />}
                overrides={overrides}
                onClick={signInWithApple}
            >
            </Button>
        </div>

    );
}
