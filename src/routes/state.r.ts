import { Application, Request, Response, NextFunction } from "express";
import StateController from "../controllers/state.c";

export default class StateRoutes {
  public stateController: StateController = new StateController();

  public routes(app: Application) {
    app.route("/api/state").get(this.stateController.getAllState);

    app.route("/api/states/:countryCode").get(this.stateController.getState);

    app.route("/api/state").post(this.stateController.addState);
    // app
    //   .route("/state")
    //   .post(async (req: Request, res: Response, next: NextFunction) => {
    //     try {
    //       //   const stateList = req.body;

    //       const addedState = await State.insertMany(stateList);
    //       // console.log("Added State :", addedState);

    //       //   const result = await state.save();
    //       res
    //         .status(200)
    //         .json({
    //           message: ` ${addedState.length} State Added Successfully`,
    //         });
    //     } catch (err) {
    //       console.log(err);
    //       next(err);
    //     }
    //   });
  }
}
