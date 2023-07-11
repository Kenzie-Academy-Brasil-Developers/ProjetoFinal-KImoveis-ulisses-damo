import validateBody from "./validateBody.middleware";
import handleError from "./handleError.middleware";
import { idExists } from "./idExists.middleware";
import { isAdmin } from "./isAdmin.middleware";
import { isAdminOrOwner } from "./isAdminOrOwner.middleware";
import { uniqueEmail } from "./uniqueEmail.middleware";
import { uniqueCategory } from "./uniqueCategory.middleware";
import { verifyToken } from "./verifyToken.middleware";
import { verifyRealEstateMiddleware } from "./verifyRealEstate.middleware";
import { verifyUserMiddleware } from "./verifyUser.middleware";
import { realEstateExists } from "./realEstateExists.middleware";
import { userIdExists } from "./userIdExists.middleware";

export default {
  validateBody,
  handleError,
  idExists,
  isAdmin,
  isAdminOrOwner,
  uniqueCategory,
  uniqueEmail,
  verifyToken,
  verifyRealEstateMiddleware,
  verifyUserMiddleware,
  realEstateExists,
  userIdExists
};
