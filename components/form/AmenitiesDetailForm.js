import AmenitiesContainer from '../utility/AmenitiesContainer';

function AmenitiesDetailForm() {
  return (
    <>
      <div className="text-gray-500">
        <label className="text-xs font-semibold">Other Amenities</label>
        <div className="flex gap-2 flex-wrap">
          <AmenitiesContainer text="Dining Table" icon="dining-table" />
          <AmenitiesContainer text="Washing Machine" icon="washing-machine" />
          <AmenitiesContainer text="Sofa" icon="sofa" />
          <AmenitiesContainer text="Microwave" icon="microwave" />
          <AmenitiesContainer text="Stove" icon="gas-stove" />
          <AmenitiesContainer text="Fridge" icon="fridge" />
          <AmenitiesContainer text="Water Purifier" icon="faucet" />
          <AmenitiesContainer text="Gas Pipeline" icon="gas-pipeline" />
          <AmenitiesContainer text="AC" icon="air-conditioner" />
          <AmenitiesContainer text="Bed" icon="bed" />
          <AmenitiesContainer text="Tv" icon="tv" />
          <AmenitiesContainer text="Cupboard" icon="cabinet" />
          <AmenitiesContainer text="Geyser" icon="water-boiler" />
        </div>
      </div>
      <div className="text-gray-500">
        <label className="text-xs font-semibold">Society Amenities</label>
        <div className="flex gap-2 flex-wrap">
          <AmenitiesContainer text="Lift" icon="elevator" />
          <AmenitiesContainer text="CCTV" icon="cctv" />
          <AmenitiesContainer text="Gym" icon="weight" />
          <AmenitiesContainer text="Garden" icon="garden" />
          <AmenitiesContainer text="Kids Area" icon="seesaw" />
          <AmenitiesContainer text="Sports" icon="cricket" />
          <AmenitiesContainer text="Swimming Pool" icon="swimming" />
          <AmenitiesContainer text="Intercom" icon="intercom" />
          <AmenitiesContainer text="Gated Area" icon="gate" />
          <AmenitiesContainer text="Club House" icon="house" />
          <AmenitiesContainer text="Community Hall" icon="city-hall" />
          <AmenitiesContainer text="Regular Water" icon="faucet" />
          <AmenitiesContainer text="Power Backup" icon="lightbulb" />
          <AmenitiesContainer text="Pet Allowed" icon="pet" />
        </div>
      </div>
    </>
  );
}

export default AmenitiesDetailForm;
