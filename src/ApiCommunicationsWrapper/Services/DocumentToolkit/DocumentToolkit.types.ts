type OutputTarget = "Base64" | "StorageAPI";

/**
 * Object containing merge options for the Merge functionality of the document toolkit
 *
 * @property output_target - String indicating whether to output the result as "Base64" or as a
 * DocHorizon storage id
 */
type MergeOptions = {
  //Whether to output the results as Base64 or save it to DocHorizon storage
  output_target: OutputTarget;
};

/**
 * Object to give options to the image rendering operation
 *
 * @property height - height in px
 * @property page_ranges - string or list of strings indicating which page ranges to apply these
 * options to
 * @property width - width in px
 *
 */
type ImageRenderOptions = {
  height?: number;
  page_ranges?: string[] | string;
  width?: number;
};

type RenderOptions = {
  //Whether to output the results as Base64 or save it to DocHorizon storage
  output_target?: OutputTarget;
  renders: ImageRenderOptions[] | ImageRenderOptions;
};

type SplitOptions = {
  //Whether to output the results as Base64 or save it to DocHorizon storage
  output_target?: OutputTarget;

  //How to split the pages
  page_ranges?: string[] | string;
};

type MergeOutput = {
  output: {
    content_type: string;
    data: string;
    file_id: string;
  };
};

export type Output = {
  content_type: string;
  data: string;
  file_id: string;
};

export type Document = {
  document: {
    output: Output;
  };
};

export type Render = {
  output: Output;
  page_range: string;
  pages: {
    height: number;
    page_number: number;
    point_to_pixel_ratio: number;
    width: number;
    x: number;
    y: number;
  };
};

export type RenderResult = {
  renders: Render[];
};

export type Documents = {
  documents: {
    output: Output;
    page_range: string;
  }[];
};

export {
  MergeOptions,
  SplitOptions,
  RenderOptions,
  ImageRenderOptions,
  MergeOutput,
};
