import { useState } from "react";
import HeaderNav from "./HeaderNav";
import type { bread } from "../data";

function BreadPage(props: bread) {

   const [desc, setDesc] = useState(true);
   const [ingr, setIngr] = useState(true)

   const { name, description, imgUrl, history, recipe, ingredients } = props;


   const pal =
      [
         '#E9E6FF',
         '#B0A084',
         '#73683B',
         '#583E23',
         '#374414',
         '#13262F',
      ];

   const boxShad = '0 1px 1px rgba(0, 0, 0, 0.8), 0 3px 3px rgba(0, 0, 0, 0.6), 0 6px 6px rgba(0, 0, 0, 0.4), 0 8px 8px rgba(0, 0, 0, 0.3)';

   function listDisplay () {

      if (ingr) {
         return (
            ingredients.map((item, i) => (
               <li key={i}>{item}</li>
            ))
         )
      } else return (
            recipe.map((item, i) => (
               <li key={i}>{item}</li>
            ))
         )


   }

   return (
      <>
         <HeaderNav pal={pal} boxShad={boxShad} />
         <main
            style={{
               display: "flex",
               width: "100%",
               alignItems: "stretch",
               minHeight: "calc(100vh - 86px)",
               paddingTop: "118px"
            }}
         >

            <article
               style={{
                  display: "flex",
                  width: "50%",
                  background: pal[1],
                  paddingBottom: "1.5em",
                  paddingTop: 0,
                  margin: "1em",
                  marginTop: "48px",
                  borderRadius: "16px",
                  flexDirection: "column",
                  alignItems: "center",
                  flexGrow: "1",

               }}
            >
               <h2 style={{ color: 'white', width: "100%", textAlign: "center", background: pal[2], margin: 0, padding: ".5em", borderRadius: "16px 16px 0px 0px" }}>{desc? 'Description' : 'The history of ' + name}</h2>


               <nav
                  style={{display: "flex",
                     width: "50%",
                     justifyContent: "space-around",
                     margin: "1em"
                  }}
               >
                  <button
                     style={{
                        border: "none",
                        boxShadow: boxShad,
                        fontFamily: "judson-bold",
                        padding: ".3em", 
                        background: desc ? pal[0] : pal[5],
                        color: desc ? 'black' : "white",
                        fontSize: "24px"
                     }}
                     type='button'
                     onClick={() => setDesc(true)}
                  >DESCRTIPTION</button>

                  <button
                     style={{
                        border: "none",
                        boxShadow: boxShad,
                        fontFamily: "judson-bold",
                        padding: ".3em", 
                        background: !desc ? pal[0] : pal[5],
                        color: !desc ? 'black' : "white",
                        fontSize: "24px"
                     }}
                     type='button'
                     onClick={() => setDesc(false)}
                  >HISTORY</button>
               </nav>

               <header style={{display: "flex", width: "80%", marginTop: ".5em", alignItems: "baseline"}}>

                  <img 
                     style={{
                        width: "20%",
                        aspectRatio: "1 / 1",
                        boxShadow: boxShad,
                     }}
                     src={imgUrl}
                     alt={`a photo of ${name}`}
                  />

                  <h1
                     style={{color: "white", marginLeft: "1em", fontSize: "2.2em", fontWeight: "bolder"}}
                  >{name}</h1>
               </header>

               <section>
                  <p
                     style={{fontSize: "32px", color: "white", margin: ".5em"}}
                  >{desc ? description : history}</p>
               </section>

               <a
                  style={{
                     width: "100%",
                     display: "flex",
                     color: pal[0],
                     marginLeft: "1em",
                     justifySelf: "flex-end",
                     fontFamily: "judson-italic"
                  }}
                  href='#/home'
                  // @ts-ignore
               ><ion-icon name="arrow-undo-outline"></ion-icon>back to home</a>

            </article>


            <section
               style={{
                  display: "flex",
                  width: "50%",
                  background: pal[1],
                  paddingBottom: "1.5em",
                  paddingTop: 0,
                  margin: "1em",
                  marginTop: "48px",
                  borderRadius: "16px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flexGrow: "1",

               }}
            >

               <h2 style={{ color: 'white', width: "100%", textAlign: "center", background: pal[2], margin: 0, padding: ".5em", borderRadius: "16px 16px 0px 0px" }}>{ingr ? 'Ingredients' : 'Recipe'}</h2>

               <nav
                  style={{display: "flex",
                     width: "50%",
                     justifyContent: "space-around",
                     margin: "1em",
                     alignSelf: "center"
                  }}
               >
                  <button
                     style={{
                        border: "none",
                        boxShadow: boxShad,
                        fontFamily: "judson-bold",
                        padding: ".3em", 
                        background: ingr ? pal[0] : pal[5],
                        color: ingr ? 'black' : "white",
                        fontSize: "24px"
                     }}
                     type='button'
                     onClick={() => setIngr(true)}
                  >INGREDIENTS</button>

                  <button
                     style={{
                        border: "none",
                        boxShadow: boxShad,
                        fontFamily: "judson-bold",
                        padding: ".3em", 
                        background: !ingr ? pal[0] : pal[5],
                        color: !ingr ? 'black' : "white",
                        fontSize: "24px"
                     }}
                     type='button'
                     onClick={() => setIngr(false)}
                  >RECIPE</button>
               </nav>

               {ingr ? 
               <ul
                  style={{display: "flex", fontFamily: "joan", color: "white", fontSize: "32px", flexDirection: "column", gap: "8px"}}
               >{listDisplay()}</ul> : 
               <ol
                  style={{display: "flex", fontFamily: "joan", color: "white", fontSize: "32px", flexDirection: "column", gap: "8px"}}
               >{listDisplay()}</ol>}
            </section>

         </main>
      </>
   )
}

export default BreadPage