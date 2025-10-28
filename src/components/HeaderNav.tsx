import { useState, useEffect, useRef } from "react";
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

   const inputRef = useRef<HTMLInputElement | null>(null);
   const searchDisplayRef = useRef<HTMLDivElement | null>(null);

   const navButton = {
      background: "none",
      border: "none",
      color: pal[1]
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

         return bread.recipe.some(prev => normalize(prev).includes(normalizedQuery));
      });

      setSearchResults(results);
   }, [wildCard]);


   useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
         if (
            inputRef.current &&
            !inputRef.current.contains(event.target as Node) &&
            searchDisplayRef.current &&
            !searchDisplayRef.current.contains(event.target as Node)
         ) {
            setWildCard('');
         }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, []);

   function renderSearchDisplay() {
      const limit = 6;

      if (!searchResults || searchResults.length === 0) return null;

      const display = [];

      for (let i = 0; i < Math.min(limit, searchResults.length); i++) {
         display.push({
            imgUrl: searchResults[i].imgUrl,
            name: searchResults[i].name,
            description: searchResults[i].description,
         });
      }

      return (
         <div
            ref={searchDisplayRef}
            style={{
               position: "fixed",
               display: "flex",
               flexDirection: "column",
               width: "382px",
               gap: "10px",
               marginTop: "86px",
               background: pal[5],
               justifyContent: "flex-end",
               right: "0px",
               alignItems: "center",
               boxShadow: boxShad,
               zIndex: 6,
               paddingBottom: "8px"

            }}

         >
            {display.map((item, i) => (
               <button
                  key={i}
                  style={{
                     display: "flex",
                     flexDirection: "column",
                     width: "362px",
                     background: pal[0],
                     padding: "4px",
                     margin: "4px",
                     borderRadius: '4px',
                     border: 'none',
                  }}
                  type='button'
                  //@ts-ignore
                  onClick={() => { nav(`/breads/${item.imgUrl.split('/').pop().split('.')[0]}`); setWildCard('') }}
               >
                  <div
                     style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-start",
                        alignItems: "flex-end",
                     }}
                  >
                     <img
                        style={{
                           width: "32px",
                           aspectRatio: "1 / 1",
                           boxShadow: boxShad,
                           padding: '4px',
                           margin: "4px",
                           marginRight: "16px"
                        }}
                        src={item.imgUrl}
                        alt={`a photo of ${item.name}`}
                     />

                     <p style={{ color: "balck", fontSize: "16px", marginLeft: "8px" }}>{item.name}</p>


                  </div>
               </button>
            ))}
         </div>
      );
   }





   return (
      <>
         <div
            style={{
               position: "fixed",
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
                  width: navBar ? "194px" : "32px",
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
                     padding: "16px",
                     paddingTop: "0px",
                     paddingBottom: "18px",
                     color: pal[4],
                     width: "8px",
                     WebkitTextStroke: `1px ${pal[1]}`
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

               <h1 style={{ color: "white", fontSize: window.innerWidth < 1080 ? "1em" : "2.4em", alignItems: "center", flexShrink: "1" }}>Lets Get This Bread</h1>

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
                     ref={inputRef}
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


         {renderSearchDisplay()}


      </>
   )
}

export default HeaderNav
