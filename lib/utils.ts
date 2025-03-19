import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getFirstImgSrcWithDOMParser = (html: string): string | null => {
  const imgSrcMatch = html.match(/<img[^>]+src=["'](.*?)["']/i);
  return imgSrcMatch ? imgSrcMatch[1] : null;
};