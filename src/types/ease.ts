import { Input, Options } from "./options";

export type EaseInstance = {
  /**
	Fetch the given `url`.

	@param url - `Request` object, `URL` object, or URL string.
	@returns A promise with `Body` method added.

	@example
	```
	import ease from 'ease';

	const json = await ease('https://example.com', {json: {foo: true}}).json();

	console.log(json);
	//=> `{data: '🦄'}`
	```
	*/
  (url: Input, options?: Options): Promise<Response>;

  /**
	Fetch the given `url` using the option `{method: 'get'}`.

	@param url - `Request` object, `URL` object, or URL string.
	@returns A promise with `Body` methods added.
	*/
  get: (url: Input, options?: Options) => Promise<Response>;

  /**
	Fetch the given `url` using the option `{method: 'post'}`.

	@param url - `Request` object, `URL` object, or URL string.
	@returns A promise with `Body` methods added.
	*/
  post: (url: Input, options?: Options) => Promise<Response>;

  /**
	Fetch the given `url` using the option `{method: 'put'}`.

	@param url - `Request` object, `URL` object, or URL string.
	@returns A promise with `Body` methods added.
	*/
  put: (url: Input, options?: Options) => Promise<Response>;

  /**
	Fetch the given `url` using the option `{method: 'delete'}`.

	@param url - `Request` object, `URL` object, or URL string.
	@returns A promise with `Body` methods added.
	*/
  delete: (url: Input, options?: Options) => Promise<Response>;

  /**
	Fetch the given `url` using the option `{method: 'patch'}`.

	@param url - `Request` object, `URL` object, or URL string.
	@returns A promise with `Body` methods added.
	*/
  patch: (url: Input, options?: Options) => Promise<Response>;

  /**
	Fetch the given `url` using the option `{method: 'head'}`.

	@param url - `Request` object, `URL` object, or URL string.
	@returns A promise with `Body` methods added.
	*/
  head: (url: Input, options?: Options) => Promise<unknown>;
};
