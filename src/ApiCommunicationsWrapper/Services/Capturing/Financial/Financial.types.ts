import { AsyncOptions } from "../Async.types";

type keyword_matching_regex = string;
type keyword_matching_keywords = string[];
type keyword_matching = {
  //an id to identify the match
  id: string;

  //supply a list of keywords OR provide a regex string
  keywords: keyword_matching_keywords | keyword_matching_regex;
};

type Assignment = {
  //id of relation to use as a fallback
  fallback_id?: string;
  //id of a relation to use no matter what
  force_id?: string;
  //what groups does this assignment belong to
  groups: string[];
};

type Assignments = {
  //customer assignment object
  customer: Assignment;
  //merchant assignment object
  merchant: Assignment;
};

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

type RelationMatching = {
  //determine what is considered a customer and what is considered a merchant
  assignments: Assignments;
  //information about the relation(s) to match
  relations: Relation[];
};

type FinancialOptions = {
  //A string indicating which preset to use
  preset?: string;

  //A list of keyword matching objects. Add one {object} for each rule you want to apply
  keyword_matching?: keyword_matching[];

  //A relation matching configuration to add to the request
  relation_matching?: RelationMatching;
};

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

export type FinancialPresetsResult = {
  components: FinancialPresetComponent[];
  name: string;
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
