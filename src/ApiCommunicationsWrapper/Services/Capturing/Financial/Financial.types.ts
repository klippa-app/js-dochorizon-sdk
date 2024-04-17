import { AsyncOptions } from "../Async.types";

type keyword_matching_regex = string;
type keyword_matching_keywords = string[];

/**
 * object to configure keyword matching for an api call
 *
 * @property id - string to identify the keyword matching rule
 * @property keywords - either a list of keywords or a string indicating a regex to use to look
 * for keywords
 *
 * @interface
 */
type keyword_matching = {
  id: string;
  
  keywords: keyword_matching_keywords | keyword_matching_regex;
};

/**
 * Object used to configure a merchant/customer relation type
 *
 * @property fallback_id - id of a relation to use as a fallback
 * @property force_id - id of a relation to use no matter what
 * @property groups - a list of groups that this assignments belong to
 *
 * @interface
 */
type Assignment = {
  fallback_id?: string;
  force_id?: string;
  groups: string[];
};

/**
 * type to determine the difference between customer and merchant data
 *
 * @property customer - customer assignment object
 * @see {@link Assignment}
 *
 * @property merchant - merchant assignment object
 * @see {@link Assignment}
 *
 * @interface
 */
type Assignments = {
  customer: Assignment;
  merchant: Assignment;
};

/**
 * Type containing fields to use to search for relation
 * the id and groups field are required
 *
 * @property id - string to identify the relation
 * @proeprty groups - list of strings to apply this Relation data to
 * @property bank_account_number
 * @property city
 * @property coc_number
 * @property country
 * @property email
 * @property name
 * @property phone
 * @property street_name
 * @property street_number
 * @property vat_number
 * @property website
 * @property zipcode
 *
 * @interface
 */
type Relation = {
  id: string;
  groups: string[];
  bank_account_number?: string;
  city?: string;
  coc_number?: string;
  country?: string;
  email?: string;
  name?: string;
  phone?: string;
  street_name?: string;
  street_number?: string;
  vat_number?: string;
  website?: string;
  zipcode?: string;
};

/**
 * Type of data to send if relation matching is required in a request
 *
 * @property assignments - Assignments object to determine what is considered a customer and
 * what is considered a merchant
 * @see {@link Assignments}
 *
 * @property relations - A list of relation objects, each containing information about the
 * relation(s) to match
 * @see {@link Relation}
 *
 * @interface
 */
type RelationMatching = {
  assignments: Assignments;
  relations: Relation[];
};

/**
 * object containing any options to send to the financial endpoint
 *
 * @property preset - string indicating which preset to use
 * @property keyword_matching - list of keyword matching objects to configure keyword_matching
 * @see {@link keyword_matching}
 * @property relation_matching - a relation matching object to configure relation_matching
 * @see {@link RelationMatching}
 *
 * @interface
 */
type FinancialOptions = {
  preset?: string;
  keyword_matching?: keyword_matching[];
  relation_matching?: RelationMatching;
};

/**
 * Financial Async Options is a combination of Financial Options and Async Options
 * @see {@link FinancialOptions}
 * @see {@link AsyncOptions}
 *
 * @interface
 */
type FinancialAsyncOptions = FinancialOptions & AsyncOptions;

type Configuration = {
  name: string;
  slug: string;
  components: Component[];
};

type Component = {
  name: string;
  options: { enabled: boolean };
};

/**
 * The results obtained from the financial presets endpoint
 * @property components - a list of components found for the given preset
 * @see {@link FinancialPresetComponent}
 *
 * @property name - name of the found preset
 * @property slug - slug of the found preset
 *
 * @interface
 */
export type FinancialPresetsResult = {
  components: FinancialPresetComponent[];
  name: string;
  slug: string;
};

/**
 * Object depicting a financial preset component
 *
 * @property name - name of the component
 * @property options - object containing a field whether the component is enabled
 *
 * @interface
 */
export type FinancialPresetComponent = {
  name: string;
  options: { enabled: boolean };
};

export {
  FinancialOptions,
  FinancialAsyncOptions,
  keyword_matching,
  Configuration,
  Component,
  Assignments,
  Assignment,
  Relation,
  RelationMatching,
};
