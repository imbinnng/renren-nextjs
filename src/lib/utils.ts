import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type VariantProps<T> = T[keyof T] extends infer K
  ? K extends string
    ? T[K] extends Record<string, unknown>
      ? VariantProps<T[K]>
      : never
    : never
  : never;