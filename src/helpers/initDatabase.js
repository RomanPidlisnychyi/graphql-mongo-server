const mongoose = require('mongoose');

module.exports.initDatabase = async () => {
  try {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    };

    await mongoose.connect(process.env.MONGO_DB_KEY, options);
    console.log('Database successfully connected!');
  } catch (err) {
    console.log('err', err);
    process.exit(1);
  }
};
