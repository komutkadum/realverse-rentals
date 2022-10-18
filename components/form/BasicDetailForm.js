import React from 'react';
import Checkbox from '../utility/Checkbox';
import CustomRadio from '../utility/CustomRadio';

function BasicDetailForm({
  propertyType,
  propertyAge,
  rooms,
  bathrooms,
  balcony,
  furnishedType,
  coveredParking,
  openParking,
  availableForm,
  monthlyRent,
  maintenanceCharge,
  securityDeposit,
  area,
  carpetArea,
  preferedTenantType,
  updateFields,
  updateCheckbox,
}) {
  return (
    <>
      {/* property type */}
      <div>
        <label className="font-semibold add_asterisk_after">
          Property Type
        </label>
        <div className="flex flex-wrap gap-2 mt-1 tracking-wider font-semibold">
          <CustomRadio
            id="apartment"
            value={propertyType}
            updateFields={updateFields}
            name="propertyType"
            text="Apartment"
          />
          <CustomRadio
            id="villa"
            name="propertyType"
            value={propertyType}
            updateFields={updateFields}
            text="Villa"
          />
          <CustomRadio
            id="independent_house"
            name="propertyType"
            value={propertyType}
            updateFields={updateFields}
            text="Independent House"
          />
          <CustomRadio
            id="independent_floor"
            value={propertyType}
            updateFields={updateFields}
            name="propertyType"
            text="Independent Floor"
          />
        </div>
      </div>
      {/* end of property type */}
      {/* property type */}
      <div>
        <label className="font-semibold add_asterisk_after">
          Age of Property{' '}
        </label>
        <div className="flex  gap-2 mt-1 tracking-wider font-semibold">
          <input
            type="number"
            className="form"
            value={propertyAge}
            onChange={(e) => updateFields({ propertyAge: e.target.value })}
            placeholder="property age in numbers"
          />
        </div>
      </div>
      {/* end of property type */}
      {/* property type */}
      <div>
        <label className="font-semibold add_asterisk_after">BHK </label>
        <div className="flex flex-wrap  gap-2 mt-1 tracking-wider font-semibold">
          <CustomRadio
            id="onerk"
            name="rooms"
            text="1RK"
            value={rooms}
            updateFields={updateFields}
          />
          <CustomRadio
            id="onebhk"
            name="rooms"
            text="1BHK"
            value={rooms}
            updateFields={updateFields}
          />
          <CustomRadio
            id="twobhk"
            name="rooms"
            text="2BHK"
            value={rooms}
            updateFields={updateFields}
          />
          <CustomRadio
            id="threebhk"
            name="rooms"
            text="3BHK"
            value={rooms}
            updateFields={updateFields}
          />
          <CustomRadio
            id="threeplusbhk"
            name="rooms"
            text="3+BHK"
            value={rooms}
            updateFields={updateFields}
          />
        </div>
      </div>
      {/* end of property type */}
      {/* property type */}
      <div>
        <label className="font-semibold add_asterisk_after">Bathroom </label>
        <div className="flex flex-wrap gap-2 mt-1 tracking-wider font-semibold">
          <CustomRadio
            id="zero_bathroom"
            name="bathrooms"
            text="0"
            value={bathrooms}
            updateFields={updateFields}
          />
          <CustomRadio
            id="one_bathroom"
            name="bathrooms"
            text="1"
            value={bathrooms}
            updateFields={updateFields}
          />
          <CustomRadio
            id="two_bathroom"
            name="bathrooms"
            text="2"
            value={bathrooms}
            updateFields={updateFields}
          />
          <CustomRadio
            id="three_bathroom"
            name="bathrooms"
            text="3"
            value={bathrooms}
            updateFields={updateFields}
          />
          <CustomRadio
            id="four_bathroom"
            name="bathrooms"
            text="3+"
            value={bathrooms}
            updateFields={updateFields}
          />
        </div>
      </div>
      {/* end of property type */}
      {/* balcony type */}
      <div>
        <label className="font-semibold add_asterisk_after">Balcony </label>
        <div className="flex flex-wrap gap-2 mt-1 tracking-wider font-semibold">
          <CustomRadio
            id="zero_balcony"
            name="balcony"
            text="0"
            value={balcony}
            updateFields={updateFields}
          />
          <CustomRadio
            id="one_balcony"
            name="balcony"
            text="1"
            value={balcony}
            updateFields={updateFields}
          />
          <CustomRadio
            id="two_balcony"
            name="balcony"
            text="2"
            value={balcony}
            updateFields={updateFields}
          />
          <CustomRadio
            id="three_balcony"
            name="balcony"
            text="3"
            value={balcony}
            updateFields={updateFields}
          />
          <CustomRadio
            id="four_balcony"
            name="balcony"
            text="3+"
            value={balcony}
            updateFields={updateFields}
          />
        </div>
      </div>
      {/* end of balcony type */}
      {/* Furnished type */}
      <div>
        <label className="font-semibold add_asterisk_after">
          Furnished Type{' '}
        </label>
        <div className="flex flex-wrap gap-2 mt-1 tracking-wider font-semibold">
          <CustomRadio
            id="fully_furnished"
            name="furnishedType"
            text="Fully Furnished"
            value={furnishedType}
            updateFields={updateFields}
          />
          <CustomRadio
            id="semi_furnished"
            name="furnishedType"
            value={furnishedType}
            updateFields={updateFields}
            text="Semi-Furnished"
          />
          <CustomRadio
            id="unfurnished"
            value={furnishedType}
            updateFields={updateFields}
            name="furnishedType"
            text="Unfurnished"
          />
        </div>
      </div>
      {/* end of Furnished type */}
      {/* Covered Parking type */}
      <div>
        <label className="font-semibold add_asterisk_after">
          Covered Parking{' '}
        </label>
        <div className="flex flex-wrap gap-2 mt-1 tracking-wider font-semibold">
          <CustomRadio
            id="zero_covered_parking"
            name="coveredParking"
            text="0"
            value={coveredParking}
            updateFields={updateFields}
          />
          <CustomRadio
            id="one_covered_parking"
            name="coveredParking"
            text="1"
            value={coveredParking}
            updateFields={updateFields}
          />
          <CustomRadio
            id="two_covered_parking"
            name="coveredParking"
            text="2"
            value={coveredParking}
            updateFields={updateFields}
          />
          <CustomRadio
            id="three_covered_parking"
            name="coveredParking"
            text="3"
            value={coveredParking}
            updateFields={updateFields}
          />
          <CustomRadio
            id="four_covered_parking"
            name="coveredParking"
            text="3+"
            value={coveredParking}
            updateFields={updateFields}
          />
        </div>
      </div>
      {/* end of Covered Parking type */}
      {/* Open parking type */}
      <div>
        <label className="font-semibold add_asterisk_after">
          Open Parking{' '}
        </label>
        <div className="flex flex-wrap gap-2 mt-1 tracking-wider font-semibold">
          <CustomRadio
            id="zero_open_parking"
            name="openParking"
            text="0"
            value={openParking}
            updateFields={updateFields}
          />
          <CustomRadio
            id="one_open_parking"
            name="openParking"
            text="1"
            value={openParking}
            updateFields={updateFields}
          />
          <CustomRadio
            id="two_open_parking"
            name="openParking"
            text="2"
            value={openParking}
            updateFields={updateFields}
          />
          <CustomRadio
            id="three_open_parking"
            name="openParking"
            text="3"
            value={openParking}
            updateFields={updateFields}
          />
          <CustomRadio
            id="four_open_parking"
            name="openParking"
            text="3+"
            value={openParking}
            updateFields={updateFields}
          />
        </div>
      </div>
      {/* end of Open parking type */}
      {/* Available from type */}
      <div>
        <label className="font-semibold add_asterisk_after">
          Available From{' '}
        </label>
        <div className="flex gap-2 mt-1 tracking-wider font-semibold">
          <input
            type="date"
            value={availableForm}
            onChange={(e) => updateFields({ availableForm: e.target.value })}
            className="form"
          />
        </div>
      </div>
      {/* end of Available from type */}
      {/* Available from type */}
      <div>
        <label className="font-semibold add_asterisk_after">
          Monthly Rent{' '}
        </label>
        <div className="flex gap-2 mt-1 tracking-wider font-semibold">
          <input
            type="number"
            value={monthlyRent}
            onChange={(e) => updateFields({ monthlyRent: e.target.value })}
            className="form"
            placeholder="monthly rent"
          />
        </div>
      </div>
      {/* end of Available from type */}
      {/* Available from type */}
      <div>
        <label className="font-semibold add_asterisk_after">
          Maintenance Charge{' '}
        </label>
        <div className="flex gap-2 mt-1 tracking-wider font-semibold">
          <input
            type="number"
            className="form"
            value={maintenanceCharge}
            onChange={(e) =>
              updateFields({ maintenanceCharge: e.target.value })
            }
            placeholder="maintenance charge"
          />
        </div>
      </div>
      {/* end of Available from type */}
      {/* Open parking type */}
      <div>
        <label className="font-semibold add_asterisk_after">
          Do you take security deposit{' '}
        </label>
        <div className="flex flex-wrap gap-2 mt-1 tracking-wider font-semibold">
          <CustomRadio
            id="yes_securityDeposit"
            name="securityDeposit"
            text="Yes"
            value={securityDeposit}
            updateFields={updateFields}
          />
          <CustomRadio
            id="no_securityDeposit"
            name="securityDeposit"
            text="No"
            value={securityDeposit}
            updateFields={updateFields}
          />
        </div>
      </div>
      {/* end of Open parking type */}
      {/* Available from type */}
      <div>
        <label className="font-semibold add_asterisk_after">
          Built Up Area{' '}
        </label>
        <div className="flex gap-2 mt-1 tracking-wider font-semibold">
          <input
            type="number"
            className="form"
            value={area}
            onChange={(e) => updateFields({ area: e.target.value })}
            placeholder="built up area in sqm"
          />
        </div>
      </div>
      {/* end of Available from type */}
      {/* Available from type */}
      <div>
        <div className="flex gap-2 mt-1 tracking-wider font-semibold">
          <input
            type="number"
            value={carpetArea}
            onChange={(e) => updateFields({ carpetArea: e.target.value })}
            className="form"
            placeholder="Carpet Area"
          />
        </div>
      </div>
      {/* end of Available from type */}
      {/* Open parking type */}
      <div>
        <label className="font-semibold add_asterisk_after">
          Prefered Tenant Type
        </label>
        <div className="flex flex-wrap gap-2 mt-1 tracking-wider font-semibold">
          <Checkbox
            id="family_preferedTenant"
            name="preferedTenantType"
            text="Family"
            value={preferedTenantType}
            updateCheckbox={updateCheckbox}
          />
          <Checkbox
            id="bachelor_preferedTenant"
            name="preferedTenantType"
            text="Bachelors"
            value={preferedTenantType}
            updateCheckbox={updateCheckbox}
          />
          <Checkbox
            id="company_preferedTenant"
            name="preferedTenantType"
            text="Company"
            value={preferedTenantType}
            updateCheckbox={updateCheckbox}
          />
        </div>
      </div>
      {/* end of Open parking type */}
    </>
  );
}

export default BasicDetailForm;
