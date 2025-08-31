// shared/i18n/express.d.ts
import "express-serve-static-core";
import { TFunction, type TFunctionExt } from "i18next";



declare module "express-serve-static-core" {
  interface Request {
    t: TFunctionExt;
    language: string;
  }
}
