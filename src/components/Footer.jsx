

export default function Footer() {
return (
    <div className='xsm:w-full xsm:h-full md:w-full xh:w-full  '>
    <footer className=' max-w-full-2xl xsm:w-fill'>
        <div className='max-w-full-2xl '>
            <img className='xsm:hidden w-[100%]' src="/images/imgfooter.png" alt="" />
        </div>
        <div className='md:flex md:justify-around xsm:w-full xsm:bg-no-repeat xsm:bg-center xsm:bg-[url(/images/imgfooter.png)]'>
            <div className='xsm:hidden '>
                <a className='mr-2' href="">Home</a>
                <a className='ml-2' href="">Mangas</a>
            </div>
        <div className='md:h-[10%] md:flex xsm:flex xsm:justify-center xsm:mb-2 xsm: xsm:bg-[#262320b9]'>
            <img src="/images/Minga.png" alt="" />
            <img src="/images/雪.png" alt="" />
        </div>
        <div className="">
            <div className='md:flex md:justify-between md:p-2 xsm:flex xsm:justify-between xsm:mb-2 xsm:p-2 xsm:bg-[#d97706b9] '>
                <img src="/images/facebook-black.png" alt="" />
                <img src="/images/twitter-black.png" alt="" />
                <img src="/images/vimeo-black.png" alt="" />
                <img src="/images/youtube-black.png" alt="" />
            </div>
        <div className='xsm:flex xsm:justify-center xsm:mb-2'>
                <img src="/images/donate.png" alt="" />
        </div>
        </div>
        </div>
        <div className='m-10 border-2 border-grey-400 xsm:hidden'>
        
        </div>
      </footer>
      </div>
  )
}
