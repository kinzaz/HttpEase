export type EaseResponse<T = unknown> = {
  json: <J = T>() => Promise<J>;
} & Response;
