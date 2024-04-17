type OutputTarget = "Base64" | "StorageAPI";

/**
 * Object containing merge options for the Merge functionality of the document toolkit
 *
 * @property output_target - String indicating whether to output the result as "Base64" or as a
 * DocHorizon storage id
 *
 * @interface
 */
type MergeOptions = {
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
 * @interface
 */
type ImageRenderOptions = {
  height?: number;
  page_ranges?: string[] | string;
  width?: number;
};

/**
 * Options to send to the render operation
 *
 * @property output_data - whether to output the result as "Base64" or save is as a "StorageAPI" id
 * @see {@link OutputTarget}
 *
 * @property renders - list of ImageRender options, or one object of imageRenderOptions
 * @see {@link ImageRenderOptions}
 *
 * @interface
 */
type RenderOptions = {
  output_target?: OutputTarget;
  renders: ImageRenderOptions[] | ImageRenderOptions;
};

/**
 * Options to send to the split operation
 *
 * @property output_target -  whether to output the result as "Base64" or save it as a
 * "StorageAPI" id
 * @see {@link OutputTarget}
 *
 * @property page_ranges - a list of strings or a string containing information on how the
 * document should be split
 */
type SplitOptions = {
  output_target?: OutputTarget;
  
  page_ranges?: string[] | string;
};

type MergeOutput = {
  output: {
    content_type: string;
    data: string;
    file_id: string;
  };
};

/**
 * typical output data structure
 *
 * @property content_type - content type of the file
 * @property data - datastring of the file in base64
 * @property file_id - if set, the file_id of the file
 *
 * @interface
 */
export type Output = {
  content_type: string;
  data: string;
  file_id: string;
};

/**
 * type containing a document with output data
 *
 * @property document - document object containing a field called output with Output data
 * @see {@link Output}
 *
 * @interface
 */
export type Document = {
  document: {
    output: Output;
  };
};

/**
 * Render object that contains output data and rendered pages
 *
 * @property output - object containing output data
 * @see {@link Output}
 *
 * @property page_range - string indicating which page range this render is made from
 * @property pages - object containing page metadata such as height, page_number, point_to_pixel
 * ratio, width, x coordinate and y coordinate
 *
 * @interface
 *
 */
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

/**
 * The result of the render endpoint
 *
 * @property renders - a list of Render objects
 * @see {@link Render}
 *
 * @interface
 */
export type RenderResult = {
  renders: Render[];
};

/**
 * pluralized version of the Document object, containing a page_range field for each returned
 * document.
 *
 * @property documents - list of objects containing an Output and a page_range string.
 * @see {@link Output}
 * @see {@link Document}
 *
 * @interface
 */
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
