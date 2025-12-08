export interface ContentfulField {
  "en-US": string;
}

export interface ContentfulIntegerField {
  "en-US": number;
}

export interface VacancyFields {
  masjid: ContentfulField;
  city: ContentfulField;
  address: ContentfulField;
  requirements: ContentfulField;
  contactName: ContentfulField;
  contactMobileNumber: ContentfulField;
  details: ContentfulField;
  slug?: ContentfulField;
  numberOfImams?: ContentfulIntegerField;
  country?: ContentfulField;
  contact2Name?: ContentfulField;
  contact2Number?: ContentfulField;
}

export interface ContentfulEntry {
  fields: VacancyFields;
  sys: {
    id: string;
    [key: string]: any;
  };
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
