// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// 这个 cn 函数是所有高级 Tailwind 项目的标配
// 它的作用：合并类名，并智能解决冲突
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
