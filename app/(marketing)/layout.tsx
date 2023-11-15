import React from 'react'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
      <div
          className={ 'min-h-screen font-[\'Maven Pro\']' }>
        { children }
      </div>
  )
}

export default MainLayout
