

// export default function Carousel() {
//     useEffect(
//         ()=>{axios(apiUrl+'categories').then(res=>console.log(res)).catch(err=>console.log(err))},
//         []   //array de dependencia vacia vacio ya que necesitamos fetchar una unica vez
//         )
//     let [counter, setCounter]= useState(0)
//     let sumar = ()=> {
      
//         setCounter(counter+1);
//         if (counter===100){
//             setCounter(0)
//         }
//     }
//     let restar = ()=>{
   
//         setCounter(contador-1)
//         if (counter===0){
//             setCounter(100)
//         }
//     }
//     //el hook puede ir aca pero se recomienda en las primeras linas
//   return (
//     <>
//         <div>
//         <div className='absolute w-[88%] flex content-center my-28 justify-between ' >
           
            

//             </div>
//         </div>
//         <span>contador:{contador}</span>
//     </>
    
//   )
// }

// onClick={sumar}
// onClick={restar}