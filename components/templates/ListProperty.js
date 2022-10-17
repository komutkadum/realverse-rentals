import { useState } from 'react';
import { useMultistepForm } from '../../hooks/useMultistepForm';
import AmenitiesDetailForm from '../form/AmenitiesDetailForm';
import BasicDetailForm from '../form/BasicDetailForm';
import LocationDetailForm from '../form/LocationDetailForm';
import PhotoForm from '../form/PhotoForm';
import PropertyDetailForm from '../form/PropertyDetailForm';

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
  offers: '',
  preferedTenantType: '',
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
  amenities: '',
};

function ListProperty() {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, next, step, isFirstStep, isLastStep, back } =
    useMultistepForm([
      <BasicDetailForm key={1} {...data} updateFields={updateFields} />,
      <LocationDetailForm key={2} {...data} updateFields={updateFields} />,
      <PhotoForm key={3} {...data} updateFields={updateFields} />,
      <PropertyDetailForm key={4} {...data} updateFields={updateFields} />,
      <AmenitiesDetailForm key={5} {...data} updateFields={updateFields} />,
    ]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isLastStep) return next();
    // submit
    alert('Succesful account creation');
  };
  return (
    <>
      <div className="relative shadow-lg bg-white rounded-md border p-6 lg:p-10 m-4  font-para max-w-2xl mx-2 sm:mx-auto">
        <form onSubmit={onSubmit}>
          <div className=" text-center rounded-lg pb-5">
            <span className="badge inline bg-indigo-600 p-2 text-white text-lg">
              {currentStepIndex + 1} / {steps.length}
            </span>
          </div>
          <div className="grid gap-y-10 text-sm">{step}</div>
          <div className="mt-10 flex gap-4 justify-between">
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
              className={`primary_button w-full ${isLastStep && 'bg-red-700'}`}
            >
              {isLastStep ? 'Finish' : 'Next'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ListProperty;
