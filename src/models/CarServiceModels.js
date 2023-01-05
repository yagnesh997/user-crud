
const mongoose = require('mongoose');

const carServiceSchema = mongoose.Schema(
        {
          startDate: {
            type: String,
            required: true,
            trim: true,
          },
          endDate: {
            type: String,
            required: true,
            trim: true,
          },
          carId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            trim: true,
          },
          serviceMan : {
              type : mongoose.Schema.Types.ObjectId,
              ref: "auth",
              required: true,
          },
          serviceType: {
              type: [mongoose.Schema.Types.ObjectId],
              required: true,
              trim: true,
          },
        },
        {
          timestamps: true,
        }
      );
      
     
      const CarService = mongoose.model('CarService', carServiceSchema);

      module.exports = CarService;