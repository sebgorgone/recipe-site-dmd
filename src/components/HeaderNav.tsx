import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { breads } from "../data";
import type { bread } from "../data";

type props = {
   pal: string[],
   boxShad: string
}



function HeaderNav(props: props) {

   const nav = useNavigate()

   const { pal, boxShad } = props;

   const [navBar, setNavBar] = useState<boolean>(false);

   const [wildCard, setWildCard] = useState<string>('');

   const [searchResults, setSearchResults] = useState<bread[] | []>([]);




   const navButton = {
      background: "none",
      border: "none",
      color: pal[2]
   }

   useEffect(() => {
      if (!wildCard.trim()) {
         setSearchResults([]);
         return;
      }

      const normalize = (str: string) => str.toLowerCase().replace(/\s+/g, '');
      const normalizedQuery = normalize(wildCard);

      const results = breads.filter((bread) => {
         const name = normalize(bread.name);
         const description = normalize(bread.description);

         if (name.includes(normalizedQuery) || description.includes(normalizedQuery)) return true;

         return bread.recipe.some(step => normalize(step).includes(normalizedQuery));
      });

      setSearchResults(results);
      console.log(results)
   }, [wildCard]);



   return (
      <>
         <div
            style={{
               display: "flex",
               width: "100%",
               height: "86px",
               backgroundColor: pal[5],
               alignItems: "center",
               zIndex: 5,
            }}
         >


            <nav
               style={{
                  display: "flex",
                  height: "70%",
                  backgroundColor: pal[3],
                  width: navBar ? "194px" : "16px",
                  borderRadius: "0px 8px 8px 0px",
                  flexDirection: "row-reverse",
                  transition: "350ms",
                  overflow: "hidden",
                  boxShadow: boxShad
               }}
            >

               <button
                  style={{
                     fontSize: "32px",
                     lineHeight: "12px",
                     fontFamily: "joan",
                     background: pal[4],
                     border: "none",
                     paddingBottom: "18px",
                     color: pal[2],
                     width: "16px",

                  }}
                  type='button'
                  onClick={() => setNavBar(prev => !prev)}
               >
                  {'. . .'}
               </button>


               <div
                  style={{
                     display: "flex",
                     flexDirection: "row-reverse",
                     justifyContent: "space-between",
                     flex: "1",
                     marginLeft: "8px",
                     marginRight: "8px",
                     height: "100%",
                     alignItems: "center"
                  }}
               >


                  <button
                     style={navButton}
                     type='button'
                     onClick={() => console.log('nav to recipe catalouge')}
                  >
                     {/* @ts-ignore */}
                     <ion-icon
                        name="book-outline"
                        style={{
                           fontSize: "32px",
                           marginTop: "8px"
                        }}
                     >
                        {/* @ts-ignore */}
                     </ion-icon>
                  </button>


                  <button
                     style={navButton}
                     type='button'
                     onClick={() => console.log('nav to about')}
                  >
                     {/* @ts-ignore */}
                     <ion-icon
                        name="help-outline"
                        style={{
                           fontSize: "32px",
                           marginTop: "8px"
                        }}
                     >
                        {/* @ts-ignore */}
                     </ion-icon>
                  </button>


                  <button
                     style={navButton}
                     type='button'
                     onClick={() => nav('/#/home')}
                  >
                     {/* @ts-ignore */}
                     <ion-icon
                        name="home-outline"
                        style={{
                           fontSize: "32px",
                           marginTop: "8px"
                        }}
                     >
                        {/* @ts-ignore */}
                     </ion-icon>
                  </button>



               </div>





            </nav>


            <div
               style={{
                  flex: "1",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginLeft: "16px",
                  marginRight: "16px",
               }}
            >

               <h1 style={{ color: "white", fontSize: "2.4em", alignItems: "center" }}>Lets Get This Bread</h1>

               <div
                  style={{
                     display: "flex",
                     flex: "1",
                     maxWidth: "320px"
                  }}
               >
                  {/* @ts-ignore */}
                  <ion-icon
                     name="search-outline"
                     style={{
                        fontSize: "32px",
                        marginRight: "8px",
                        color: pal[0]
                     }}
                  >
                     {/* @ts-ignore */}
                  </ion-icon>
                  <input
                     type='text'
                     maxLength={50}
                     placeholder='Search . . .'
                     value={wildCard}
                     onChange={e => setWildCard(e.target.value)}
                     style={{
                        flex: "1",
                        fontFamily: "judson-italic",
                        fontSize: "16px",
                        padding: "4px",
                        boxShadow: boxShad,
                        border: "2px solid black",
                        background: pal[0]
                     }}
                  />
               </div>

            </div>


         </div>
      </>
   )
}

export default HeaderNav
