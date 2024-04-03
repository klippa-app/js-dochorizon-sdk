type OutputTarget = "Base64" | "StorageAPI";

type MergeOptions = {
  //Whether to output the results as Base64 or save it to DocHorizon storage
  output_target: OutputTarget;
};

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
