import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * A utility function for merging and combining class names in Tailwind CSS.
 *
 * @param inputs - An array of class names or other class-like values to be merged.
 * @returns A string containing the merged class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
