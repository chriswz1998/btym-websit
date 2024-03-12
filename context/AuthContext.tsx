'use client'

import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Users } from '@/lib/model'
import useHttp from '@/hooks/useActions'

interface AuthContextProps{
    user: Users | null; // 可以根据需要定义更具体的类型
    login: (userDetails: Users) => void; // 同上，根据需要定义参数类型
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [ user, setUser ] = useState<Users | null>(null)
    const { execute } = useHttp<{}, Users>()

    useEffect(() => {
        console.log('AuthContext 1')
        const token = window.localStorage.getItem('access_token');
        console.log('AuthContext 2')

        if(token){
            console.log('AuthContext 3')
            const fetchUser = async() => {
                console.log('AuthContext 4')
                try{
                    const userData = await execute('auth/me', 'GET')
                    if(userData){
                        setUser(userData);
                    }
                } catch(error) {
                    console.error(error);
                    // 处理错误情况，比如 token 过期
                }
            };

            fetchUser();
        }
    }, []);

    const login = (userDetails: Users) => {
        setUser(userDetails);
        // 这里可以处理登录逻辑，例如保存用户信息、调用API等
    };

    const logout = () => {
        setUser(null);
        // 处理登出逻辑，例如清除用户信息、调用API等
    };

    return (<AuthContext.Provider value={ { user, login, logout } }>
        { children }
    </AuthContext.Provider>);
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(context === undefined){
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
