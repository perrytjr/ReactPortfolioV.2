import styles from '../styles/Layout.module.css'
import Navigation   from './Navbar'

const Layout = ({ children }) => {
    return (
        <>
                <Navigation/>
        <div className={styles.container}>
            <main className={styles.main}>{children}
                </main>
            
            
        </div>
        </>
    )
}

export default Layout

