import Button from "./Button"
import { useState } from 'react';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  }

  return (
    
    <div className='xsm:w-full xsm:h-full md:w-full xh:w-full '>
        <header >
        <nav className='xsm:w-full xsm:h-full md:w-full xh:w-full'>
        <div className='md:relative xmd:relative xsm:w-full xsm:h-full xh:h-[70vh] md:w-full md:h-[50vh] md:border-solid border-2 bg-no-repeat bg-cover bg-[url(/images/Imagesbannerhome.png)] xh:w-[90vw] '> 
            <div className='flex justify-between'>
            <button onClick={handleMenuClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#d97706"
                className="w-[57px] h-[55px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            
            {openMenu && (
      <div className="xsm: flex xsm:absolute  xsm:left-0 xsm:w-full xsm:bg-[#d97706] xsm:rounded-lg xsm:h-screen xsm:z-10    md:absolute  md:left-8 xsm:w-[350px] md:bg-[#d97706] md:rounded-lg md:py-16 md:z-10 xsm:flex-col md:h-[100vh] ">
     <div className="md:hidden">
          <div className="xsm:flex xsm:justify-between">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>

          <div>
              <p>Jorge Orozco Silvera</p>
              <p>ing.orozco08@gmail.com</p>
          </div>
          <button onClick={handleMenuClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"        stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
      </svg>
          </button>
          </div>
    </div>
      <ul className="">
        <li><a className="xsm:  xsm:text-xl xsm:font-bold xsm:flex xsm:justify-center xsm:px-12 xsm:py-4  xsm:text-white xsm: hover:bg-[#ffffff] xsm:hover:text-black  md:text-xl md:font-bold md:flex md:px-12 md:py-4  md:text-gray-800 md:hover:bg-[#50483e]" href="#">Home</a></li>
        <li><a className="xsm:  xsm:text-xl xsm:font-bold xsm:flex xsm:justify-center xsm:px-12 xsm:py-4  xsm:text-white xsm: hover:bg-[#ffffff] xsm:hover:text-black  md:text-xl md:font-bold md:flex md:px-12 md:py-4  md:text-gray-800 md:hover:bg-[#50483e]" href="#">Comics</a></li>
        <li><a className="xsm:  xsm:text-xl xsm:font-bold xsm:flex xsm:justify-center xsm:px-12 xsm:py-4  xsm:text-white xsm: hover:bg-[#ffffff] xsm:hover:text-black  md:text-xl md:font-bold md:flex md:px-12 md:py-4  md:text-gray-800 md:hover:bg-[#50483e]" href="#">My Comics</a></li>
        <li><a className="xsm:  xsm:text-xl xsm:font-bold xsm:flex xsm:justify-center xsm:px-12 xsm:py-4  xsm:text-white xsm: hover:bg-[#ffffff] xsm:hover:text-black  md:text-xl md:font-bold md:flex md:px-12 md:py-4  md:text-gray-800 md:hover:bg-[#50483e]" href="#">Favorities</a></li>
        <li><a className="xsm:  xsm:text-xl xsm:font-bold xsm:flex xsm:justify-center xsm:px-12 xsm:py-4  xsm:text-white xsm: hover:bg-[#ffffff] xsm:hover:text-black  md:text-xl md:font-bold md:flex md:px-12 md:py-4  md:text-gray-800 md:hover:bg-[#50483e]" href="#">My Logout</a></li>
      </ul>
      </div>
    )}
<div className='flex'>
                <img className='xsm:hidden md:pr-9' src="/images/Minga.png" alt=""/>
              <img className='xsm:pr-7 md:pr-9' src="/images/雪.png" alt="" />
              </div>
            </div>
            <div className='xsm:text-center xsm:text-white xsm:my-[10rem]  md:text-white md: pl-6 md:flex flex-col md:pt-10  ' >
              <h1 className='xsm:text-white xsm:pb-2 text-5xl font-bold '>For the love of manga</h1>
              <h3 className='xsm:text-white xsm:pb-3 font-extralight'>Explore our varieties</h3>
              <h5 className='xsm:hidden md:font-normal'>#MingaLove❤</h5>
              
              <Button/>
              
            </div>
          </div>      
        </nav>
      </header>

    </div>
  )
}


// return (
//   <nav className="flex w-fill justify-between">
//     <div className="relative">
//         <button onClick={handleMenuClick}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="#F472B6"
//               className="w-[57px] h-[55px]"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//               />
//             </svg>
//           </button>
//     {showMenu && (
//       <div className="absolute top-full left-0 w-[500px] bg-pink1 rounded-md py-2 z-10">
//       <ul>
//         <li><a className="flex px-4 py-2 text-gray-800 hover:bg-pink2" href="#">Opción 1</a></li>
//         <li><a className="flex px-4 py-2 text-gray-800 hover:bg-pink2" href="#">Opción 2</a></li>
//         <li><a className="flex px-4 py-2 text-gray-800 hover:bg-pink2" href="#">Opción 3</a></li>
//       </ul>
//       </div>
//     )}
//     </div>
          
//           <a href="#">
//             <img src={Logo} className="w-[88px] h-[88px]" alt="Logo Minga" />
//           </a>
//         </nav>
// )
// }