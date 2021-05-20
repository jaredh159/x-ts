# x-ts-utils

A modest little Typescript helper library. Currently, consists of 3 helper functions, and
a `Result<Value, Error>` type, mostly for getting type-safety when doing functional
things:

```ts
export function isDefined<T>(x: T | undefined): x is T {
  return typeof x !== `undefined`;
}

export function isNotNull<T>(x: T | null): x is T {
  return x !== null;
}

export function isNotFalse<T>(x: T | false): x is T {
  return x !== false;
}

export type Result<Value, Error = string> =
  | {
      success: true;
      value: Value;
    }
  | {
      success: false;
      error: Error;
    };
```
