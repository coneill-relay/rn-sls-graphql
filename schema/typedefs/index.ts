import { mergeTypeDefs } from "@graphql-tools/merge";

/**
 * Theres probably a better way to do this but
 * I'm unsure if using something like
 *
 * path.join(__dirname, './')
 *
 * Is going to work in a serverless environment.
 * I'd highly doubt it
 */
import action from "./action";
import branding from "./branding";
import client from "./client";
import consent from "./consent";
import disclaimer from "./disclaimer";
import inWireUpgrade from "./inWireUpgrade";
import launchedBy from "./launchedBy";
import message from "./message";
import productGroup from "./productGroup";
import wireMessage from "./wireMessage";

export default mergeTypeDefs([
  action,
  branding,
  client,
  consent,
  disclaimer,
  inWireUpgrade,
  launchedBy,
  message,
  productGroup,
  wireMessage,
]);
