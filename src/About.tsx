import { useNavigate } from "react-router-dom"
import HeaderNav from "./components/HeaderNav";

function About() {

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


   return (
      <>
         <HeaderNav pal={pal} boxShad={boxShad} />
         <main
            style={{
               display: "flex",
               width: "100%",
               alignItems: "stretch",
               paddingTop: "86px"
            }}
         >
            <section
               style={{
                  display: "flex",
                  width: "50%",
                  background: pal[1],
                  paddingBottom: "1.5em",
                  margin: "1em",
                  marginTop: "48px",
                  borderRadius: "16px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  height: "fit-content",
                  color: "white",

               }}
            >

               <h2 style={{ color: 'white', width: "100%", textAlign: "center", background: pal[2], margin: 0, padding: ".5em", borderRadius: "16px 16px 0px 0px" }}>About Us</h2>

               <h1
                  style={{ width: "100%", textAlign: "center" }}
               >
                  We are 'Lets Get This Bread'
               </h1>

               <h2
                  style={{
                     width: "100%",
                     padding: "10%",
                  }}
               >
                  We are bread enthusiasts who love all
                  things bread and all things Italy. We built
                  this platform to give you access to the
                  best bread the country of Italy has to
                  offer. We want you to make these breads
                  in the comfort of your own home
                  without the hassle of paying for a pricey
                  vendor, restaurant, or otherwise.

               </h2>


               <h2
                  style={{
                     width: "100%",
                     padding: "10%",
                     margin: "0"
                  }}
               >
                  Take your time and look around at the
                  recipes we have to offer. we are happy you
                  are here!
               </h2>

            </section>

            <nav
               style={{
                  display: "flex",
                  width: "50%",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                  padding: "5vw"
               }}
            >

               <h1
                  style={{ width: "100%", textAlign: "center", marginTop: "1.75em" }}
               >
                  Connect With Us!
               </h1>

               <div
                  style={{
                     display: "flex",
                     width: "100%",
                     background: pal[5],
                     alignItems: "center",
                     color: 'white',
                     padding: "12px"
                  }}
               >

                  {/* @ts-ignore */}
                  <ion-icon style={{fontSize: "32px", paddingRight: "16px"}}name="logo-instagram"></ion-icon>

                  <a>instagram</a>
               </div>

            </nav>

         </main>
      </>
   )
}

export default About