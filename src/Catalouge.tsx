import HeaderNav from "./components/HeaderNav";
import { breads } from "./data";
import BreadCard from "./components/breadCard";

function Catalouge() {

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

  function cardDisplay() {
   return breads.map((item, i) => (
      <BreadCard key={i} pal={pal} boxShad={boxShad} item={item} />
   ))
  }


   return(
   <>
      <HeaderNav pal={pal} boxShad={boxShad} />

      <main
         style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            width: "100%",
            padding: "32px",
            paddingTop: "100px",
            gap: "32px"
         }}
      >

         {cardDisplay()}

      </main>


   </>
   );
}

export default Catalouge;