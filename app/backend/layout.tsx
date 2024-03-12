import React from 'react'
import { AuthProvider } from '@/context/AuthContext'

const backendLayout = ({ children }: { children: React.ReactNode }) => {
    return (<div
        suppressHydrationWarning={ true } className="w-full h-full">
        <AuthProvider>
            { children }
        </AuthProvider>
    </div>)
}

export default backendLayout
