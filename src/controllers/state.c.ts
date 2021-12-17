import { NextFunction, Request, Response } from "express";
import State from "../models/State";

export default class StateController {
  public addState = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const stateList = req.body.list;
      //   console.log("State List :", stateList);
      const addedState = await State.insertMany(stateList);

      if (!addedState.length) {
        throw Error("Something Went Wrong. Please, Try Again...");
      }

      return res
        .status(200)
        .json({ message: `${addedState.length} State Added Successfully` });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

  public getAllState = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const result = await State.find({});

      if (!result.length) {
        const error: any = new Error("Please, Enter Correct Country Code");
        error.statusCode = 404;
        throw error;
      }

      const data = result.map((r) => {
        return {
          name: r.name,
          key: r.key,
          country_code: r.country_code,
        };
      });
      return res.status(200).json({ message: "Success", data: data });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

  public getState = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const countryCode = req.params.countryCode;

      const stateList = await State.find({ country_code: countryCode });

      if (!stateList.length) {
        const error: any = new Error("Please, Enter Correct Country Code");
        error.statusCode = 404;
        throw error;
      }

      const data = stateList.map((s) => {
        return {
          name: s.name,
          key: s.key,
        };
      });

      return res.status(200).json({ message: "Success", data: data });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
}
