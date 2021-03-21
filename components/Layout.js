
import Greeting from './Greeting'
import SideBar from './Sidebar'
import Navigation from './Navbar'


const Layout = ({ children }) => {
    return (
        <>
            <Navigation />
         
            <main>{children}
            </main>







        </>
    )
}

export default Layout

