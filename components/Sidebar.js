import styles from '../styles/Sidebar.module.css'


import Link  from 'next/link'

import Image from 'next/image'
//import ContactIcons from '../Contact/ContactIcons';



const SideBar = () => (
  <section className={styles.sidebar}>
    <section id="intro">
      <Link href="/" className="logo">
        <Image src="/images/me.jpg" alt=""
        width={256}
        height={256}
         />
      </Link>
      <header>
        <h2>Perry Theobald Jr</h2>
        <p>Perrytjr@gmail.com</p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Perry. I like building things.
      
      </p>
      <ul className="actions">
        <li>
      
        </li>
      </ul>
    </section>

    <section id="footer">
     
    </section>
  </section>
);

export default SideBar;