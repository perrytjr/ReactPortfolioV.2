import Link from 'next/link';
import { useState } from 'react';

export const Navigation = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap  bg-gray-100 bg-opacity-90 p-3 '>
        <Link href='/'>
            <a className=' text-xl text-black text-opacity-80 no-underline inline-flex items-center p-2 mr-4 text-decoration:none'>
              Perry Theobald Jr
            </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-gray-300 rounded lg:hidden text-black  ml-auto hover:text-black  outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/about'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded   text-black  text-opacity-80  items-center justify-center  '>
                About
              </a>
            </Link>
            <Link href='/projects'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black  text-opacity-80 items-center justify-center '>
                Projects
              </a>
            </Link>
            <Link href='/skills'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black text-opacity-80 items-center justify-center '>
               Skills
              </a>
            </Link>
            <Link href='/contact'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black text-opacity-80  items-center justify-center '>
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
     
    
  )
}

export default Navigation
