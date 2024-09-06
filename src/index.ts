import { requestMethods } from "./core/constants";
import { Ease } from "./core/Ease";
import { EaseInstance } from "./types/ease";
import { Input, Options } from "./types/options";

const createInstance = () => {
  // TODO.types
  const ease: any = (input: Input, options: Options = {}) =>
    Ease.create(input, options);

  for (const method of requestMethods) {
    ease[method] = (input: Input, options?: Options) =>
      Ease.create(input, { ...options, method });
  }

  return ease as EaseInstance;
};

const ease = createInstance();

export default ease;
