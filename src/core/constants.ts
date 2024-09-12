export const requestMethods = [
  "get",
  "post",
  "put",
  "patch",
  "head",
  "delete",
] as const;

export const responseTypes = {
  json: "application/json",
  text: "text/*",
  formData: "multipart/form-data",
  arrayBuffer: "*/*",
  blob: "*/*",
} as const;
