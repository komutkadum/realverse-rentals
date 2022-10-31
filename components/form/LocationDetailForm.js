import React from 'react';

function LocationDetailForm({
  city,
  buildingProjectSociety,
  locality,
  flatNumber,
  floorNumber,
  totalFloors,
  updateFields,
}) {
  return (
    <>
      {/* property type */}
      <div>
        <label className="font-semibold add_asterisk_after">City </label>
        <div className="flex gap-2 mt-1 tracking-wider font-semibold">
          <input
            type="text"
            value={city}
            onChange={(e) => updateFields({ city: e.target.value })}
            className="form"
            placeholder="current city"
          />
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
            className="form"
            placeholder="Locality"
          />
        </div>
      </div>
      {/* end of property type */}
      {/* property type */}
      <div className="grid grid-cols-12 gap-x-3 gap-y-10">
        <div className="col-span-12 md:col-span-4">
          <label className="font-semibold add_asterisk_after">Flat No </label>
          <div className="flex gap-2 mt-1 tracking-wider font-semibold">
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
