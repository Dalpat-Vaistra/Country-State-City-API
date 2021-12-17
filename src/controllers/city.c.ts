import { Request, Response, NextFunction } from "express";
import City from "../models/City";

export default class CityController {
  public addCity = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cityList = req.body.cityList;

      const result = await City.insertMany(cityList);

      if (!result.length)
        throw Error("Something Went Wrong. Please Try Again... !!!");

      return res
        .status(201)
        .json({ message: `${result.length} City Added Successfully!` });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

  public getCity = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { key } = req.params;

      const result = await City.find({ state_key: key }).sort({ name: "ASC" });

      if (!result.length) {
        const error: any = new Error("Please, Enter Correct Key");
        error.statusCode = 404;
        throw error;
      }

      const data = result.map((c) => {
        return {
          name: c.name,
        };
      });

      return res.status(200).json({ message: "success", data: data });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
}
