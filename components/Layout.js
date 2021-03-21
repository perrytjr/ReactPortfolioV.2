

import SideBar from './Sidebar'
import Navigation   from './Navbar'

const Layout = ({ children }) => {
    return (
        <>
         <Navigation/>
            

                 <main>{children}
                    </main>
               
         <SideBar/>
        </>
    )
}

export default Layout

