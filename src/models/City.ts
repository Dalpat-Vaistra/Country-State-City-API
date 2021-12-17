import * as Mongoose from "mongoose";

export interface CityInterface extends Mongoose.Document {
  name: string;
  state_key: string;
  createdAt: Date;
  updatedAt: Date;
}

const CitySchema = new Mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    state_key: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const City = Mongoose.model<CityInterface>("city", CitySchema);

export default City;
