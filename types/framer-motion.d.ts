declare module 'framer-motion' {
  import { ComponentType, ReactNode } from 'react';

  // Minimal ambient declarations for framer-motion used in the project
  export const motion: Record<string, ComponentType<Record<string, unknown>>>;
  export const AnimatePresence: ComponentType<{ children?: ReactNode }>;

  // Lightweight hook and type shims used in this project
  export type MotionValue<T = number> = {
    get(): T;
    set(v: T): void;
  };

  export function useMotionValue<T = number>(initial: T): MotionValue<T>;
  export function useSpring<T = number>(
    value: MotionValue<T> | T,
    config?: Record<string, unknown>
  ): MotionValue<T>;
  export function useTransform(
    input: MotionValue<number>,
    inputRange: number[] | ((v: number) => number),
    outputRange?: number[]
  ): MotionValue<number>;

  const framerMotionModule: {
    motion: typeof motion;
    AnimatePresence: typeof AnimatePresence;
    useMotionValue: typeof useMotionValue;
    useSpring: typeof useSpring;
    useTransform: typeof useTransform;
  };
  export default framerMotionModule;
}
