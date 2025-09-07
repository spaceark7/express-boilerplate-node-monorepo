import "i18next";
import { Resources } from "./resources";
import en from "../locales/en.json";

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      en: {
        translation: typeof en & Resources;
      },
      id: {
        translation: typeof import('../locales/id.json') & Resources;
      }
    }
  }
}

