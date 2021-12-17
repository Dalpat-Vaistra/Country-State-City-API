import * as Mongoose from "mongoose";

export interface StateInterface extends Mongoose.Document {
  name: string;
  key: string;
  country_code: string;
  createdAt: Date;
  updatedAt: Date;
}

const StateSchema = new Mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    key: {
      type: String,
      required: true,
    },
    country_code: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const State = Mongoose.model<StateInterface>("state", StateSchema);

export default State;
