

export default function Footer() {
return (
    <div className='xsm:w-full md:w-full xh:w-full '>
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
      </div>
  )
}
