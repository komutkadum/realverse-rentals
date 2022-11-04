import React, { useState } from 'react';
import { CITY_DATA } from '../../lib/constants';

function LocationDetailForm({
  city,
  buildingProjectSociety,
  locality,
  flatNumber,
  floorNumber,
  totalFloors,
  updateFields,
}) {
  const [cityAutocomplete, setCityAutocomplete] = useState(CITY_DATA);

  const autoComplete = (filter) => {
    // let temp = [...CITY_DATA];
    // console.log(temp);
    // setCityAutocomplete([...temp]);
    // temp = temp.filter((item) => item.ind);
  };

  return (
    <>
      {/* property type */}
      <div>
        <label className="font-semibold add_asterisk_after">
          City{' '}
          <span className="text-xs text-gray-500 font-thin">
            (will be autoupdated based on locality)
          </span>
        </label>
        <div className="grid relative gap-2 mt-1 tracking-wider font-semibold">
          {/* <input
            type="text"
            value={city}
            onKeyUp={(e) => autoComplete(e.target.value)}
            onChange={(e) => updateFields({ city: e.target.value })}
            className="form peer"
            placeholder="current city"
          /> */}
          <select
            placeholder="current city"
            className="form"
            onChange={(e) => updateFields({ city: e.target.value })}
          >
            <option className="text-gray-400">Choose current city</option>
            {cityAutocomplete.map((item, index) => (
              <option
                key={index}
                selected={item.name === city}
                value={item.name}
              >
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* end of property type */}
      {/* property type */}
      <div>
        <label className="font-semibold add_asterisk_after">
          building/Project/Society (Mandatory)
        </label>
        <div className="flex gap-2 mt-1 tracking-wider font-semibold">
          <input
            type="text"
            value={buildingProjectSociety}
            onChange={(e) =>
              updateFields({ buildingProjectSociety: e.target.value })
            }
            name="bpsListProperty"
            id="bpsListProperty"
            required=""
            spellCheck="false"
            className="form"
            placeholder="building"
          />
        </div>
      </div>
      {/* end of property type */}
      {/* property type */}
      <div>
        <label className="font-semibold add_asterisk_after">Locality </label>
        <div className="flex gap-2 mt-1 tracking-wider font-semibold">
          <input
            type="text"
            value={locality}
            onChange={(e) => updateFields({ locality: e.target.value })}
            className="form disabled:text-gray-500"
            placeholder="Locality"
            name="localityListProperty"
            id="localityListProperty"
            required=""
            spellCheck="false"
          />
        </div>
      </div>
      {/* end of property type */}
      {/* property type */}
      <div className="grid grid-cols-12 gap-x-3 gap-y-10">
        <div className="col-span-12 md:col-span-4">
          <label className="font-semibold add_asterisk_after">Flat No </label>
          <div className="grid  mt-1 tracking-wider font-semibold">
            <input
              type="text"
              value={flatNumber}
              onChange={(e) => updateFields({ flatNumber: e.target.value })}
              className="form"
              placeholder="flat no."
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <label className="font-semibold add_asterisk_after">Floor No </label>
          <div className="flex gap-2 mt-1 tracking-wider font-semibold">
            <input
              type="text"
              value={floorNumber}
              onChange={(e) => updateFields({ floorNumber: e.target.value })}
              className="form"
              placeholder="floor no."
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <label className="font-semibold add_asterisk_after">
            Total Floors{' '}
          </label>
          <div className="flex gap-2 mt-1 tracking-wider font-semibold">
            <input
              type="text"
              value={totalFloors}
              onChange={(e) => updateFields({ totalFloors: e.target.value })}
              className="form"
              placeholder="total floors"
            />
          </div>
        </div>
      </div>

      {/* end of property type */}
    </>
  );
}

export default LocationDetailForm;
