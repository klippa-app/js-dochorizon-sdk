import { AsyncOptions } from "../Async.types";

type keyword_matching_regex = string;
type keyword_matching_keywords = string[];

/**
 * object to configure keyword matching for an api call
 *
 * @property id - string to identify the keyword matching rule
 * @property keywords - either a list of keywords or a string indicating a regex to use to look
 * for keywords
 */
type keyword_matching = {
  //an id to identify the match
  id: string;

  //supply a list of keywords OR provide a regex string
  keywords: keyword_matching_keywords | keyword_matching_regex;
};

/**
 * Object used to configure a merchant/customer relation type
 *
 * @property fallback_id - id of a relation to use as a fallback
 * @property force_id - id of a relation to use no matter what
 * @property groups - a list of groups that this assignments belong to
 */
type Assignment = {
  //id of relation to use as a fallback
  fallback_id?: string;
  //id of a relation to use no matter what
  force_id?: string;
  //what groups does this assignment belong to
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
 */
type Assignments = {
  //customer assignment object
  customer: Assignment;
  //merchant assignment object
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
 */
type RelationMatching = {
  //determine what is considered a customer and what is considered a merchant
  assignments: Assignments;
  //information about the relation(s) to match
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
 */
type FinancialOptions = {
  //A string indicating which preset to use
  preset?: string;

  //A list of keyword matching objects. Add one {object} for each rule you want to apply
  keyword_matching?: keyword_matching[];

  //A relation matching configuration to add to the request
  relation_matching?: RelationMatching;
};

/**
 * Financial Async Options is a combination of Financial Options and Async Options
 * @see {@link FinancialOptions}
 * @see {@link AsyncOptions}
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
 */
export type FinancialPresetsResult = {
  /**
   * A list of components found for the given preset
   */
  components: FinancialPresetComponent[];
  /**
   * The name of the preset
   */
  name: string;
  /**
   * the slug of the preset
   */
  slug: string;
};

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
