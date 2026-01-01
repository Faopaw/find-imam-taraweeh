// export const CONTENTFUL_ENVIRONMENT = "master";
export const VACANCY_ENTRY_TYPE = "requestType";
export const NEXT_PUBLIC_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
export const DEVELOPMENT_MODE = process.env.NODE_ENV === "development";
export const PRODUCTION_MODE = process.env.NODE_ENV === "production";
export const ISR_REFRESH_TIME = 60 * 60 * 24; // 24 hours