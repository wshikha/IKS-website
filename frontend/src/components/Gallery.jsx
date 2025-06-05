import LightGallery from "lightgallery/react";
import "./Gallery.css";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgShare from "lightgallery/plugins/share";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgRotate from "lightgallery/plugins/rotate";

const images = [
  { src: "/img1.jpg", alt: "Talk on Anhijnana Sakuntalam" },
  { src: "/img2.jpg", alt: "Talk on Anhijnana Sakuntalam" },
  { src: "/img3.jpg", alt: "Talk on Anhijnana Sakuntalam" },
  { src: "/img4.jpg", alt: "Talk on Anhijnana Sakuntalam" },
  { src: "/img5.jpg", alt: "Talk on Anhijnana Sakuntalam" },
  { src: "/img6.jpg", alt: "Talk on Indian Philosophy" },
  { src: "/img7.jpg", alt: "Talk on Indian Philosophy" },
  { src: "/img8.jpg", alt: "Talk on Indian Philosophy" },
  { src: "/img9.jpg", alt: "Talk on Indian Philosophy" },
  { src: "/img10.jpg", alt: "Talk on Indian Philosophy" },
  { src: "/img11.jpeg", alt: "IKS Award Ceremony" },
  { src: "/img12.jpeg", alt: "Teaching Calculus as Ganita" },
  { src: "/img13.jpg", alt: "Teaching Calculus as Ganita" },
  { src: "/img14.jpg", alt: "Teaching Calculus as Ganita" },
  { src: "/img15.jpg", alt: "Teaching Calculus as Ganita" },
  { src: "/img16.jpg", alt: "Teaching Calculus as Ganita" },
  { src: "/img17.jpg", alt: "Teaching Calculus as Ganita" },
  { src: "/assets/img18.jpeg", alt: "Teaching Calculus as Ganita" },
  { src: "/assets/img19.JPG", alt: "Teaching Calculus as Ganita" },
  { src: "/assets/img20.jpeg", alt: "Teaching Calculus as Ganita" },
  { src: "/assets/img21.JPG", alt: "Teaching Calculus as Ganita" },
  { src: "/assets/img22.JPG", alt: "Teaching Calculus as Ganita" },
  { src: "/assets/img23.JPG", alt: "Teaching Calculus as Ganita" },
  { src: "/assets/img24.JPG", alt: "Teaching Calculus as Ganita" },
  { src: "/assets/img25.JPG", alt: "Teaching Calculus as Ganita" },
  { src: "/assets/img26.JPG", alt: "Teaching Calculus as Ganita" },
  { src: "/assets/img27.JPG", alt: "Teaching Calculus as Ganita" },
  { src: "/assets/img28.JPG", alt: "Teaching Calculus as Ganita" },
  { src: "/assets/img29.JPG", alt: "Teaching Calculus as Ganita" },
  { src: "/assets/img30.JPG", alt: "Teaching Calculus as Ganita" },
  { src: "/assets/img31.JPG", alt: "Teaching Calculus as Ganita" },
  { src: "/assets/img32.JPG", alt: "Teaching Calculus as Ganita" },
  { src: "/assets/img33.jpeg", alt: "Teaching Calculus as Ganita" },
  { src: "/assets/img34.jpeg", alt: "Teaching Calculus as Ganita" },
  { src: "/assets/img35.jpeg", alt: "Teaching Calculus as Ganita" },
  { src: "/assets/img36.jpeg", alt: "Teaching Calculus as Ganita" },
];

function Gallery() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div>
      <div className="flex flex-col items-center px-10 my-20 font-serif lg:px-14 ">
        <h2 className="my-10 text-4xl font-semibold leading-snug text-center text-black bg-gradient-to-l from-blue-300 via-slate-100 to-blue-100 md:w-full">
          Images
        </h2>
      </div>
      <div className="App">
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[
            lgThumbnail,
            lgZoom,
            lgShare,
            lgFullscreen,
            lgAutoplay,
            lgRotate,
          ]}
        >
          {images.map((image, index) => {
            return (
              <a href={image.src} key={index}>
                <img alt={image.alt} src={image.src} />
              </a>
            );
          })}
        </LightGallery>
      </div>
    </div>
  );
}
export default Gallery;
