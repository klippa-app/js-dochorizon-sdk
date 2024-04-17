import { ImageRenderOptions } from "../Services/DocumentToolkit/DocumentToolkit.types";
import { Webhook } from "../Services/Capturing/Async.types";
import { RelationMatching } from "../Services/Capturing/Financial/Financial.types";

/**
 * Preset object to send to an endpoint
 *
 * @property slug - string indicating which preset configuration to use for the API call
 *
 * @interface
 */
type Preset = {
  slug: string;
};

/**
 * Object representing a keyword matching rule
 *
 * @property id - id to identify the rule
 * @property keywords - a list of strings for each keyword to match with
 * @property regex - a regex to use to look for keywords to match with
 *
 * @interface
 */
type Rule = {
  id: string;
  keywords?: string[];
  regex?: string;
};

/**
 * Object containing either keyword_matching, relation_matching, or both, to use in an API call
 *
 * @property keyword_matching - Object containing a field called rules, that holds a list of
 * keyword_matching rules to be used in the request
 * @see {@link Rule}
 *
 * @property relation_matching - Object containing assignments and relation data to be used for
 * the request
 * @see {@link RelationMatching}
 *
 * @interface
 */
type Components = {
  keyword_matching?: { rules: Rule[] };
  relation_matching?: RelationMatching;
};

/**
 * Object to configure hitl for an API call
 *
 * @property slug - slug indicating which hitl configuration to use
 *
 * @interface
 */
type Hitl = {
  slug: string;
};

/**
 * A type defining what the options of an API call could be
 * The fields are all optional because the actual fields are dependent of a certain endpoint.
 * In the financial model capture endpoint, FinancialOptions are expected. These options are
 * later on added to a JSON body that consists of a Document type and an AdditionalBodyData type
 *
 * @property preset - a preset object containing a slug of a preset to be used in the request
 * @see {@link Preset}
 *
 * @property components - an object containing either keyword_matching, relation_matching, or both
 * @see {@link Components}
 *
 * @property output_target - a string indicating whether to output the result as "Base64" or
 * "StorageAPI"
 *
 * @property page_ranges - a string of list of strings indicating which range of pages to use
 * for this request
 *
 * @property renders - options to apply to a render operation
 * @see {@link ImageRenderOptions}
 *
 * @property hitl - Human In The Loop object containing a slug of a hitl configuration to be
 * used in the request
 * @see {@link Hitl}
 *
 * @property webhook - Webhook configuration object to be able to use webhook in an async request
 * @see {@link Webhook}
 *
 * @interface
 */
export type AdditionalBodyData = {
  preset?: Preset;
  components?: Components;
  output_target?: "Base64" | "StorageAPI";
  page_ranges?: string[] | string;
  renders?: ImageRenderOptions[] | ImageRenderOptions;
  hitl?: Hitl;
  webhook?: Webhook;
};
