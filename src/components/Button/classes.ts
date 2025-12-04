import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center',
    'text-white text-sm font-medium',
    'rounded-md',
    'cursor-pointer',
  ],
  {
    variants: {
      variant: {
        contained: '',
        outlined: 'border border-current bg-white',
      },
      size: {
        default: 'h-9 px-4 py-2',
        small: 'h-8 px-3',
        large: 'h-10 px-6',
      },
      color: {
        primary: '',
        error: '',
        warning: '',
        success: '',
        info: '',
      },
    },
    compoundVariants: [
      {
        variant: 'contained',
        color: 'primary',
        class: 'bg-brand hover:bg-brand/80 active:bg-brand',
      },
      {
        variant: 'outlined',
        color: 'primary',
        class: 'text-brand hover:text-brand/80 active:text-brand',
      },
      {
        variant: 'contained',
        color: 'error',
        class: 'bg-error hover:bg-error/80 active:bg-error',
      },
      {
        variant: 'outlined',
        color: 'error',
        class: 'text-error hover:text-error/80 active:text-error',
      },
      {
        variant: 'contained',
        color: 'warning',
        class: 'bg-warning hover:bg-warning/80 active:bg-warning',
      },
      {
        variant: 'outlined',
        color: 'warning',
        class: 'text-warning hover:text-warning/80 active:text-warning',
      },
      {
        variant: 'contained',
        color: 'success',
        class: 'bg-success hover:bg-success/80 active:bg-success',
      },
      {
        variant: 'outlined',
        color: 'success',
        class: 'text-success hover:text-success/80 active:text-success',
      },
      {
        variant: 'contained',
        color: 'info',
        class: 'bg-info hover:bg-info/80 active:bg-info',
      },
      {
        variant: 'outlined',
        color: 'info',
        class: 'text-info hover:text-info/80 active:text-info',
      },
    ],
    defaultVariants: {
      variant: 'contained',
      size: 'default',
      color: 'primary',
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
