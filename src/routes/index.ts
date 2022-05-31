import { Router } from "express";

import { CreateClientController } from "../controllers/CreateClientController";
import { CreateAccidentController } from "../controllers/CreateAccidentController";
import { DeleteGameController } from "../controllers/DeleteClientController";
import { DeleteAccidentController } from "../controllers/DeleteAccidentController";
import { GetAllGamesController } from "../controllers/GetAllClientsController";
import { GetAllPlatformsController } from "../controllers/GetAllAccidentsController";
import { GetOneGameController } from "../controllers/GetOneClientController";
import { GetOnePlatformsController } from "../controllers/GetOneAccidentController";
import { UpdateGameController } from "../controllers/UpdateClientController";
import { UpdatePlatformsController } from "../controllers/UpdateAccidentController";

const routes = Router();

routes
  .route("/accidents")
  // .get(new GetAllPlatformsController().handle)
  .post(new CreateAccidentController().handle);

// routes
//   .route("/accidents/:id")
//   .get(new GetOnePlatformsController().handle)
//   .put(new UpdatePlatformsController().handle)
//   .delete(new DeletePlatformsController().handle);

routes
  .route("/clients")
  //   .get(new GetAllGamesController().handle)
  .post(new CreateClientController().handle);

// routes
//   .route("/clients/:id")
//   .get(new GetOneGameController().handle)
//   .put(new UpdateGameController().handle)
//   .delete(new DeleteGameController().handle);

export { routes };
