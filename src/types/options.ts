export type Input = string | Request | URL;

export type HttpMethod = "get" | "post" | "put" | "patch" | "head" | "delete";

export interface Options {
  method?: HttpMethod;
}

export type InternalOptions = Options;
