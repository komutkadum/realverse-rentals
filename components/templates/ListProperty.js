import { useRouter } from 'next/router';
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
  const router = useRouter();
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
    setTimeout(() => {
      router.push('/');
    }, 3000);
  };
  return (
    <>
      <main className="relative md:p-6 m-4  font-para max-w-5xl mx-auto px-2 py-6 grid grid-cols-12">
        <div className="col-span-12 hidden md:block md:col-span-4">
          <div className="sticky top-20 md:top-32">
            <TimelineStep currentStepIndex={currentStepIndex} />
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="col-span-12 relative md:col-span-8 bg-white shadow-lg px-4"
        >
          <div className="absolute -top-4 text-center rounded-lg pb-5">
            <span className="badge inline bg-indigo-600 p-2 text-white text-lg">
              {currentStepIndex + 1} / {steps.length}
            </span>
          </div>
          <section className="grid gap-y-10 mt-10 text-sm">{step}</section>
          <div className="mt-10 mb-5 flex gap-4 justify-between">
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
              {isLastStep ? 'Finish' : 'continue'}
            </button>
          </div>
        </form>
      </main>
    </>
  );
}

export default ListProperty;
