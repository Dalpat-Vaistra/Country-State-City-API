import { Application, Request, Response, NextFunction } from "express";
import CountryController from "../controllers/country.c";

export default class CountryRoutes {
  public countryController: CountryController = new CountryController();

  public routes(app: Application) {
    app.route("/api/country").get(this.countryController.getAllCountries);

    app.route("/api/country").post(this.countryController.addCountry);
    // app
    //   .route("/country")
    //   .post(async (req: Request, res: Response, next: NextFunction) => {
    //     try {
    //       //   const countryList = req.body;
    //       console.log(countryList);

    //       const result = await Country.insertMany(countryList);

    //       res
    //         .status(200)
    //         .json({ message: `${result.length} Country Added Successfully` });
    //     } catch (err) {
    //       console.log(err);
    //       next(err);
    //     }
    //   });
  }
}
