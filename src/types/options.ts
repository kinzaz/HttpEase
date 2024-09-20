export type Input = string | Request | URL;

export type HttpMethod = "get" | "post" | "put" | "patch" | "head" | "delete";

export interface Options
  extends EaseOptions,
    Omit<RequestInit, "headers" | "method"> {
  method?: HttpMethod;
  headers?: HeadersInit;
}

export type InternalOptions = Options;

export type EaseOptions = {
  /**
	Shortcut for sending JSON. Use this instead of the `body` option.

	Accepts any plain object or value, which will be `JSON.stringify()`'d and sent in the body with the correct header set.
	*/
  json?: unknown;
};
