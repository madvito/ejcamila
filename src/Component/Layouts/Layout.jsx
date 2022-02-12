import React from 'react'
import SideBar from '../../Page/Sidebar/SideBar'
import Sidebar from '../../Component/Menu/Sidebar'

const Layout = ({isLoged, children}) => {
  return (
    <div className="asd">
      {
        isLoged && <Sidebar />
      }

      <div>
        {children}
      </div>

    </div>
  )
}

export default Layout