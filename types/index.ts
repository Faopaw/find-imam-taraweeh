import { Entry } from "contentful-management";

// Contentful types
export interface ContentfulField {
  'en-US': string;
}

export interface ContentfulFields {
  masjid: ContentfulField;
  city: ContentfulField;
  address: ContentfulField;
  requirements: ContentfulField;
  contactName: ContentfulField;
  contactMobileNumber: ContentfulField;
  details: ContentfulField;
  sys: {
    id: string;
  };
}

export interface ContentfulEntry {
  fields: ContentfulFields;
  [key: string]: any;
}

export interface ContentfulResponse {
  items: ContentfulEntry[];
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
  requireddata: ContentfulEntry;
}

export interface VacanciesProps {
  data: ContentfulEntry[];
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
