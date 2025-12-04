import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center shrink-0 gap-2',
    'text-white text-sm font-medium whitespace-nowrap',
    '[&_svg]:pointer-events-none [&_svg:not([class*=size-])]:size-4 [&_svg]:shrink-0',
    'rounded-md',
  ],
  {
    variants: {
      variant: {
        contained: '',
        outlined: 'border border-current bg-white',
      },
      size: {
        default: 'h-9 px-4 py-2',
        small: 'h-8 px-3 has-[>svg]:px-2',
        large: 'h-10 px-6 has-[>svg]:px-4',
      },
      color: {
        primary: '',
        error: '',
        warning: '',
        success: '',
        info: '',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: 'cursor-pointer',
      },
    },
    compoundVariants: [
      {
        variant: 'contained',
        color: 'primary',
        disabled: false,
        class: 'bg-brand hover:bg-brand/80 active:bg-brand',
      },
      {
        variant: 'outlined',
        color: 'primary',
        disabled: false,
        class: 'text-brand hover:text-brand/80 active:text-brand',
      },
      {
        variant: 'contained',
        color: 'error',
        disabled: false,
        class: 'bg-error hover:bg-error/80 active:bg-error',
      },
      {
        variant: 'outlined',
        color: 'error',
        disabled: false,
        class: 'text-error hover:text-error/80 active:text-error',
      },
      {
        variant: 'contained',
        color: 'warning',
        disabled: false,
        class: 'bg-warning hover:bg-warning/80 active:bg-warning',
      },
      {
        variant: 'outlined',
        color: 'warning',
        disabled: false,
        class: 'text-warning hover:text-warning/80 active:text-warning',
      },
      {
        variant: 'contained',
        color: 'success',
        disabled: false,
        class: 'bg-success hover:bg-success/80 active:bg-success',
      },
      {
        variant: 'outlined',
        color: 'success',
        disabled: false,
        class: 'text-success hover:text-success/80 active:text-success',
      },
      {
        variant: 'contained',
        color: 'info',
        disabled: false,
        class: 'bg-info hover:bg-info/80 active:bg-info',
      },
      {
        variant: 'outlined',
        color: 'info',
        disabled: false,
        class: 'text-info hover:text-info/80 active:text-info',
      },
      {
        variant: 'contained',
        color: ['primary', 'success', 'error', 'warning', 'info'],
        disabled: true,
        class: 'bg-slate-200 text-slate-600',
      },
      {
        variant: 'outlined',
        color: ['primary', 'success', 'error', 'warning', 'info'],
        disabled: true,
        class: 'border-slate-400 text-slate-600',
      },
    ],
    defaultVariants: {
      variant: 'contained',
      size: 'default',
      color: 'primary',
      disabled: false,
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
