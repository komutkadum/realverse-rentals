import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function CustomCarousel({ photos, setPhotoModal }) {
  return (
    <div
      className="h-screen w-screen inset-0 fixed overflow-hidden z-40 grid place-items-center px-2"
      style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
    >
      <span
        className="text-white text-center rounded-full text-4xl font-semibold fixed top-8 right-6 md:top-10 md:right-10 w-12 h-12 bg-red-500 hover:bg-red-600 active:bg-red-500 cursor-pointer"
        onClick={() => setPhotoModal(false)}
      >
        x
      </span>
      <div>
        <Carousel
          showArrows
          showThumbs={false}
          swipeable
          emulateTouch
          useKeyboardArrows
          dynamicHeight
          autoFocus
          className="max-w-3xl mx-auto"
        >
          <div className="">
            <img
              src="/images/startingcarousel.png"
              className="w-full h-full object-contain"
            />
          </div>
          {photos.map((item, index) => (
            <div className="aspect-w-16 aspect-h-11" key={index}>
              <img src={item} className="w-full h-full object-contain" />
            </div>
          ))}
        </Carousel>
        <button className="primary_button_without_background font-header bg-green-600 hover:bg-green-700 active:bg-green-600 text-white border-0   w-half my-2">
          Contact Owner
        </button>
      </div>
    </div>
  );
}

export default CustomCarousel;
