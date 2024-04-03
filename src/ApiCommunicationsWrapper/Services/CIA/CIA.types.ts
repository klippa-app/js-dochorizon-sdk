import countries from "i18n-iso-countries";

export type CountryCode = countries.Alpha2Code;

export type CiaOptions = {
  address_city?: string;
  address_municipality?: string;
  address_number?: string;
  address_postal_code?: string;
  address_state?: string;
  address_street_name?: string;
  coc_number?: string;
  company_name?: string;
  country_code: CountryCode;
  depth?: "entity" | "location" | "address";
  email?: string;
  fiscal_number?: string;
  iban?: string;
  phone?: string;
  po_box?: string;
  registration_number?: string;
  vat_number?: string;
  website?: string;
};
