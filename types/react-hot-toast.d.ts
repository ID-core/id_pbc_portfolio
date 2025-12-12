declare module 'react-hot-toast' {
  import { ComponentType } from 'react';
  
  export function toast(message: string, opts?: Record<string, unknown>): string;
  export namespace toast {
    function success(message: string, opts?: Record<string, unknown>): string;
    function error(message: string, opts?: Record<string, unknown>): string;
  }
  export const Toaster: ComponentType<Record<string, unknown>>;
  const toastModule: { toast: typeof toast; Toaster: typeof Toaster };
  export default toastModule;
}
