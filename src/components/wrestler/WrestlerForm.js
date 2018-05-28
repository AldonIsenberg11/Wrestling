import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const WrestlerForm = ({wrestler, allAuthors, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage wrestler info</h1>
      <TextInput
        name="usawId"
        label="UsawId"
        value={wrestler.usawId}
        onChange={onChange}
        error={errors.usawId}/>

      <TextInput
        name="email"
        label="Email"
        value={wrestler.email}
        onChange={onChange}
        error={errors.email}/>

      <TextInput
        name="firstName"
        label="First Name"
        value={wrestler.firstName}
        onChange={onChange}
        error={errors.firstName}/>

      <TextInput
        name="lastName"
        label="Last Name"
        value={wrestler.lastName}
        onChange={onChange}
        error={errors.lastName}/>

      <TextInput
        name="dob"
        label="D.O.B."
        value={wrestler.dob}
        onChange={onChange}
        error={errors.dob}/>

      <TextInput
        name="phone"
        label="Phone"
        value={wrestler.phone}
        onChange={onChange}
        error={errors.phone}/>

      <TextInput
        name="gender"
        label="Gender"
        value={wrestler.gender}
        onChange={onChange}
        error={errors.gender}/>

      <TextInput
        name="address1"
        label="Adress 1"
        value={wrestler.address1}
        onChange={onChange}
        error={errors.address1}/>

      <TextInput
        name="address2"
        label="Address 2"
        value={wrestler.address2}
        onChange={onChange}
        error={errors.address2}/>

      <TextInput
        name="city"
        label="City"
        value={wrestler.city}
        onChange={onChange}
        error={errors.city}/>

      <TextInput
        name="state"
        label="State"
        value={wrestler.state}
        onChange={onChange}
        error={errors.state}/>

      <TextInput
        name="zip"
        label="Zip"
        value={wrestler.zip}
        onChange={onChange}
        error={errors.zip}/>

      <TextInput
        name="parentFirstName"
        label="Parent First Name"
        value={wrestler.parentFirstName}
        onChange={onChange}
        error={errors.parentFirstName}/>

      <TextInput
        name="parentLastName"
        label="Parent Last Name"
        value={wrestler.parentLastName}
        onChange={onChange}
        error={errors.parentLastName}/>

      <TextInput
        name="parentEmail"
        label="Parent Email"
        value={wrestler.parentEmail}
        onChange={onChange}
        error={errors.parentEmail}/>

      <TextInput
        name="parent2FirstName"
        label="Parent2 First Name"
        value={wrestler.parent2FirstName}
        onChange={onChange}
        error={errors.parentFirstName}/>

      <TextInput
        name="parent2LastName"
        label="Parent2 Last Name"
        value={wrestler.parent2LastName}
        onChange={onChange}
        error={errors.parent2LastName}/>

      <TextInput
        name="parent2Email"
        label="Parent2 Email"
        value={wrestler.parent2Email}
        onChange={onChange}
        error={errors.parent2Email}/>

      <SelectInput
        name="authorId"
        label="Author"
        value={wrestler.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange} error={errors.authorId}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

WrestlerForm.propTypes = {
  wrestler: React.PropTypes.object.isRequired,
  allAuthors: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default WrestlerForm;
