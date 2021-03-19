
import ContactIcons from './ContactIcons'
import Link  from 'next/link'
import Image from 'next/image'
//import ContactIcons from '../Contact/ContactIcons';



const SideBar = () => (

  <section className='mt-10'>
    <section >
      <Link href="/" >
        <Image src="/images/profile.jpg" alt="" className='rounded-full flex items-center '
        width={130}
        height={130}
        layout="intrinsic"
         />
      </Link>
      <header>
        <h2>Perry Theobald Jr</h2>
        <p><a className='border-dotted border-b-2'href="mailto:perrytjr@gmail.com">Perrytjr@gmail.com</a> </p>
      </header>
    </section>

    <section>
      <h2>About</h2>
      <p>Hi, I&apos;m Perry. I like building things.
        I am a great listener and like to analyze the world through a different 
        lense then most. I graduated from <a className='underline'href="https://stockton.edu">Stockton University</a> with 
        a BA of Psychology and few credits shy of a second bachelors degree in Teacher Education.
        Recently I completed a Full-Stack-Web-Development program at <a className='underline' href='https://ucsd.edu/'>UCSD</a>
      </p>
      <ul className="resummeButton">
    <li>
      <Link href="/about" className="button">About Me</Link>
    </li>
  </ul>
    </section>

    <section>
     <ContactIcons/>
     <p> <Link href="/">Perry Theobald Jr</Link>.</p>

    </section>
  </section>
);

export default SideBar;
