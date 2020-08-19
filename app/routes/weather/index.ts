import { Router } from "express";

import * as controller from "./weather.controller";

const router = Router();

router.get("/location/:weoid", controller.getLocation);

export default router;
