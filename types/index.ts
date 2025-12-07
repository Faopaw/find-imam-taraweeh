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
  extraDetails: ContentfulField;
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
export interface RegisterFormValues {
  contactName: string;
  contactNumber: string;
  masjid: string;
  city: string;
  address: string;
  requirements: string;
  extraDetails: string;
  terms: string | string[];
}

// Component prop types
export interface VacancyCardProps {
  requireddata: ContentfulEntry;
}

export interface VacanciesProps {
  data: string;
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
