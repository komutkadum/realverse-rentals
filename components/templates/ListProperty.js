import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useMultistepForm } from '../../hooks/useMultistepForm';
import AmenitiesDetailForm from '../form/AmenitiesDetailForm';
import BasicDetailForm from '../form/BasicDetailForm';
import LocationDetailForm from '../form/LocationDetailForm';
import PhotoForm from '../form/PhotoForm';
import PropertyDetailForm from '../form/PropertyDetailForm';
import Spinner from '../utility/Spinner';
import TimelineStep from '../utility/TimelineStep';

function ListProperty({ INITIAL_DATA }) {
  const [data, setData] = useState(INITIAL_DATA);
  const [uploadedImage, setUploadedImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useRouter();

  const { steps, currentStepIndex, next, step, isFirstStep, isLastStep, back } =
    useMultistepForm([
      <BasicDetailForm
        key={1}
        {...data}
        updateCheckbox={updateCheckbox}
        updateFields={updateFields}
      />,
      <LocationDetailForm key={2} {...data} updateFields={updateFields} />,
      <PropertyDetailForm key={3} {...data} updateFields={updateFields} />,
      <AmenitiesDetailForm key={4} {...data} updateCheckbox={updateCheckbox} />,
      <PhotoForm
        key={5}
        {...data}
        uploadedImage={uploadedImage}
        setUploadedImage={setUploadedImage}
        updateFields={updateFields}
      />,
    ]);
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  function updateCheckbox(fields, value, id) {
    let temp = data;
    if (temp[value].indexOf(id) < 0) temp[value].push(fields);
    else temp[value] = temp[value].filter((item) => item !== id);
    setData({ ...temp });
  }
  const onSubmit = async () => {
    // e.preventDefault();
    if (!isLastStep) return next();
    // loading state
    setLoading(true);
    // submit data
    const temp = data;
    temp['photos'] = uploadedImage;
    console.log(temp);

    await axios
      .post('/api/listproperty', temp)
      .then((res) => {
        console.log(res.data);
        history.push(
          `/showproperty/${res.data.result.objectId}-${temp.area}-sqft-${temp.rooms}-bhk-${temp.propertyType}-on-rent-in-${temp.locality}-${temp.city}`
        );
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
        alert('uploaded');
      });
  };
  return (
    <>
      <main className="relative md:p-6 m-4  font-para max-w-5xl mx-auto px-2 py-6 grid grid-cols-12">
        <div className="col-span-12 hidden md:block md:col-span-4">
          <div className="sticky top-20 md:top-32">
            <TimelineStep currentStepIndex={currentStepIndex} />
          </div>
        </div>
        <div
          // onSubmit={onSubmit}
          className="col-span-12 relative md:col-span-8 flex flex-col justify-between bg-white shadow-lg px-4"
        >
          <div className="absolute -top-4 block md:hidden text-center rounded-lg pb-5">
            <span className="badge inline  p-2 text-lg">
              {currentStepIndex + 1} / {steps.length}
            </span>
          </div>
          <section className="grid gap-y-10 mt-10 text-sm ">
            {/* loading container */}
            {loading && (
              <div className="w-full h-full grid text-white  inset-0 place-items-center absolute z-20 opacity-90 tracking-wide bg-slate-600">
                <span className="flex items-center">
                  <Spinner /> uploading...
                </span>
              </div>
            )}
            {/* end of loading container */}
            {step}
          </section>
          <div className="mt-10 mb-5 flex gap-4 justify-between ">
            {!isFirstStep && (
              <button
                type="button"
                className="primary_button_light"
                onClick={back}
              >
                Back
              </button>
            )}
            <button
              type="submit"
              onClick={onSubmit}
              className={`primary_button_without_background disabled:bg-gray-400 disabled:cursor-not-allowed flex justify-center items-center ring-green-200 text-white bg-green-400 hover:bg-green-500 w-full ${
                isLastStep && 'bg-red-700'
              }`}
              disabled={loading}
            >
              {isLastStep ? 'Finish' : 'continue'}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default ListProperty;
