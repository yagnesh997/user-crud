

const mongoose = require('mongoose');

const carSchema = mongoose.Schema(
        {
          carName: {
            type: String,
            required: true,
            trim: true,
          },
          color: {
            type: String,
            required: true,
            trim: true,
          },
          modalNo: {
            type: String,
            required: true,
            trim: true,
          },
          userId : {
            type : mongoose.Schema.Types.ObjectId,
            ref: "auth",
            required: true,
        }
        },
        {
          timestamps: true,
        }
      );
      
     
      const Car = mongoose.model('Car', carSchema);

      module.exports = Car;