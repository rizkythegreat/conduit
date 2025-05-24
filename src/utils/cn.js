import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function (...args) {
  return twMerge(clsx(...args));
}