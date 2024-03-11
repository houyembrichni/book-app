import { useEffect, useState } from "react";


function Slider() {
  const images = [
    "https://www.wattpad.com/wp-web-assets/images/landing/carousel/white-stag.png",
    "https://www.wattpad.com/wp-web-assets/images/landing/carousel/walter-boys.png",
    "https://www.wattpad.com/wp-web-assets/images/landing/carousel/black-eye.png",
    "https://www.wattpad.com/wp-web-assets/images/landing/carousel/feather.png",
    "https://www.wattpad.com/wp-web-assets/images/landing/carousel/chasing-red.png",
  ];
  const firstindex = 0;
  const lasindex = images.length - 1;

  const [carrent, setCarrent] = useState(firstindex);

  const styleSliderContainer = {
    position: "relative",
    width: "70vw",
    height: "70vh",
    // borderRadius: "10px",
    background: "white",
    overflow: "hidden",
    margin: " 40px auto",
 
  };

const containerstyle={
  maxWidth:"35vw"
}

  const image = {
    position: "relative",
    maxWidth: "35vw",

    height: "70vh",
  };
  const stylediv = {
    position: "relative",
    width: "70vw",
    display: "flex",
    height: "70vh",
  };
  const styleSlider = {
    position: "relative",
    display: "flex",
    height: "70vh",
    minWidth:'350vw',
    // borderRadius: "10px",
    background: "",
    transform: `translateX(${carrent * -70}vw)`,
    transition: "all 0.5s ease",
    padding:"0 0 0 15px",
  };

  function increase(e) {
    if (carrent == lasindex) {
      setCarrent(0);
    } else {
      setCarrent(carrent + 1);
    }
  }

  function decrease(e) {
    if (carrent == firstindex) {
      setCarrent(lasindex);
    } else {
      setCarrent(carrent - 1);
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      increase();
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [carrent, increase]);

  return (
    <>
      <div className="-container" style={styleSliderContainer}>
        <div className="sliderslider" style={styleSlider}>
          <div style={stylediv}>
            <img style={image} src={images[0]} alt="" />
            <div style={containerstyle}>
              {" "}
              <h2>
                Working with Wattpad Studios is like a dream. Not only do they
                care about your success, but also staying true to your vision.
              </h2>{" "}
              <h6 style={{ marginLeft: 300, color: "gray" }}>
                KARA BARBIERI (@PANDEAN)
              </h6>
              <p style={{ color: "gray", width: " 500px" }}>
                Kara Barbieri is a twenty-two year old author with a love for
                the weird and mystic. Her debut novel, WHITE STAG, will be
                published by Wednesday Books/Macmillan in January 2019.
              </p>
            </div>
          </div>
          <div style={stylediv}>
            <img src={images[1]} style={image} alt="" />
            <div style={containerstyle}>
              {" "}
              <h2>
                When I joined Wattpad, I gained a second family who were as
                passionate about reading and writing as I am.
              </h2>{" "}
              <h6 style={{ marginLeft: 300, color: "gray" }}>
                ALI NOVAK (@FALLZSWIMMER){" "}
              </h6>
              <p style={{ color: "gray", width: " 500px" }}>
                Ali Novak is a Wisconsin native and a graduate of the University
                of Wisconsin-Madison's creative writing program. She started
                writing her debut novel My Life with the Walter Boys when she
                was only fifteen. Since then, her work has received more than
                150 million hits online and My Life with the Walter Boys has
                been optioned for television by Komixx Entertainment and Sony
                Pictures Television.
              </p>{" "}
            </div>
          </div>
          <div style={stylediv}>
            <img src={images[2]} style={image} alt="" />
            <div>
              {" "}
              <h2>
                Being a Wattpad Star is the foundation for everything I do as a
                writer, from the behind the scenes wrangling to the big,
                game-changing projects.
              </h2>
              <h6 style={{ marginLeft: 300, color: "gray" }}>
                BEN SOBIECK (@BENSOBIECK)
              </h6>
              <p style={{ color: "gray", width: " 500px" }}>
                Benjamin Sobieck is a Wattpad Star and editor of “The Writer’s
                Guide to Wattpad,” published in August 2018 by Writer’s Digest
                Books and featuring contributions by 23 Wattpad Stars,
                ambassadors, and staff. His stories on Wattpad, such as “When
                the Black-Eyed Children Knock,” have drawn more than 1.5 million
                reads.
              </p>
            </div>
          </div>
          <div style={stylediv}>
            <img src={images[3]} style={image} alt="" />
            <div>
              {" "}
              <h2>
                Having been active on Wattpad for several years, I knew it would
                be the perfect platform for a thriller with lots of cliffhangers
                for readers to discuss. Teen horror is my passion, so I can’t
                wait to be able to share Light as a Feather with other horror
                aficionados on Hulu.
              </h2>{" "}
              <h6 style={{ marginLeft: 300, color: "gray" }}>
                ZOE AARSEN (@ZAARSENIST)
              </h6>
              <p style={{ color: "gray", width: " 500px" }}>
                Zoe Aarsen is a graphic designer and copywriter. Her first
                paranormal YA novel, Light as a Feather, Stiff as a Board, is
                being published by Simon &amp; Schuster and turned into a
                television series on Hulu.
              </p>{" "}
            </div>
          </div>
          <div style={stylediv}>
            <img src={images[4]} style={image} alt="" />
            <div>
              {" "}
              <h2>
                The Wattpad Stars Program gave me opportunities I never thought
                possible. It connected me to a world that I had only imagined. I
                don’t know how else to say it. It changed my life!
              </h2>{" "}
              <h6 style={{ marginLeft: 300, color: "gray" }}>
                ISABELLE RONIN (@ISABELLERONIN)
              </h6>
              <p style={{ color: "gray", width: " 500px" }}>
                Chasing Red was one of 2016’s most-read stories on Wattpad --
                and that was just the beginning for this Winnipeg-Manitoba-based
                writer. In a single year, her explosive hit has racked up over
                127 million reads on Wattpad. Newly edited and expanded, the
                book was split into two and hit bookstore shelves in 2017.
              </p>{" "}
            </div>
          </div>

          {/* {images.map((img)=>{
        <img  src={img}/>
    })} */}
        </div>
        <div
          className="arrow"
          style={{
            fontSize: "3rem",
            color: "whitesmoke",
            position: "absolute",
            left: "50px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
          onClick={decrease}
        ></div>
        <div
          className="arrow"
          style={{
            fontSize: "3rem",
            color: "white",
            position: "absolute",
            right: "50px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
          onClick={increase}
        >
          <img
            src="https://www.wattpad.com/wp-web-assets/images/landing/carousel/next-btn.svg"
            alt=""
            srcset=""
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "#00B2B2",
            zIndex: "999",
          }}
        >
          {images.map((e, index) => (
            <div
              key={index}
              style={{ fontSize: "5rem", cursor: "pointer" }}
              onClick={() => setCarrent(index)}
            >
              .
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Slider;
