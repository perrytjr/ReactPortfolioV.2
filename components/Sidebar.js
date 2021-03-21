
import ContactIcons from './ContactIcons';
import Link from 'next/link';
import Image from 'next/image';



const SideBar = () => (

  <section className=' Flex flex-col mt-10 h-screen bg-green-100 '>
    <section className=' '>
      <Link href="/" >
        <Image src="/images/profile.jpg" alt="" className='rounded-full  items-center '
          width={130}
          height={130}
          layout="intrinsic"
        />
      </Link>
      <header>
        <h2>Perry Theobald Jr</h2>
        <p><a className='border-dotted border-b-2' href='mailto:perrytjr@gmail.com'>Perrytjr@gmail.com</a> </p>
      </header>
    </section>

    <section className=''>
      <h2>About</h2>
      <p>Hi, I&apos;m Perry. I like building things.
      I am a great listener and like to analyze the world through a different
        lense then most. I graduated from <a className='underline' href="https://stockton.edu">Stockton University</a> with
        a BA of Psychology and few credits shy of a second bachelors degree in Teacher Education.
        Recently I completed a Full-Stack-Web-Development program at <a className='underline' href='https://ucsd.edu/'>UCSD!</a>
      </p>
      <div>
          <Link href='/about' className='button'>About Me</Link>
          </div>
      
    </section>

    <footer>
      <ContactIcons />
    </footer>
     <Link href='/'><a>Perry Theobald Jr</a></Link>
  </section>
);

export default SideBar;
