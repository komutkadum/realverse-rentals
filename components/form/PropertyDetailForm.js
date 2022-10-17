import Checkbox from '../utility/Checkbox';

function PropertyDetailForm() {
  return (
    <>
      {/* property type */}
      <div>
        <label className="font-semibold add_asterisk_after">
          Lock in Period{' '}
        </label>
        <div className="flex gap-2 mt-1 tracking-wider font-semibold">
          <input type="number" className="form" placeholder="Lock in Period" />
        </div>
      </div>
      {/* end of property type */}
      {/* property type */}
      <div>
        <label className="font-semibold add_asterisk_after">Facing </label>
        <div className="flex flex-wrap gap-2 mt-1 tracking-wider font-semibold">
          <Checkbox id="north_facing" name="facing" text="North" />
          <Checkbox id="east_facing" name="facing" text="East" />
          <Checkbox id="west_facing" name="facing" text="West" />
          <Checkbox id="south_facing" name="facing" text="South" />
          <Checkbox id="northeast_facing" name="facing" text="North-East" />
          <Checkbox id="northwest_facing" name="facing" text="North-West" />
          <Checkbox id="southeast_facing" name="facing" text="South-East" />
          <Checkbox id="southwest_facing" name="facing" text="South-West" />
        </div>
      </div>
      {/* end of property type */}
      {/* property type */}
      <div>
        <label className="font-semibold add_asterisk_after">Address </label>
        <div className="flex gap-2 mt-1 tracking-wider font-semibold">
          <input type="text" className="form" placeholder="" />
        </div>
      </div>
      {/* end of property type */}
      {/* property type */}
      <div>
        <label className="font-semibold ">Servant Room</label>
        <div className="flex flex-wrap gap-2 mt-1 tracking-wider font-semibold">
          <Checkbox id="yes_servantRoom" name="servantRoom" text="Yes" />
          <Checkbox id="no_servantRoom" name="servantRoom" text="No" />
        </div>
      </div>
      {/* end of property type */}
      {/* property type */}
      <div>
        <label className="font-semibold add_asterisk_after">
          Property Description{' '}
        </label>
        <div className=" gap-2 mt-1 font-semibold">
          <input type="text" className="form" placeholder="" />
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
