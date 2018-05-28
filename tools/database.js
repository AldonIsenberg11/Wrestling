import mongoose from 'mongoose';
import colors from 'colors';

/*eslint-disable no-console */

console.log("MongoDB connecting...".bgYellow.black.bold);

mongoose.connect('mongodb://localhost/wrestlers', function () {
  console.log("MongoDB connected".bgYellow.black.bold);
});
