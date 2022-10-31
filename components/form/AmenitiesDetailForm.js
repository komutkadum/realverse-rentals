import AmenitiesContainer from '../utility/AmenitiesContainer';

function AmenitiesDetailForm({ amenities, societyAmenities, updateCheckbox }) {
  return (
    <>
      <div className="text-gray-500">
        <label className="text-xs font-semibold">Other Amenities</label>
        <div className="flex gap-2 flex-wrap">
          <AmenitiesContainer
            value={amenities}
            updateCheckbox={updateCheckbox}
            name="amenities"
            text="Dining Table"
            icon="dining-table"
          />
          <AmenitiesContainer
            value={amenities}
            updateCheckbox={updateCheckbox}
            name="amenities"
            text="Washing Machine"
            icon="washing-machine"
          />
          <AmenitiesContainer
            value={amenities}
            updateCheckbox={updateCheckbox}
            name="amenities"
            text="Sofa"
            icon="sofa"
          />
          <AmenitiesContainer
            value={amenities}
            updateCheckbox={updateCheckbox}
            name="amenities"
            text="Microwave"
            icon="microwave"
          />
          <AmenitiesContainer
            value={amenities}
            updateCheckbox={updateCheckbox}
            name="amenities"
            text="Stove"
            icon="gas-stove"
          />
          <AmenitiesContainer
            value={amenities}
            updateCheckbox={updateCheckbox}
            name="amenities"
            text="Fridge"
            icon="fridge"
          />
          <AmenitiesContainer
            value={amenities}
            updateCheckbox={updateCheckbox}
            name="amenities"
            text="Water Purifier"
            icon="faucet"
          />
          <AmenitiesContainer
            value={amenities}
            updateCheckbox={updateCheckbox}
            name="amenities"
            text="Gas Pipeline"
            icon="gas-pipeline"
          />
          <AmenitiesContainer
            value={amenities}
            updateCheckbox={updateCheckbox}
            name="amenities"
            text="AC"
            icon="air-conditioner"
          />
          <AmenitiesContainer
            value={amenities}
            updateCheckbox={updateCheckbox}
            name="amenities"
            text="Bed"
            icon="bed"
          />
          <AmenitiesContainer
            value={amenities}
            updateCheckbox={updateCheckbox}
            name="amenities"
            text="Tv"
            icon="tv"
          />
          <AmenitiesContainer
            value={amenities}
            updateCheckbox={updateCheckbox}
            name="amenities"
            text="Cupboard"
            icon="cabinet"
          />
          <AmenitiesContainer
            value={amenities}
            updateCheckbox={updateCheckbox}
            name="amenities"
            text="Geyser"
            icon="water-boiler"
          />
        </div>
      </div>
      <div className="text-gray-500">
        <label className="text-xs font-semibold">Society Amenities</label>
        <div className="flex gap-2 flex-wrap">
          <AmenitiesContainer
            value={societyAmenities}
            updateCheckbox={updateCheckbox}
            name="societyAmenities"
            text="Lift"
            icon="elevator"
          />
          <AmenitiesContainer
            value={societyAmenities}
            updateCheckbox={updateCheckbox}
            name="societyAmenities"
            text="CCTV"
            icon="cctv"
          />
          <AmenitiesContainer
            value={societyAmenities}
            updateCheckbox={updateCheckbox}
            name="societyAmenities"
            text="Gym"
            icon="weight"
          />
          <AmenitiesContainer
            value={societyAmenities}
            updateCheckbox={updateCheckbox}
            name="societyAmenities"
            text="Garden"
            icon="garden"
          />
          <AmenitiesContainer
            value={societyAmenities}
            updateCheckbox={updateCheckbox}
            name="societyAmenities"
            text="Kids Area"
            icon="seesaw"
          />
          <AmenitiesContainer
            value={societyAmenities}
            updateCheckbox={updateCheckbox}
            name="societyAmenities"
            text="Sports"
            icon="cricket"
          />
          <AmenitiesContainer
            value={societyAmenities}
            updateCheckbox={updateCheckbox}
            name="societyAmenities"
            text="Swimming Pool"
            icon="swimming"
          />
          <AmenitiesContainer
            value={societyAmenities}
            updateCheckbox={updateCheckbox}
            name="societyAmenities"
            text="Intercom"
            icon="intercom"
          />
          <AmenitiesContainer
            value={societyAmenities}
            updateCheckbox={updateCheckbox}
            name="societyAmenities"
            text="Gated Area"
            icon="gate"
          />
          <AmenitiesContainer
            value={societyAmenities}
            updateCheckbox={updateCheckbox}
            name="societyAmenities"
            text="Club House"
            icon="house"
          />
          <AmenitiesContainer
            value={societyAmenities}
            updateCheckbox={updateCheckbox}
            name="societyAmenities"
            text="Community Hall"
            icon="city-hall"
          />
          <AmenitiesContainer
            value={societyAmenities}
            updateCheckbox={updateCheckbox}
            name="societyAmenities"
            text="Regular Water"
            icon="faucet"
          />
          <AmenitiesContainer
            value={societyAmenities}
            updateCheckbox={updateCheckbox}
            name="societyAmenities"
            text="Power Backup"
            icon="lightbulb"
          />
          <AmenitiesContainer
            value={societyAmenities}
            updateCheckbox={updateCheckbox}
            name="societyAmenities"
            text="Pet Allowed"
            icon="pet"
          />
        </div>
      </div>
    </>
  );
}

export default AmenitiesDetailForm;
