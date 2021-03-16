import styles from '../styles/Layout.module.css'
import Navigation   from './Navbar'
import Sidebar from './Sidebar'
const Layout = ({ children }) => {
    return (
        <>
                <Navigation/>
        <div className={styles.container}>
            <main className={styles.main}>{children}
                </main>
                <Sidebar/>
        </div>
        </>
    )
}

export default Layout

