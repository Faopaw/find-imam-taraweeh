import type { Entry } from "contentful";

// VacancyFields represents the resolved fields from Contentful Delivery API
// The Delivery API automatically resolves fields, so they are strings/numbers directly
export interface VacancyFields {
  masjid: string;
  city: string;
  address: string;
  requirements: string;
  contactName: string;
  contactMobileNumber: string;
  details: string;
  slug?: string;
  numberOfImams?: number;
  country?: string;
  contact2Name?: string;
  contact2Number?: string;
}

export interface ContentfulEntry {
  fields: VacancyFields;
  sys: {
    id: string;
    [key: string]: any;
  };
  [key: string]: any;
}

// Form types
export interface VacancyFormValues {
  contactName: string;
  contactNumber: string;
  masjid: string;
  city: string;
  address: string;
  requirements: string;
  details: string;
  terms: string | string[];
}

// Component prop types
export interface VacancyCardProps {
  requireddata: Entry<VacancyFields>;
}

export interface VacanciesProps {
  data: Entry<VacancyFields>[];
}

export interface ProfileComponentProps {
  data: {
    name?: string;
    email?: string;
    picture?: string;
    email_verified?: boolean;
    family_name?: string;
    given_name?: string;
    locale?: string;
    [key: string]: any;
  };
  user: any;
}
