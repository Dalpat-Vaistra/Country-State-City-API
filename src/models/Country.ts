import * as Mongoose from "mongoose";

export interface CountryInterface extends Mongoose.Document {
  name: string;
  code: string;
  createdAt: Date;
  updatedAt: Date;
}

const CountrySchema = new Mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Country = Mongoose.model<CountryInterface>("country", CountrySchema);

export default Country;
