import * as express from "express";
import * as cors from "cors";
import * as morgan from "morgan";
import * as helmet from "helmet";

import { CityRoutes, CountryRoutes, StateRoutes } from "./routes";
import { errorHandler } from "./middlewares";

class App {
  public app: express.Application;

  public countryRoutes: CountryRoutes = new CountryRoutes();
  public stateRoutes: StateRoutes = new StateRoutes();
  public cityRoutes: CityRoutes = new CityRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.setRoutes();
    this.app.use(errorHandler);
  }

  private config() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(morgan("tiny"));
  }

  private setRoutes() {
    this.countryRoutes.routes(this.app);
    this.stateRoutes.routes(this.app);
    this.cityRoutes.routes(this.app);
  }
}

export default new App().app;
