import { Request, Response, NextFunction } from "express";

const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  const message = "Endpoint Not Found";
  res.status(404).send(message);
};

export default notFoundHandler;
