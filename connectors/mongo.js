const mongoose = require('mongoose');
const mongoURI = ``;

module.exports = {
    connectToServer: async () => {
        try {
            console.log("connecting to mongodb");
            return Promise.resolve(mongoose.connect(mongoURI, { useNewUrlParser: true,  useUnifiedTopology: true }));
        } catch (err) {
            return Promise.reject(err);
        }
    },
    getMongoose: () => {
        return mongoose;
    }
};
