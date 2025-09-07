import i18next, { type i18n as I18nInstance } from "i18next";
import Backend from "i18next-fs-backend";
import { LanguageDetector } from "i18next-http-middleware"; // 👈 important
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { lstatSync, readdirSync } from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const localesFolder = join(__dirname, "./locales");

const preloadLangs = readdirSync(localesFolder).filter((fileName) => {
  const joinedPath = join(localesFolder, fileName);
  return lstatSync(joinedPath).isDirectory();
});


export const i18n: I18nInstance = i18next.createInstance();

// Export the type for easier consumption
export type { TFunctionExt } from './@types/t-function-ext';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .init({
    // debug: true,
    backend: {
      loadPath: join(__dirname, "locales/{{lng}}.json"),
      // Also check nested directories if needed
      addPath: join(__dirname, "locales/{{lng}}/{{ns}}.missing.json"),
    },

    fallbackLng: "en",
    preload: preloadLangs,
    detection: {
      order: ["header", "querystring", "cookie"],
      caches: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });