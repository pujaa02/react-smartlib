import * as express from "express";
const route = express.Router();
import userauthenticate from "../controller/userauthenticate";
import bookhome from "../controller/bookhome";

route.post("/register", userauthenticate.register);
route.get("/activatecheck/:user_id", userauthenticate.activatecheck);
route.get("/deleteuser/:id", userauthenticate.deleteuser);
route.post("/password/:user_id", userauthenticate.password);
route.get("/checkuser/:email/:pass", userauthenticate.checkuser);
route.get("/finduser/:email", userauthenticate.finduser);


route.get("/getdata/:user_id", bookhome.getdata);


export default route;
