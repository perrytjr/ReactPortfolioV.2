
import ContactIcons from './ContactIcons';
import Link from 'next/link';
import Image from 'next/image';



const SideBar = () => (

  <section className=' Flex flex-col mt-20 bg-gray-200 bg-opacity-90 m-12'>
    <section className=' '>
      <Link href="/" >
        <Image src="/images/profile.jpg" alt="" className='rounded-full  items-center '
          width={150}
          height={150}
          layout="intrinsic"
        />
      </Link>
      <header className='mt-10 mb-10'>
        <h2>Perry Theobald Jr</h2>
        <div className='mt-5'>
        <p><a className='border-dotted border-b-2 ' href='mailto:perrytjr@gmail.com'>Perrytjr@gmail.com</a> </p>
        </div>
      </header>
    </section>

    <section className=''>
      <h2>About</h2>
      <p className='mt-5'> Hi, I&apos;m Perry. I like building things.
      I am a great listener and like to analyze the world through a different
        lense then most. I graduated from <a className='underline' href="https://stockton.edu">Stockton University</a> with
        a BA of Psychology and few credits shy of a second bachelors degree in Teacher Education. Out of college I started waiting tables and eventually landed a management position with {''}
        <a className='underline' href="https://www.karlstrauss.com/">Karl Strauss Brewing Company</a> {" "}in sunny San Diego.
        Recently, I completed a Full-Stack-Web-Development program at <a className='underline' href='https://ucsd.edu/'>UCSD!</a> {''}
        I am officialy onto my next adventure!
      </p>
      <div className='mt-5'>
          <Link href='/about' className='button'>About Me</Link>
          </div>
      
    </section>

    <footer className='mt-10'>
      <ContactIcons />
    </footer>
    <br></br>
     <Link href='/'><a>Perry Theobald Jr</a></Link>
  </section>
);

export default SideBar;
