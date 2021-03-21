import Head from 'next/head'
import Link from 'next/link';
import Greeting from '../components/Greeting'
import SideBar from '../components/Sidebar'

export default function Home() {
  return (

    <div >
      <Head>
        <title>My Portfolio</title>
      </Head>
<div className='grid grid-cols-2 bg-gray-200 bg-opacity-90'>

<div>
  <SideBar/>
</div>

<div>
  <Greeting/>
</div>


</div>
















    </div>



  )
}






