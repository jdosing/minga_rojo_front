import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <body className='w-[100%]'>
      <header className=''>
      <nav className=' border-solid border-2 max-w-screen-2xl'>
          <div className='h-96 border-solid border-2 border-indigo-600 bg-no-repeat bg-cover bg-[url(/src/assets/images/Imagesbannerhome.png)]'> 
            <div className='flex justify-between mt-4'>
              <img className='pl-12' src="src/assets/images/Menu.png" alt="" />
              <img className='pr-9' src="src/assets/images/Logo.png" alt="" />
            </div>
            <div className='text-white pl-16 pt-24' >
              <h1 className='text-5xl font-bold'>For the love of manga</h1>
              <h3 className='font-light'>Explore our varieties</h3>
              <h5 className='font-thin'>#MingaLove❤</h5>
            </div>
          </div>      
      </nav>
    </header>
      <main className='h-96 flex justify-center items-center border-solid border-2 max-w-screen-2xl '>        
          <div className='justify-center flex bg-gradient-to-r rounded-md from-orange-400 to-orange-600 h-[70%] w-[90%]'>
            <div className='absolute w-[88%] flex content-center my-28 justify-between ' >
              <img src="/src/assets/images/flechaderecha.png" alt="/" />
              <img src="/src/assets/images/flechaizquierda.png" alt="" />
            </div>
            <div className='flex h-[50%] w-[50%] ml-10'>
                <div className='h-[200%] w-[160%]'>
                    <img className='h-[120%] w-[95%]  -my-5' src="/src/assets/images/imgmain1.png" alt="" />
                </div>
                <div className='h-h-[200%] w-[130%] ml-10 -my-5'>
                    <img  className='h-[150%] w-[100%] ' src="/src/assets/images/imgmain2.png" alt="" />
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
      <footer className='max-w-screen-2xl'>
        <div className='max-w-screen-2xl'>
          <img className='w-[100%]' src="/src/assets/images/imgfooter.png" alt="" />
        </div>
        <div className='flex justify-around'>
          <div className=''>
            <a className='mr-2' href="">Home</a>
            <a className='ml-2' href="">Mangas</a>
          </div>
          <div className='h-[10%] flex'>
            <img src="src/assets/images/Minga.png" alt="" />
            <img src="src/assets/images/雪.png" alt="" />
          </div>
          <div>
            <div className='flex justify-between'>
              <img src="src/assets/images/facebook-black.png" alt="" />
              <img src="src/assets/images/twitter-black.png" alt="" />
              <img src="src/assets/images/vimeo-black.png" alt="" />
              <img src="src/assets/images/youtube-black.png" alt="" />
            </div>
            <div>
              <img src="src/assets/images/donate.png" alt="" />
            </div>
          </div>
        </div>
        <div className='m-10 border-2 border-grey-400'>
        
        </div>
      </footer>
    </body>
    
    </>
  )
}

export default App

{/* <img className='vg-cover' src="src/assets/images/Imagesbannerhome.png" alt="" /> */}
