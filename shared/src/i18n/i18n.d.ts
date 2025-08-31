import "i18next";
import { Resources } from "shared/src/i18n/resources";
import en from './locales/en/en.json';


declare module 'i18next' {

  type DotPrefix<T extends string, U extends string> =
    T extends "" ? U : `${T}.${U}`;

  type NestedKeys<T, Prefix extends string = ""> = {
    [K in keyof T & string]: T[K] extends object
    ? DotPrefix<Prefix, K> | NestedKeys<T[K], DotPrefix<Prefix, K>>
    : DotPrefix<Prefix, K>;
  }[keyof T & string];


  export interface TFunctionExt extends TFunction {
    (key: NestedKeys<typeof en>, options?: any): string;

  }
  interface CustomTypeOptions {
    resources: Resources
  }
}

