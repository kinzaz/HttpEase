### Examples usage

```ts
import ease from "ease";

const response = await ease("https://example.com");
const response2 = await ease.get("https://example.com");
const response3 = await ease.post("https://example.com", {
  body: JSON.stringify({ test: 999 }),
  header: {
    "my-header": null,
  },
});
const response4 = await ease("https://example.com", {
  method: "delete",
});
```
