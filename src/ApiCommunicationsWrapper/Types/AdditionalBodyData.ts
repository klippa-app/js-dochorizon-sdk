import { ImageRenderOptions } from "../Services/DocumentToolkit/DocumentToolkit.types";
import { Webhook } from "../Services/Capturing/Async.types";
import { RelationMatching } from "../Services/Capturing/Financial/Financial.types";

type Preset = {
  slug: string;
};

type Rule = {
  id: string;
  keywords?: string[];
  regex?: string;
};

type Components = {
  keyword_matching?: { rules: Rule[] };
  relation_matching?: RelationMatching;
};

type Hitl = {
  slug: string;
};

export type AdditionalBodyData = {
  preset?: Preset;
  components?: Components;
  output_target?: "Base64" | "StorageAPI";
  page_ranges?: string[] | string;
  renders?: ImageRenderOptions[] | ImageRenderOptions;
  hitl?: Hitl;
  webhook?: Webhook;
};
