export const noop = () => {};
export const now = () => Date.now();
export const timestamp = () => +Date.now();
export const hasOwn = <T extends object, K extends keyof T>(val: T, key: K): key is K => Object.prototype.hasOwnProperty.call(val, key);
