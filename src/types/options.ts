export type Input = string | Request | URL;

export type HttpMethod = "get" | "post" | "put" | "patch" | "head" | "delete";

export interface Options extends Omit<RequestInit, "headers" | "method"> {
  method?: HttpMethod;
  headers?: HeadersInit;
}

export type InternalOptions = Options;
