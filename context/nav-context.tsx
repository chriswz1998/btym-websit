import React, {createContext, ReactNode, useContext} from 'react';
import {CombinedSection} from "@/lib/model";
import useHttp from "@/hooks/useActions";


interface NavContextProps {
    data: CombinedSection[] | null;
    isLoading: boolean;
}

interface NavProviderProps {
    children: ReactNode;
}

// 创建一个Context，初始值为null
const NavContext = createContext<NavContextProps>({ data: null, isLoading: true });

// 创建一个Provider组件NavProvider: React.FC<NavProviderProps> =
export const NavProvider: React.FC<NavProviderProps> = ({ children }) => {
    const { data, isLoading } = useHttp<CombinedSection[]>('/api/getNav', {
        method: 'GET'
    }, true);

    // 如果你需要在数据变化时执行副作用，可以在这里使用useEffect

    return (
        <NavContext.Provider value={{ data, isLoading }}>
            {children}
        </NavContext.Provider>
    );
};

// 创建一个hook以便在组件中轻松使用context
export const useNav = () => {
    return useContext(NavContext);
};
