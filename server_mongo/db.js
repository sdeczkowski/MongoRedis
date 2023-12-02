const mongoose = require("mongoose")

module.exports = () => {
    try {
        const DB_OPTIONS = {
            dbName: 'todos',
        }
        mongoose.connect("mongodb+srv://szymondeczkowski1:pqOTOqmMjL0iRjRr@reactcluster.pz9kwmk.mongodb.net/", DB_OPTIONS);
    } catch (error) {
        console.log(error);
        console.log("Could not connect database!")
    }
}

