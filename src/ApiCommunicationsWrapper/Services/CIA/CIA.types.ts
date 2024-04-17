import countries from "i18n-iso-countries";

export type CountryCode = countries.Alpha2Code;


/**
 * Object containing search fields and other configuration options to send to the CIA service's
 * search function
 *
 * @property address_city
 * @property address_municipality
 * @property address_number
 * @property address_postal_code
 * @property address_state
 * @property address_street_name
 * @property coc_number
 * @property company_name
 * @property country_code
 * @property depth - choose the depth the results are returned as. Available options are entity,
 * location and address
 * @property email
 * @property fiscal_number
 * @property iban
 * @property phone
 * @property po_box
 * @property registration_number
 * @property vat_number
 * @property website
 *
 * @interface
 */
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
