import axios from 'axios';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import Spinner from '../utility/Spinner';

function PhotoForm() {
  const inputFileRef = useRef();
  const [images, setImages] = useState([]);
  const [uploadedImage, setUploadedImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const onFileChangeCapture = (e) => {
    /*Selected files data can be collected here.*/
    for (const file of e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImages((imgs) => [...imgs, reader.result]);
      };
      reader.onerror = () => {
        console.log(reader.error);
      };
    }
  };
  const removeFile = (item) => {
    setImages((prev) => prev.filter((value) => value !== item));
  };
  const onBtnClick = () => {
    /*Collecting node-element and performing click*/
    inputFileRef.current.click();
  };
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);
      const fileInput = Array.from(event.currentTarget.elements).find(
        ({ name }) => name === 'theFiles'
      );
      const formData = new FormData();
      for (const file of fileInput.files) {
        formData.append('theFiles', file);
      }

      const response = await axios.post(
        'http://localhost:3001/profile-upload-multiple',
        formData
        // {
        //   headers: { 'content-type': 'multipart/form-data' },
        //   onUploadProgress: (event) => {
        //     console.log(
        //       `Current progress:`,
        //       Math.round((event.loaded * 100) / event.total)
        //     );
        //   },
        // }
      );
      setUploadedImage(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="file"
        ref={inputFileRef}
        multiple
        name="theFiles"
        accept=".jpg, .png, .jpeg"
        onChangeCapture={onFileChangeCapture}
        className="hidden"
      />
      {images.length > 0 ? (
        <>
          {loading && (
            <div className="w-full h-full grid inset-0 place-items-center absolute z-20 opacity-80 bg-slate-700">
              <Spinner />
            </div>
          )}
          <div className="flex flex-wrap justify-center gap-4 font-para">
            <div className="w-36 h-36 border-dashed borderk z-1 bg-slate-50 border-indigo-400 grid place-items-center">
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
                <p className="text-xs text-gray-500 font-semibold">
                  + Add More
                </p>
              </div>
            </div>

            {images.map((item, index) => (
              <div key={index} className="w-36 h-36 border relative">
                <button
                  type="button"
                  className="absolute z-10 text-red-600 grid place-items-center right-0 hover:bg-red-600 hover:text-white cursor-pointer shadow-lg w-5 h-5 bg-white"
                  onClick={() => removeFile(item)}
                >
                  x
                </button>
                <Image
                  src={item}
                  width="144px"
                  height="144px"
                  className="object-cover opacity-70"
                  alt={item}
                />
              </div>
            ))}
            {uploadedImage.length > 0 ? (
              <div
                className="p-4 mb-4 w-full text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                role="alert"
              >
                <span className="font-medium">Files Uploaded</span>
              </div>
            ) : (
              <button
                onSubmit={handleSubmit}
                className="block w-full primary_button"
              >
                {loading ? 'loading' : 'Upload'}
              </button>
            )}
          </div>
        </>
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
              <p className="text-gray-500 ">(Upload upto 20 photos)</p>
            </div>

            <button
              onClick={onBtnClick}
              type="button"
              className="primary_button_light px-10"
            >
              Upload Photos
            </button>
          </div>
          <div className="bg-red-200 py-6 text-center">
            Your photos might get rejected
            <button
              type="button"
              className="primary_button_without_background block mx-auto mt-2 bg-red-300 hover:bg-red-400 text-white"
            >
              View Reasons
            </button>
          </div>
        </div>
      )}
    </form>
  );
}

export default PhotoForm;
