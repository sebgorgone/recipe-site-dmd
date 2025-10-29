import { useNavigate } from "react-router-dom";
import type { bread } from "../data";
type props = {
   pal: string[],
   boxShad: string
   item: bread
}



function BreadCard(props: props) {

   const { boxShad, pal, item } = props;

   const nav = useNavigate()
   return (
      <>
         <button
            style={{
               width: "256px",
               height: "256px",
               background: pal[5],
               border: 'none',
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               boxShadow: boxShad
            }}
            type='button'
            //@ts-ignore
            onClick={() => nav(`/breads/${item.imgUrl.split('/').pop().split('.')[0]}`)}
         >

            <div
               style={{
                  width: "90%",
                  display: "flex",
                  alignItems: "flex-end",
                  marginTop: "16px"
               }}
            >

               <img
                  alt={`a photo of ${item.name}`}
                  src={item.imgUrl}
                  style={{
                     width: "64px",
                     height: "64px",
                     boxShadow: boxShad
                  }}
               />

               <h2
                  style={{
                     flex: 1,
                     textAlign: "center",
                     color: "white",
                     fontSize: "20px"

                  }}
               >{item.name}</h2>



            </div>
            <div
               style={{
                  width: "90%",
                  padding: "8px",
                  justifyContent: "center"
               }}
            >

               <p
                  style={{
                     color: "white",
                     textAlign: "center",
                     fontSize: "18px"
                  }}
               >
                  {item.description}
               </p>

            </div>



         </button>
      </>
   )
}

export default BreadCard