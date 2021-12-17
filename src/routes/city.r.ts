import { Application, Request, Response, NextFunction } from "express";
import CityController from "../controllers/city.c";

export default class CityRoutes {
  public cityController: CityController = new CityController();

  public routes(app: Application) {
    app.route("/api/city/:key").get(this.cityController.getCity);

    app.route("/api/city").post(this.cityController.addCity);
    // app
    //   .route("/city")
    //   .post(async (req: Request, res: Response, next: NextFunction) => {
    //     try {
    //       const addedCity = await City.insertMany(cityList);

    //       //for remove
    //       // const rList = await City.deleteMany({ state_key: "TR" });

    //       res
    //         .status(200)
    //         .json({ message: `${addedCity.length} City Added Successfully` });
    //     } catch (err) {
    //       console.log(err);
    //       next(err);
    //     }
    //   });
  }
}
