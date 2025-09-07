import { i18n } from './index';
import type { TFunctionExt } from './@types/t-function-ext';

export { i18n };
export type { TFunctionExt };

// Export a helper function to create a typed t function
export function createTypedTFunction(t: any): TFunctionExt {
  return t as TFunctionExt;
}
