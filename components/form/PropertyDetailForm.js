import CustomRadio from '../utility/CustomRadio';

function PropertyDetailForm({
  lockInPeriod,
  facing,
  address,
  servantRoom,
  propertyDescription,
  updateFields,
}) {
  return (
    <>
      {/* property type */}
      <div>
        <label className="font-semibold add_asterisk_after">
          Lock in Period
        </label>
        <div className="flex gap-2 mt-1 tracking-wider font-semibold">
          <input
            type="number"
            value={lockInPeriod}
            onChange={(e) => updateFields({ lockInPeriod: e.target.value })}
            className="form"
            placeholder="Lock in Period"
          />
        </div>
      </div>
      {/* end of property type */}
      {/* property type */}
      <div>
        <label className="font-semibold add_asterisk_after">Facing </label>
        <div className="flex flex-wrap gap-2 mt-1 tracking-wider font-semibold">
          <CustomRadio
            id="north_facing"
            name="facing"
            text="North"
            value={facing}
            updateFields={updateFields}
          />
          <CustomRadio
            id="east_facing"
            name="facing"
            text="East"
            value={facing}
            updateFields={updateFields}
          />
          <CustomRadio
            id="west_facing"
            name="facing"
            text="West"
            value={facing}
            updateFields={updateFields}
          />
          <CustomRadio
            id="south_facing"
            name="facing"
            text="South"
            value={facing}
            updateFields={updateFields}
          />
          <CustomRadio
            id="northeast_facing"
            name="facing"
            text="North-East"
            value={facing}
            updateFields={updateFields}
          />
          <CustomRadio
            id="northwest_facing"
            name="facing"
            text="North-West"
            value={facing}
            updateFields={updateFields}
          />
          <CustomRadio
            id="southeast_facing"
            name="facing"
            text="South-East"
            value={facing}
            updateFields={updateFields}
          />
          <CustomRadio
            id="southwest_facing"
            name="facing"
            text="South-West"
            value={facing}
            updateFields={updateFields}
          />
        </div>
      </div>
      {/* end of property type */}
      {/* property type */}
      <div>
        <label className="font-semibold add_asterisk_after">Address </label>
        <div className="flex gap-2 mt-1 tracking-wider font-semibold">
          <input
            type="text"
            value={address}
            onChange={(e) => updateFields({ address: e.target.value })}
            className="form"
            placeholder=""
          />
        </div>
      </div>
      {/* end of property type */}
      {/* property type */}
      <div>
        <label className="font-semibold ">Servant Room</label>
        <div className="flex flex-wrap gap-2 mt-1 tracking-wider font-semibold">
          <CustomRadio
            id="yes_servantRoom"
            name="servantRoom"
            text="Yes"
            value={servantRoom}
            updateFields={updateFields}
          />
          <CustomRadio
            id="no_servantRoom"
            name="servantRoom"
            text="No"
            value={servantRoom}
            updateFields={updateFields}
          />
        </div>
      </div>
      {/* end of property type */}
      {/* property type */}
      <div>
        <label className="font-semibold add_asterisk_after">
          Property Description{' '}
        </label>
        <div className=" gap-2 mt-1 font-semibold">
          <input
            type="text"
            value={propertyDescription}
            onChange={(e) =>
              updateFields({ propertyDescription: e.target.value })
            }
            className="form"
            placeholder=""
          />
          <label className="font-normal text-xs font-para ">
            Tell us more about the special features of your property
          </label>
        </div>
      </div>
      {/* end of property type */}
    </>
  );
}

export default PropertyDetailForm;
