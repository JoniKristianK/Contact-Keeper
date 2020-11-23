const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('MongoDB Connected.... :D');
  } catch (err) {
    console.error(err.message);
    process.exitCode(1);
  }
};

// const connectDB = () => {
//   mongoose
//     .connect(db, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//     })
//     .then(() => console.log('MongoDB Connected :D'))
//     .catch((err) => {
//       console.error(err.message);
//       process.exitCode(1);
//     });
// };

module.exports = connectDB;
