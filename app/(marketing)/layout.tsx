import React from 'react'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
      <div
          className={ 'min-h-screen font-[\'Maven Pro\']  max-w-[1980px] mx-auto' }>
        { children }
      </div>
  )
}

export default MainLayout
