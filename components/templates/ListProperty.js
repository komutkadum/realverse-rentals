import { useState } from 'react';
import { useMultistepForm } from '../../hooks/useMultistepForm';
import AmenitiesDetailForm from '../form/AmenitiesDetailForm';
import BasicDetailForm from '../form/BasicDetailForm';
import LocationDetailForm from '../form/LocationDetailForm';
import PhotoForm from '../form/PhotoForm';
import PropertyDetailForm from '../form/PropertyDetailForm';
import TimelineStep from '../utility/TimelineStep';

const INITIAL_DATA = {
  // basic details
  propertyType: '',
  propertyAge: '',
  rooms: '',
  bathrooms: '',
  balcony: '',
  furnishedType: '',
  coveredParking: '',
  openParking: '',
  availableForm: '',
  monthlyRent: '',
  maintenanceCharge: '',
  securityDeposit: '',
  area: '',
  carpetArea: '',
  preferedTenantType: [],
  // locationform
  city: '',
  buildingProjectSociety: '',
  locality: '',
  flatNumber: '',
  floorNumber: '',
  totalFloors: '',
  // photos
  photos: '',
  // propertyform
  lockInPeriod: '',
  facing: '',
  address: '',
  servantRoom: '',
  propertyDescription: '',
  // amenities
  amenities: [],
};

function ListProperty() {
  const [data, setData] = useState(INITIAL_DATA);

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
      <PhotoForm key={5} {...data} updateFields={updateFields} />,
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
  const onSubmit = () => {
    // e.preventDefault();
    if (!isLastStep) return next();
    // submit
    console.log(data);
    alert('Succesful account creation');
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
          <section className="grid gap-y-10 mt-10 text-sm ">{step}</section>
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
              className={`primary_button_without_background ring-green-200 text-white bg-green-400 hover:bg-green-500 w-full ${
                isLastStep && 'bg-red-700'
              }`}
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
