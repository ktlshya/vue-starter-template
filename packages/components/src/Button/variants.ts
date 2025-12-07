import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center shrink-0 gap-1',
    'font-medium whitespace-nowrap',
    '[&_svg]:pointer-events-none [&_svg]:shrink-0',
    'rounded-md',
    'transition-[color,background-color,border-color]',
    'select-none',
  ],
  {
    variants: {
      variant: {
        contained: 'text-white',
        outlined: 'border border-current bg-white',
        text: 'not-disabled:hover:bg-neutral-100',
      },
      size: {
        default: 'h-9 px-4 py-2 text-sm [&_svg:not([class*=size-])]:size-4',
        small: 'h-8 px-3 has-[>svg]:px-2 text-xs [&_svg:not([class*=size-])]:size-3.5',
        large: 'h-10 px-6 has-[>svg]:px-4 text-base [&_svg:not([class*=size-])]:size-5',
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
      loading: {
        true: 'cursor-default opacity-50 pointer-events-none',
        false: '',
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
        variant: 'text',
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
        variant: 'text',
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
        variant: 'text',
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
        variant: 'text',
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
        variant: 'text',
        color: 'info',
        disabled: false,
        class: 'text-info hover:text-info/80 active:text-info',
      },
      {
        variant: 'contained',
        color: ['primary', 'success', 'error', 'warning', 'info'],
        disabled: true,
        class: 'bg-slate-200 text-slate-500',
      },
      {
        variant: 'outlined',
        color: ['primary', 'success', 'error', 'warning', 'info'],
        disabled: true,
        class: 'border-slate-400 text-slate-500',
      },
      {
        variant: 'text',
        color: ['primary', 'success', 'error', 'warning', 'info'],
        disabled: true,
        class: 'text-slate-500',
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
