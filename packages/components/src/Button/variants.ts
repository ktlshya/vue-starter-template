import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const getButtonVariants = cva([
  'relative',
  'inline-flex items-center justify-center box-border',
  'border border-transparent rounded-md bg-neutral-200 px-[calc(var(--spacing)*4-1px)] h-8',
  'text-foreground-primary text-sm',
  'whitespace-nowrap',
  'cursor-pointer outline-line',
  'touch-manipulation select-none',
  'transition-all',
  'hover:bg-neutral-300 active:bg-neutral-400',
], {
  variants: {
    block: {
      true: 'flex w-full',
      false: '',
    },
    theme: {
      primary: 'bg-brand hover:bg-brand-hover active:bg-brand-active text-white',
      danger: 'bg-error hover:bg-error-hover active:bg-error-active text-white',
      warning: 'bg-warning hover:bg-warning-hover active:bg-warning-active text-white',
      success: 'bg-success hover:bg-success-hover active:bg-success-active text-white',
    },
    size: {
      small: 'h-6 text-xs px-[calc(var(--spacing)*2-1px)] rounded-sm',
      medium: '',
      large: 'h-10 text-base px-[calc(var(--spacing)*6-1px)] rounded-lg',
    },
  },
});

export type ButtonVariants = VariantProps<typeof getButtonVariants>;
