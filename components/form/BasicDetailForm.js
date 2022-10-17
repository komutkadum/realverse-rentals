import React from 'react';
import Checkbox from '../utility/Checkbox';

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
  offers,
  preferedTenantType,
  updateFields,
}) {
  return (
    <>
      {/* property type */}
      <div>
        <label className="font-semibold">Property Type *</label>
        <div className="flex flex-wrap gap-2 mt-1 tracking-wider font-semibold">
          <Checkbox id="apartment" name="propertyType" text="Apartment" />
          <Checkbox id="villa" name="propertyType" text="Villa" />
          <Checkbox
            id="independent_house"
            name="propertyType"
            text="Independent House"
          />
          <Checkbox
            id="independent_floor"
            name="propertyType"
            text="Independent Floor"
          />
        </div>
      </div>
      {/* end of property type */}
      {/* property type */}
      <div>
        <label className="font-semibold">Age of Property *</label>
        <div className="flex  gap-2 mt-1 tracking-wider font-semibold">
          <input
            type="number"
            className="form"
            placeholder="property age in numbers"
          />
        </div>
      </div>
      {/* end of property type */}
      {/* property type */}
      <div>
        <label className="font-semibold">BHK *</label>
        <div className="flex flex-wrap  gap-2 mt-1 tracking-wider font-semibold">
          <Checkbox id="onerk" name="rooms" text="1RK" />
          <Checkbox id="onebhk" name="rooms" text="1BHK" />
          <Checkbox id="twobhk" name="rooms" text="2BHK" />
          <Checkbox id="threebhk" name="rooms" text="3BHK" />
          <Checkbox id="threeplusbhk" name="rooms" text="3+BHK" />
        </div>
      </div>
      {/* end of property type */}
      {/* property type */}
      <div>
        <label className="font-semibold">Bathroom *</label>
        <div className="flex flex-wrap gap-2 mt-1 tracking-wider font-semibold">
          <Checkbox id="zero_bathroom" name="bathroom" text="0" />
          <Checkbox id="one_bathroom" name="bathroom" text="1" />
          <Checkbox id="two_bathroom" name="bathroom" text="2" />
          <Checkbox id="three_bathroom" name="bathroom" text="3" />
          <Checkbox id="four_bathroom" name="bathroom" text="3+" />
        </div>
      </div>
      {/* end of property type */}
      {/* balcony type */}
      <div>
        <label className="font-semibold">Balcony *</label>
        <div className="flex flex-wrap gap-2 mt-1 tracking-wider font-semibold">
          <Checkbox id="zero_balcony" name="balcony" text="0" />
          <Checkbox id="one_balcony" name="balcony" text="1" />
          <Checkbox id="two_balcony" name="balcony" text="2" />
          <Checkbox id="three_balcony" name="balcony" text="3" />
          <Checkbox id="four_balcony" name="balcony" text="3+" />
        </div>
      </div>
      {/* end of balcony type */}
      {/* Furnished type */}
      <div>
        <label className="font-semibold">Furnished Type *</label>
        <div className="flex flex-wrap gap-2 mt-1 tracking-wider font-semibold">
          <Checkbox
            id="fully_furnished"
            name="furnishedType"
            text="Fully Furnished"
          />
          <Checkbox
            id="semi_furnished"
            name="furnishedType"
            text="Semi-Furnished"
          />
          <Checkbox id="unfurnished" name="furnishedType" text="Unfurnished" />
        </div>
      </div>
      {/* end of Furnished type */}
      {/* Covered Parking type */}
      <div>
        <label className="font-semibold">Covered Parking *</label>
        <div className="flex flex-wrap gap-2 mt-1 tracking-wider font-semibold">
          <Checkbox id="zero_covered_parking" name="coveredParking" text="0" />
          <Checkbox id="one_covered_parking" name="coveredParking" text="1" />
          <Checkbox id="two_covered_parking" name="coveredParking" text="2" />
          <Checkbox id="three_covered_parking" name="coveredParking" text="3" />
          <Checkbox id="four_covered_parking" name="coveredParking" text="3+" />
        </div>
      </div>
      {/* end of Covered Parking type */}
      {/* Open parking type */}
      <div>
        <label className="font-semibold">Open Parking *</label>
        <div className="flex flex-wrap gap-2 mt-1 tracking-wider font-semibold">
          <Checkbox id="zero_open_parking" name="openParking" text="0" />
          <Checkbox id="one_open_parking" name="openParking" text="1" />
          <Checkbox id="two_open_parking" name="openParking" text="2" />
          <Checkbox id="three_open_parking" name="openParking" text="3" />
          <Checkbox id="four_open_parking" name="openParking" text="3+" />
        </div>
      </div>
      {/* end of Open parking type */}
      {/* Available from type */}
      <div>
        <label className="font-semibold">Available From *</label>
        <div className="flex gap-2 mt-1 tracking-wider font-semibold">
          <input type="date" className="form" />
        </div>
      </div>
      {/* end of Available from type */}
      {/* Available from type */}
      <div>
        <label className="font-semibold">Monthly Rent *</label>
        <div className="flex gap-2 mt-1 tracking-wider font-semibold">
          <input type="number" className="form" placeholder="monthly rent" />
        </div>
      </div>
      {/* end of Available from type */}
      {/* Available from type */}
      <div>
        <label className="font-semibold">Maintenance Charge *</label>
        <div className="flex gap-2 mt-1 tracking-wider font-semibold">
          <input
            type="number"
            className="form"
            placeholder="maintenance charge"
          />
        </div>
      </div>
      {/* end of Available from type */}
      {/* Open parking type */}
      <div>
        <label className="font-semibold">Do you take security deposit *</label>
        <div className="flex flex-wrap gap-2 mt-1 tracking-wider font-semibold">
          <Checkbox
            id="yes_securityDeposit"
            name="securityDeposit"
            text="Yes"
          />
          <Checkbox id="no_securityDeposit" name="securityDeposit" text="No" />
        </div>
      </div>
      {/* end of Open parking type */}
      {/* Available from type */}
      <div>
        <label className="font-semibold">Built Up Area *</label>
        <div className="flex gap-2 mt-1 tracking-wider font-semibold">
          <input
            type="number"
            className="form"
            placeholder="built up area in sqm"
          />
        </div>
      </div>
      {/* end of Available from type */}
      {/* Available from type */}
      <div>
        <div className="flex gap-2 mt-1 tracking-wider font-semibold">
          <input type="number" className="form" placeholder="Carpet Area" />
        </div>
      </div>
      {/* end of Available from type */}
      {/* Available from type */}
      <div>
        <div className="flex gap-2 mt-1 tracking-wider font-semibold">
          <input
            type="text"
            className="form"
            placeholder="Offers - Increase leads on your property upto 50%"
          />
        </div>
      </div>
      {/* end of Available from type */}
      {/* Open parking type */}
      <div>
        <label className="font-semibold">Prefered Tenant Type *</label>
        <div className="flex flex-wrap gap-2 mt-1 tracking-wider font-semibold">
          <Checkbox
            id="family_preferedTenant"
            name="preferedTenantType"
            text="Family"
          />
          <Checkbox
            id="bachelor_preferedTenant"
            name="preferedTenantType"
            text="Bachelors"
          />
          <Checkbox
            id="company_preferedTenant"
            name="preferedTenantType"
            text="Company"
          />
        </div>
      </div>
      {/* end of Open parking type */}
    </>
  );
}

export default BasicDetailForm;
