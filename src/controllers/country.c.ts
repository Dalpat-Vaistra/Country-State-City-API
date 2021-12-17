import { NextFunction, Request, Response } from "express";
import Country from "../models/Country";

export default class CountryController {
  public addCountry = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const countryList = req.body.list;
      //   console.log("Country List :", countryList);
      const addedCountry = await Country.insertMany(countryList);

      if (!addedCountry.length) {
        throw Error("Something Went Wrong. Please, Try Again...");
      }

      return res
        .status(200)
        .json({ message: `${addedCountry.length} Country Added Successfully` });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

  public getAllCountries = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const result = await Country.find({}).sort({ name: "ASC" });

      if (!result.length) {
        const error: any = new Error(
          "Something Went Wrong. Please, try Again...!"
        );
        error.statusCode = 404;
        throw error;
      }

      const data = result.map((c) => {
        return {
          name: c.name,
          code: c.code,
        };
      });

      return res.status(200).json({ message: "Success", data: data });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
}
