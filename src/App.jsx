import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import apiUrl from '../api'

function App() {
  const [count, setCount] = useState(0)
  console.log(apiUrl)
  console.log(process.env.NODE_ENV);
  // text-white pl-16 pt-24 
  return (
    
    <>

    <div className='xsm:w-full md:w-full xh:w-full '>
      <header >
        <nav className='xsm:w-[100vw] md:w-full xh:w-full'>
        <div className='xsm:w-[100vw] xsm:h-[100vh] xh:h-[70vh] md:w-full md:h-[50vh] md:border-solid border-2 bg-no-repeat bg-cover bg-[url(/images/Imagesbannerhome.png)] xh:w-[90vw] '> 

            <div className='flex justify-between mt-4'>
              <img className='pl-12' src="/images/Menu.png" alt="" />
              <div className='flex'>
                <img className='xsm:hidden md:pr-9' src="/images/Minga.png" alt=""/>
              <img className='xsm:pr-7 md:pr-9' src="/images/雪.png" alt="" />
              </div>
            </div>
            <div className='xsm:text-center xsm:text-white xsm:my-[10rem]  md:text-white md: pl-10 md:flex flex-col md:pt-10  ' >
              <h1 className='xsm:text-white xsm:pb-2 text-5xl font-bold '>For the love of manga</h1>
              <h3 className='xsm:text-white xsm:pb-3 font-extralight'>Explore our varieties</h3>
              <h5 className='xsm:hidden md:font-normal'>#MingaLove❤</h5>
              <div className='xsm:flex justify-center'>
                <img className='xsm:w-[40vw] xsm: md:w-[20vw]' src="images/botonmovil.png" alt="" />
              </div>
              
            </div>
          </div>      
        </nav>
      </header>
      {/* <main className='xsm:w-[100vw] md:w-[100vw] '> */}
      <main className='xsm:hidden md:h-96 flex justify-center items-center border-solid border-2 max-w-full-2xl xh:flex xh:justify-center xh:items-center xh:border-solid xh:border-2 xh:max-w-full-2xl '>        
          <div className='justify-center flex bg-gradient-to-r rounded-md from-orange-400 to-orange-600 h-[80%] w-[90%]'>
            <div className='absolute w-[88%] flex content-center my-28 justify-between ' >
              <img src="/images/flechaderecha.png" alt="/" />
              <img src="/images/flechaizquierda.png" alt="" />
            </div>
            <div className='flex h-[50%] w-[50%] ml-10'>
                <div className='h-[200%] w-[160%]'>
                    <img className='md:h-[110%] md:w-[100%] xh:w-[80%]  -my-5' src="/images/imgmain1.png" alt="" />
                </div>
                <div className='h-[140%] w-[135%] ml-10 -my-5'>
                    <img  className='md:h-[150%] md:w-[110%] xh:w-[80%]' src="/images/imgmain2.png" alt="" />
                </div>
            </div>
            <div className='h-[60%] w-[55%] mx-10 my-10'>
              <h3 className='font-bold text-l'>
              Shonen
              </h3>
              <p className='text-l h-[90%] w-[80%] '>
              Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.
              </p>
            </div>
          </div>
      </main>
      {/* </main> */}
      <footer className='xsm:hidden max-w-full-2xl'>
        <div className='max-w-full-2xl'>
          <img className='w-[100%]' src="/images/imgfooter.png" alt="" />
        </div>
        <div className='flex justify-around'>
          <div className=''>
            <a className='mr-2' href="">Home</a>
            <a className='ml-2' href="">Mangas</a>
          </div>
          <div className='h-[10%] flex'>
            <img src="/images/Minga.png" alt="" />
            <img src="/images/雪.png" alt="" />
          </div>
          <div>
            <div className='flex justify-between'>
              <img src="/images/facebook-black.png" alt="" />
              <img src="/images/twitter-black.png" alt="" />
              <img src="/images/vimeo-black.png" alt="" />
              <img src="/images/youtube-black.png" alt="" />
            </div>
            <div className=''>
              <img src="/images/donate.png" alt="" />
            </div>
          </div>
        </div>
        <div className='m-10 border-2 border-grey-400'>
        
        </div>
      </footer>
    </div>.
    
    </>
  )
}











export default App
{/* <img className='vg-cover' src="src/assets/images/Imagesbannerhome.png" alt="" /> */}