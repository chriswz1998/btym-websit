import React from 'react'
import { AuthProvider } from '@/context/AuthContext'
import { Toaster } from 'react-hot-toast'

const backendLayout = ({ children }: { children: React.ReactNode }) => {
    return (<div
        suppressHydrationWarning={ true } className="w-full h-full">
        <AuthProvider>
            <Toaster/>
            { children }
        </AuthProvider>
    </div>)
}

export default backendLayout
