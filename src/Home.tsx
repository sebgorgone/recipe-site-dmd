import HeaderNav from "./components/HeaderNav";
import { breads } from "./data";
import type { bread } from "./data";


function Home() {

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


  console.log(breads)

  

  function breadDisplay () {
    const displayBreadLength = 5;

    const indecies: Set<number> = new Set();

    while (indecies.size < displayBreadLength) {
      indecies.add(Math.floor(Math.random() * breads.length))
    };

    const iArray = Array.from(indecies)

    console.log(iArray.map(i => breads[i]))
    
    return (
      iArray.map((index, i) => (
        <div 
          key={i}
          style={{
            margin: "1em",
            width: "90%",
            background: pal[5],
            boxShadow: boxShad,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: ".5em"
          }}
        >

         <div
          style={{
            display: "flex",
            alignItems: "baseline",
            width: "90%"
          }}
         >

          <img
          src={`${breads[index].imgUrl}`}
          alt={`${breads[index].name} icon`}
          style={{
            width: "20%",
            aspectRatio: "1 / 1"
          }}
          />

          <h3 style={{color: "white", marginLeft: "1em", fontSize: "1.5em"}}>{breads[index].name}</h3>

         </div>

        <p style={{color: 'white'}}>{breads[index].description}</p>


        </div>
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
          height: "calc(100vh - 86px)",
          background: pal[0],

        }}
      >

        <article
          style={{
            display: "flex",
            width: "50%",
            justifyContent: "flex-start",
            flexDirection: "column"
          }}
        >

          <div
            style={{
              width: "100%",
              marginTop: "1.5em",
              padding: "1em",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >

            <img
              style={{
                width: "50%",
                minWidth: "256px",
                aspectRatio: "1 / 1",
                padding: "1.5em",
                boxShadow: boxShad
              }}
              src='img/loafs.jpg'
              alt='your browser doesnt support this picture of bread loafs'
            />

            <p
              style={{ width: "50%", padding: ".5em", textAlign: "center", fontSize: "24px", minWidth: "256px" }}
            >
              Lets get this bread is your one stop shop to all things italian bread! With classics such as Ciabatta, Focaccia, Pane Toscano, and Pane Pugliese; Your bread journey here will be endless <span style={{ fontFamily: "judson-italic" }}>lets get this bread</span>
            </p>

          </div>


          <div
            style={{
              width: "100%",
              marginTop: "1.5em",
              padding: "1em",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >

            <p
              style={{ width: "50%", padding: ".5em", textAlign: "center", fontSize: "24px", minWidth: "256px" }}
            >
              Stick around and discover your favorite baked goods from all across the great country of italy
            </p>
            
            <img
              style={{
                width: "50%",
                minWidth: "256px",
                aspectRatio: "1 / 1",
                padding: "1.5em",
                boxShadow: boxShad
              }}
              src='img/focaccia.jpg'
              alt='your browser doesnt support this picture of bread loafs'
            />

          </div>


        </article>


        <section
          style={{
            display: "flex",
            width: "50%",
            background: pal[3],
            height: "fit-content",
            paddingBottom: "1.5em",
            paddingTop: 0,
            margin: "1em",
            marginTop: "48px",
            borderRadius: "16px",
            flexDirection: "column",
            alignItems: "center"
          }}
        >

          <h2 style={{color: 'white', width: "100%", textAlign: "center", background: pal[2], margin: 0, padding: ".5em", borderRadius: "16px 16px 0px 0px"}}>Some of what we got!</h2>

          {breadDisplay()}
        </section>

      </main>

    </>
  )
}

export default Home
