import { Input, InternalOptions, Options } from "../types/options";

export class Ease {
  static async create(input: Input, options: Options) {
    const ease = new Ease(input, options);

    const function_ = async () => {
      let response = await ease._fetch();

      if (!response.ok) {
        throw new Error("Response is not ok");
      }

      return response;
    };

    const result = function_();

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
