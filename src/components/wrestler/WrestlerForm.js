import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const WrestlerForm = ({wrestler, allAuthors, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage wrestler info</h1>
      <TextInput
        name="email"
        label="Email"
        value={wrestler.email}
        onChange={onChange}
        error={errors.email}/>

      <SelectInput
        name="authorId"
        label="Author"
        value={wrestler.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange} error={errors.authorId}/>

      <TextInput
        name="category"
        label="Category"
        value={wrestler.category}
        onChange={onChange}
        error={errors.category}/>

      <TextInput
        name="length"
        label="Length"
        value={wrestler.length}
        onChange={onChange}
        error={errors.length}/>

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
