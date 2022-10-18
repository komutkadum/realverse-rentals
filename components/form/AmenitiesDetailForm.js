import AmenitiesContainer from '../utility/AmenitiesContainer';

function AmenitiesDetailForm({ amenities, updateCheckbox }) {
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
            value={amenities}
            updateCheckbox={updateCheckbox}
            name="amenities"
            text="Lift"
            icon="elevator"
          />
          <AmenitiesContainer
            value={amenities}
            updateCheckbox={updateCheckbox}
            name="amenities"
            text="CCTV"
            icon="cctv"
          />
          <AmenitiesContainer
            value={amenities}
            updateCheckbox={updateCheckbox}
            name="amenities"
            text="Gym"
            icon="weight"
          />
          <AmenitiesContainer
            value={amenities}
            updateCheckbox={updateCheckbox}
            name="amenities"
            text="Garden"
            icon="garden"
          />
          <AmenitiesContainer
            value={amenities}
            updateCheckbox={updateCheckbox}
            name="amenities"
            text="Kids Area"
            icon="seesaw"
          />
          <AmenitiesContainer
            value={amenities}
            updateCheckbox={updateCheckbox}
            name="amenities"
            text="Sports"
            icon="cricket"
          />
          <AmenitiesContainer
            value={amenities}
            updateCheckbox={updateCheckbox}
            name="amenities"
            text="Swimming Pool"
            icon="swimming"
          />
          <AmenitiesContainer
            value={amenities}
            updateCheckbox={updateCheckbox}
            name="amenities"
            text="Intercom"
            icon="intercom"
          />
          <AmenitiesContainer
            value={amenities}
            updateCheckbox={updateCheckbox}
            name="amenities"
            text="Gated Area"
            icon="gate"
          />
          <AmenitiesContainer
            value={amenities}
            updateCheckbox={updateCheckbox}
            name="amenities"
            text="Club House"
            icon="house"
          />
          <AmenitiesContainer
            value={amenities}
            updateCheckbox={updateCheckbox}
            name="amenities"
            text="Community Hall"
            icon="city-hall"
          />
          <AmenitiesContainer
            value={amenities}
            updateCheckbox={updateCheckbox}
            name="amenities"
            text="Regular Water"
            icon="faucet"
          />
          <AmenitiesContainer
            value={amenities}
            updateCheckbox={updateCheckbox}
            name="amenities"
            text="Power Backup"
            icon="lightbulb"
          />
          <AmenitiesContainer
            value={amenities}
            updateCheckbox={updateCheckbox}
            name="amenities"
            text="Pet Allowed"
            icon="pet"
          />
        </div>
      </div>
    </>
  );
}

export default AmenitiesDetailForm;
