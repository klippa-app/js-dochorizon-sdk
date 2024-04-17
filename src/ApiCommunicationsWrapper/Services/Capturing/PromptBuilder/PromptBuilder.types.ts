type Configuration = {
  name: string;
  slug: string;
};

export { Configuration };

/**
 * How a prompt or model is defined in terms of naming and identifying
 *
 * @property name - name of the configuration
 * @property slug - slug of the configuration
 *
 * @interface
 */
export type ModelPromptBuilderConfigResult = {
  name: string;
  slug: string;
};
