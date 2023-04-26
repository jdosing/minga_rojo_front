import { useState, useEffect } from "react";   // esto es un hook
import axios from "axios";
import apiUrl from "../../api";

// se recomienda que los hook en las primeras lineas de componente
export default function Main() {
  useEffect(
    ()=>{axios(apiUrl+'categories').then(res=>setCategories(res.data.categories)).catch(err=>console.log(err))},
    []
  )
    let [categories, setCategories]= useState([])
    console.log(categories);

  let [counter, setCounter] = useState(0)
  console.log(counter);

  let sumar = ()=>{   
    console.log(counter);
    setCounter(counter+1) ;
    if (counter===categories.length-1){
      setCounter(0)
    }
  }
  let restar = ()=>{    
    console.log(counter);
    setCounter(counter-1) ;
    if (counter === 0){
      setCounter(categories.length-1)
    }
  }

  let currentColor = categories[counter]?.color
  return (
    <>

    
    <main className='xsm:hidden md:h-96 flex justify-center items-center border-solid border-2 max-w-full-2xl xh:flex xh:justify-center xh:items-center xh:border-solid xh:border-2 xh:max-w-full-2xl '>        
          <div style={{backgroundColor:categories[counter]?.color}} className={`justify-center flex  h-[85%] w-[95%] md:rounded-lg xh:rounded-lg`}>
            <div className="absolute w-[92%] flex content-center my-28 justify-between " >

              <img onClick={restar}  src="/images/flechaderecha.png" alt="" />
              <img onClick={sumar} src="/images/flechaizquierda.png" alt="/" />
             
            </div>
            <div className='flex h-[50%] w-[50%] ml-10'>
                <div className='h-[200%] w-[160%]'>
                    <img className='md:h-[110%] md:w-[95%] xh:w-[80%]  -my-5' src={categories[counter]?.character_photo} alt={categories[counter]?.name} />
                </div>
                <div className='h-[140%] w-[140%] ml-10 -my-5'>
                    <img  className='md:h-[150%] md:w-[120%] xh:w-[80%] xh:h-[85%]' src={categories[counter]?.cover_photo} alt={categories[counter]?.name} />
                </div>
            </div>
            <div className='h-[60%] w-[45%] mx-10 my-10'>
              <h3 className='font-bold text-l'>
              {categories[counter]?.name}
              </h3>
              <p className='text-l h-[90%] w-[80%] '>
              {categories[counter]?.description}
              </p>
            </div>
          </div>
      </main>
        {/* <span>CATEGORY:{categories[counter]?.name} </span> */}
      </>
    
  )
}
