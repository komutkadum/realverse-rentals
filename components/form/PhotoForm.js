import axios from 'axios';
import { ImageCompressor } from 'compressor-img';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import { dataURItoBlob } from '../../lib/dataURItoBlob';
import Spinner from '../utility/Spinner';

function PhotoForm({ uploadedImage, setUploadedImage }) {
  const inputFileRef = useRef();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const onFileChangeCapture = (e) => {
    // getting image total length
    console.log(e.target.files);
    let length = Object.keys(e.target.files).length;
    if (length < 3) {
      Swal.fire({
        title: 'Upload atleast 3 photos.',
        text: 'There should be a minimum of 3 photos to show to your clients.',
        icon: 'warning',
        confirmButtonText:
          '<i class="fa-regular fa-thumbs-up"></i> I Understood.',
        confirmButtonColor: 'green',
      });
      return;
    }
    if (length > 15) {
      Swal.fire({
        title: 'Image upload upto 15 photos',
        text: 'You can upload image upto 15 photos to make more relevant.',
        icon: 'warning',
        confirmButtonText:
          '<i class="fa-regular fa-thumbs-up"></i> I Understood.',
        confirmButtonColor: 'green',
      });
      return;
    }
    /*Selected files data can be collected here.*/
    for (const file of e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        new ImageCompressor({
          onSuccess: (response) => {
            setImages((imgs) => [...imgs, response.compressed]);
          },
          scale: 70,
          quality: 70,
          originalImage: reader.result,
        });
      };
      reader.onerror = () => {
        console.log(reader.error);
      };
    }
  };

  // index based removal
  const removeFile = (i) => {
    setImages((prev) => prev.filter((value, index) => index !== i));
  };
  const onBtnClick = () => {
    /*Collecting node-element and performing click*/
    inputFileRef.current.click();
  };
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);
      const formData = new FormData();
      let temp = images;
      for (let i = 0; i < temp.length; i++) {
        formData.append('theFiles', dataURItoBlob(temp[i]), uuidv4());
      }
      const response = await axios.post(
        'https://realverse-image-service.herokuapp.com/profile-upload-multiple',
        formData
      );
      setUploadedImage(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      Swal.fire({
        title: 'Photo Uploaded Successfull',
        icon: 'success',
      });
    }
  };

  const viewReason = () => {
    Swal.fire({
      title: '<strong>Image upload guidelines</strong>',
      width: 800,
      html:
        '<div class="py-5 grid gap-y-4 text-justify sm:px-12 md:px-16 lg:px-20">' +
        '<h1 class="font-semibold text-center">No blurred images</h1>' +
        '<p class="text-left ">Ensure that the captured image is clear and the objects in the image are clearly visible. If the image is not clear, then, do not upload it. Instead, click a new clear image and upload it.</p>' +
        '<h1 class="font-semibold text-center">No pet or human visibility in the image</h1>' +
        '<p class="text-left">The images uploaded for listings, should not have people or pets visible in the image. Exceptions, where people/pets can be visible in the image: Plot, UC listings and Building view.</p>' +
        '<h1 class="font-semibold text-center">No tilted images</h1>' +
        '<p class="text-left">Check the captured image, to ensure that it is not tilted. Do not upload images that have been captured from a low or high angle. Ensure that the room/building/subject in the image is not on a higher level on one side than the other.</p>' +
        '<h1 class="font-semibold text-center">Space covered properly</h1>' +
        '<p class="text-left">All the subjects/elements should be covered in the image frame, between the upper and lower edge. For example, a living room should show all the elements of the room and not just half the room, or only the ceiling or floor.</p>' +
        '<h1 class="font-semibold text-center">No inappropriate images or incomplete sets</h1>' +
        '<p class="text-left">Do not upload images which do not match the listing – for example, apartment images in listings for plots or vice-versa. Avoid uploading images where appliances, such as television sets are switched on in the focus area. Do not upload incomplete image sets for a listing – for example, where only the bathroom or balcony images are uploaded and other images are not given. Do not upload images of garbage, commercial images, chawl property images, etc.</p>' +
        '</div>',
      confirmButtonText:
        '<i class="fa-regular fa-thumbs-up"></i> I Understood.',
    });
  };

  const resetUpload = () => {
    setImages([]);
    setUploadedImage([]);
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
            <div className="w-full text-white h-full grid inset-0 place-items-center absolute z-20 opacity-90 bg-indigo-900">
              <div className="flex items-center">
                <Spinner /> Uploading Photos . . .
              </div>
            </div>
          )}
          <div className="flex flex-wrap justify-center gap-4 font-para">
            {uploadedImage.length === 0 && (
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
            )}

            {images.map((item, index) => (
              <div
                key={index}
                className="w-36 h-36 border relative transition duration-200"
              >
                <button
                  type="button"
                  className={`absolute z-10 text-red-600 grid place-items-center right-0 hover:bg-red-600 hover:text-white cursor-pointer shadow-lg w-5 h-5 bg-white ${
                    uploadedImage.length > 0 && 'hidden'
                  }`}
                  onClick={() => removeFile(index)}
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
                className="p-4 text-center mb-4 w-full text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800 leading-6"
                role="alert"
              >
                <span className="font-medium">
                  {uploadedImage.length} Files Uploaded!
                </span>
                <p>
                  done a mistake,&nbsp;
                  <button
                    type="button"
                    onClick={resetUpload}
                    className="px-2 py-1 rounded-md bg-red-500 text-white"
                  >
                    redo upload
                  </button>
                </p>
              </div>
            ) : (
              <button
                onSubmit={handleSubmit}
                className="block w-full primary_button"
              >
                {loading ? 'uploading...' : 'Upload Photos'}
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
              <p className="text-gray-500 ">(Upload upto 15 photos)</p>
            </div>

            <button
              onClick={onBtnClick}
              type="button"
              className="primary_button_light px-10 animate__animated animate__rubberBand"
            >
              Upload Photos
            </button>
          </div>
          <div className="bg-red-200 py-6 text-center">
            Your photos might get rejected
            <button
              type="button"
              onClick={viewReason}
              className="primary_button_without_background block mx-auto mt-2 ring-red-300 bg-red-300 hover:bg-red-400 text-white"
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
