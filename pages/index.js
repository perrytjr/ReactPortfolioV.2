import Head from 'next/head'
import Link from 'next/link';


export default function Home() {
  return (

    <div >

      <Head>

        <title>My Portfolio</title>
      </Head>

      <article className=''>
        <header>
          <div className=''>
            <h2 ><Link href='/'>About this site</Link></h2>
            <p>
              A beautiful, responsive, statically-generated,
              next.js application written with modern Javascript.
            </p>
          </div>
        </header>
        <p> Welcome to my website. Please feel free to read more <Link href="/about"><a>about me</a></Link>,
          or you can check out my {' '}
          <Link href='/projects'><a className='underline'>projects</a></Link> {''}
          view <Link href="/skills"><a className='underline'>skills</a></Link>,
          or <Link href="/contact"><a className='underline'>contact</a></Link> me.
        </p>
        <p> Source available <a className='underline' href="https://github.com/perrytjr/ReactPortfolioV.2">here</a>.</p>
      </article>



    </div>
  )
}






