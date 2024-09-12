import { Input, InternalOptions, Options } from "../types/options";
import { ResponsePromise } from "../types/responsePromise";
import { ObjectEntries } from "../utils/types";
import { responseTypes } from "./constants";

export class Ease {
  static create(input: Input, options: Options) {
    const ease = new Ease(input, options);

    const function_ = async () => {
      let response = await ease._fetch();

      if (!response.ok) {
        throw new Error("Response is not ok");
      }

      return response;
    };

    const result = function_() as ResponsePromise;

    for (const [type] of Object.entries(responseTypes) as ObjectEntries<
      typeof responseTypes
    >) {
      result[type] = async () => {
        const awaitedResult = await result;
        return awaitedResult[type]();
      };
    }

    return result;
  }

  public request: Request;
  protected _input: Input;
  protected _options: InternalOptions;

  constructor(input: Input, options: Options = {}) {
    this._input = input;
    this._options = { ...options };
    this.request = new globalThis.Request(input);
  }

  protected _fetch() {
    return fetch(this.request, this._options);
  }
}
