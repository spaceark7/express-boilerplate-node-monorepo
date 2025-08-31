import i18next, { type i18n as I18nInstance } from "i18next";
import Backend from "i18next-fs-backend";
import { LanguageDetector } from "i18next-http-middleware"; // 👈 important
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);




export const i18n: I18nInstance = i18next.createInstance();

i18n
  .use(Backend)
  .use(LanguageDetector) // 👈 add this
  .init({
    backend: {
      loadPath: join(__dirname, "locales/{{lng}}/{{lng}}.json"),
    },
    fallbackLng: "en",
    preload: ["en", "id"],
    detection: {
      order: ["header", "querystring", "cookie"],
      caches: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });
