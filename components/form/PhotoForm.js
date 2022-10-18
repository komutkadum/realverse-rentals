import Image from 'next/image';
import React, { useRef, useState } from 'react';

function PhotoForm() {
  const inputFileRef = useRef();
  const [images, setImages] = useState([]);
  const [present, setPresent] = useState(false);
  const onFileChangeCapture = (e) => {
    /*Selected files data can be collected here.*/
    console.log(e.target.files);
    setPresent(true);
  };
  const onBtnClick = () => {
    /*Collecting node-element and performing click*/
    inputFileRef.current.click();
  };

  return (
    <>
      <input
        type="file"
        ref={inputFileRef}
        multiple
        onChangeCapture={onFileChangeCapture}
        className="hidden"
      />
      {present ? (
        <div className="flex flex-wrap justify-center gap-4 font-para">
          <div className="w-36 h-36 border-dashed border bg-slate-50 border-indigo-400 grid place-items-center">
            {/* uploading container */}
            <div className="grid place-items-center" onClick={onBtnClick}>
              <div className="w-14 h-14 grid place-items-center bg-blue-100 rounded-full">
                <Image
                  src="/icons/photo-gallery.png"
                  height={30}
                  width={30}
                  alt="photo gallery uploaded"
                />
              </div>
              <p className="text-xs text-gray-500 font-semibold">+ Add More</p>
            </div>
          </div>
          <div className="w-36 h-36 border"></div>
          <div className="w-36 h-36 border"></div>
        </div>
      ) : (
        <div className="flex justify-center font-para flex-col border-2 bg-slate-50 border-indigo-400 border-dashed  md:mx-20">
          <div className="text-center py-14">
            <Image
              src="/icons/photo-gallery.png"
              height={64}
              width={64}
              alt="photo icon"
            />
            <div className="my-5 leading-6 tracking-wide">
              <p className="font-semibold font-header">+Add photos</p>
              <p className="text-gray-500 ">(max limit 3MB per image)</p>
            </div>

            <button onClick={onBtnClick} className="primary_button_light px-10">
              Upload Photos
            </button>
          </div>
          <div className="bg-red-200 py-6 text-center">
            Your photos might get rejected
            <button className="primary_button_without_background block mx-auto mt-2 bg-red-300 hover:bg-red-400 text-white">
              View Reasons
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default PhotoForm;
