import Button from "./Button"

export default function Navbar() {
  return (
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
              <Button/>
              
            </div>
          </div>      
        </nav>
      </header>

    </div>
  )
}
