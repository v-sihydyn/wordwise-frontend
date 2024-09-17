import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type ToPaths<T, P extends string = ''> =
  T extends Record<string, unknown>
    ? {
        [K in keyof T]: K extends 'data' | 'attributes' ? ToPaths<T[K], P> : ToPaths<T[K], `${P}${K & string}.`>;
      }[keyof T]
    : { path: P extends `${infer P}.` ? P : never; type: T };

type FromPaths<T extends { path: string; type: unknown }> = {
  [P in T['path']]: Extract<T, { path: P }>['type'];
};

export type Flatten<T> = FromPaths<ToPaths<T>>;

export function flattenAttributes(data: unknown): unknown {
  // Check if data is a plain object; return as is if not
  if (typeof data !== 'object' || data === null || data instanceof Date || typeof data === 'function') {
    return data;
  }

  // If data is an array, apply flattenAttributes to each element and return as array
  if (Array.isArray(data)) {
    return data.map(flattenAttributes);
  }

  // Initialize an object with an index signature for the flattened structure
  const flattened: { [key: string]: unknown } = {};

  // Iterate over each key in the object
  // @ts-ignore
  for (const key of data) {
    // Skip inherited properties from the prototype chain
    if (!data.hasOwnProperty(key)) continue;

    // If the key is 'attributes' or 'data', and its value is an object, merge their contents
    // @ts-ignore
    if ((key === 'attributes' || key === 'data') && typeof data[key] === 'object' && !Array.isArray(data[key])) {
      // @ts-ignore
      Object.assign(flattened, flattenAttributes(data[key]));
    } else {
      // For other keys, copy the value, applying flattenAttributes if it's an object
      // @ts-ignore
      flattened[key] = flattenAttributes(data[key]);
    }
  }

  return flattened;
}

export function getStrapiURL() {
  return process.env.NEXT_PUBLIC_STRAPI_URL ?? 'http://0.0.0.0:1337';
}

export function getStrapiMedia(url: string | null) {
  if (url == null) return null;
  if (url.startsWith('data:')) return url;
  if (url.startsWith('http') || url.startsWith('//')) return url;
  return `${getStrapiURL()}${url}`;
}
