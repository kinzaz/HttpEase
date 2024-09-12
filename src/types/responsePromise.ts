import { EaseResponse } from "./response";

export type ResponsePromise<T = unknown> = {
  arrayBuffer: () => Promise<ArrayBuffer>;

  blob: () => Promise<Blob>;

  formData: () => Promise<FormData>;

  /**
  	@example
	```
	import ease from 'ease';

	const json = await ease(…).json();
	```

	@example
	```
	import ease from 'ease';

	interface Result {
		value: number;
	}

	const result1 = await ease(…).json<Result>();
	// or
	const result2 = await ease<Result>(…).json();
	```
	*/
  json: <J = T>() => Promise<J>;
  text: () => Promise<string>;
} & Promise<EaseResponse<T>>;
