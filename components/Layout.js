

import SideBar from './Sidebar'
import Navigation   from './Navbar'

const Layout = ({ children }) => {
    return (
        <>
         <Navigation/>
             <SideBar/>

                 <main>{children}
                    </main>
               
        
        </>
    )
}

export default Layout

