export function isDefined<T>(x: T | undefined): x is T {
  return typeof x !== `undefined`;
}

export function isNotNull<T>(x: T | null): x is T {
  return x !== null;
}

export function isNotFalse<T>(x: T | false): x is T {
  return x !== false;
}
