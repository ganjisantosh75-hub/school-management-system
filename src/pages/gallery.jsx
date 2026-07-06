  import GalleryBanner from "../component/gallery/GalleryBanner";
  import GalleryGrid from "../component/gallery/GalleryGrid";
  import GalleryCTA from "../component/gallery/GalleryCTA";

  function Gallery() {
    return (
      <main>
        <GalleryBanner />
          <GalleryGrid />
          <GalleryCTA />
      </main>
    );
  }

  export default Gallery;