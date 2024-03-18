'use client'

import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Users } from '@/lib/model'
import useHttp from '@/hooks/useActions'
import toast from 'react-hot-toast'

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
        const token = window.localStorage.getItem('access_token');

        if(token){
            const fetchUser = async() => {
                try{
                    const userData = await execute('auth/me', 'GET') as Users
                    if(userData){
                        setUser(userData);
                        toast.success('User information has been refreshed!')
                    }
                } catch(error) {
                    console.log(error);
                    // 处理错误情况，比如 token 过期
                }
            };
            fetchUser();
        }
    }, []);

    const login = (userDetails: Users) => {
        if(userDetails){
            setUser(userDetails);
            toast.success('login success!')
        }
        // 这里可以处理登录逻辑，例如保存用户信息、调用API等
    };

    const logout = () => {
        setUser(null);
        toast.success('logout success!')
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
