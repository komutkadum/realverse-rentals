import axios from 'axios';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

function PhotoForm() {
  const inputFileRef = useRef();
  const [images, setImages] = useState([]);
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
    event.preventDefault();
    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === 'theFiles'
    );

    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append('theFiles', file);
    }

    formData.append('upload_preset', 'my-uploads');
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
      onUploadProgress: (event) => {
        console.log(
          `Current progress:`,
          Math.round((event.loaded * 100) / event.total)
        );
      },
    };

    const response = await axios.post('/api/image_upload', formData, config);
    // const data = await fetch(
    //   // 'https://api.cloudinary.com/v1_1/kadmon/image/upload',
    //   '/api/image_upload',
    //   {
    //     method: 'POST',
    //     body: formData,
    //   }
    // ).then((r) => r.json());
    console.log(response.data);
  };

  return (
    <form onSubmit={handleSubmit}>
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

          {images.map((item, index) => (
            <div key={index} className="w-36 h-36 border relative">
              <button
                className="absolute z-20 text-red-600 grid place-items-center right-0 hover:bg-red-600 hover:text-white cursor-pointer shadow-lg w-5 h-5 bg-white"
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
          <button
            onSubmit={handleSubmit}
            className="block w-1/2 primary_button"
          >
            Upload
          </button>
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
    </form>
  );
}

export default PhotoForm;
