import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


const ImageMasonry = ({ images }) => {
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const breakpointColumnsObj = {
        default: 3, // Number of columns for desktop
        1100: 2,   // Number of columns for tablets
        700: 1,    // Number of columns for mobile
    };

    const openLightbox = (index) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    return (
        <div>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid"
                columnClassName="masonry-column"
            >
                {images.map((image, index) => (
                    <div key={index} className="masonry-item" onClick={() => openLightbox(index)}>
                        <img src={image} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </Masonry>

            {lightboxOpen && (
                <Lightbox
                    mainSrc={images[lightboxIndex]}
                    nextSrc={images[(lightboxIndex + 1) % images.length]}
                    prevSrc={images[(lightboxIndex + images.length - 1) % images.length]}
                    onCloseRequest={closeLightbox}
                    onMovePrevRequest={() => setLightboxIndex((lightboxIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % images.length)}
                />
            )}
        </div>
    );
};

export default ImageMasonry;
