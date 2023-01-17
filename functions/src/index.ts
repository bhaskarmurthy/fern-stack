/* eslint-disable import/prefer-default-export */
import * as functions from "firebase-functions";
import app from "./api";

export const api = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  app(request, response);
});
