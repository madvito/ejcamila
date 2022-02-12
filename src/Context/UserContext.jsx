import React, {useState, createContext, useEffect} from 'react';

export const UserContext = createContext();

const UserProvider = ({children}) => {
    const defaultUserData = {
        user: null,
        token: null,
        role: null,
    }
    const [userData, setUserData] = useState(defaultUserData);
    const [sidebarData, setSiderbarData] = useState([])

    useEffect(() => {
        console.log(userData, sidebarData)},[userData.user]
    )
    
    const handleLogin = (user) => {
        setUserData({
            user:user.user, 
            token:user.token})
        setSiderbarData(user.sidebarData);
    }
    const handleLogout = () => {
        setUserData(defaultUserData);
        setSiderbarData([]);
    }

  return (
    <UserContext.Provider value={{handleLogin, handleLogout, userData, sidebarData}} >
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider