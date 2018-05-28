import mongoose from 'mongoose';

let WrestlerSchema = {
  usawId           : String,
  email            : String,
  firstName        : String,
  lastName         : String,
  dob              : String,
  phone            : String,
  gender           : String,
  address1         : String,
  address2         : String,
  city             : String,
  state            : String,
  zip              : String,
  parentFirstName  : String,
  parentLastName   : String,
  parentEmail      : String,
  parent2FirstName : String,
  parent2LastName  : String,
  parent2Email     : String
};

let Wrestler = mongoose.model('Wrestler', WrestlerSchema, "Wrestlers");

module.exports = Wrestler;
