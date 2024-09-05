### Examples usage

```ts
import ease from "ease";

const response = await ky("https://example.com");
const response2 = await ky.get("https://example.com");
const response3 = await ky.post("https://example.com");
const response4 = await ky("https://example.com", {
  method: "delete",
});
```
