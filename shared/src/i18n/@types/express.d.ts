// import { Request } from 'express';
// // shared/i18n/express.d.ts
// import "express-serve-static-core";
// import type { TFunctionExt } from "shared/src/i18n/@types/t-function-ext";


// declare module "express-serve-static-core" {
//   interface Request {
//     t: TFunctionExt;
//     language: string; // you can also re-declare this safely
//   }


// }


// shared/src/i18n/@types/express.d.ts
import { TFunction } from 'i18next';
import type { TFunctionExt } from './t-function-ext';

declare global {
  namespace Express {
    interface Request {
      t: TFunctionExt;
      language: string;
      languages: string[];
      i18n: {
        language: string;
        languages: string[];
        changeLanguage(lng: string): Promise<TFunction>;
        t: TFunctionExt;
        exists(key: string, options?: any): boolean;
      };
    }
  }
}

export { };