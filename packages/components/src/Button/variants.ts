import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const getButtonVariants = cva([
  'relative',
  'inline-flex items-center justify-center box-border',
  'border border-transparent',
  'whitespace-nowrap',
  'cursor-pointer outline-line',
  'touch-manipulation select-none',
  'transition-all',
], {
  variants: {
    block: {
      true: 'flex w-full',
      false: '',
    },
    theme: {
      primary: '',
      danger: '',
      warning: '',
      success: '',
    },
    size: {
      small: 'h-6 text-xs px-[calc(var(--spacing)*2-1px)] rounded-sm',
      medium: 'h-8 text-sm px-[calc(var(--spacing)*4-1px)] rounded-md',
      large: 'h-10 text-base px-[calc(var(--spacing)*6-1px)] rounded-md',
    },
    disabled: {
      true: 'pointer-events-none cursor-default',
      false: '',
    },
    variant: {
      contained: [
        'bg-neutral-200 text-neutral-900',
        'hover:bg-neutral-300',
        'active:bg-neutral-400',
        'aria-disabled:bg-neutral-100 aria-disabled:text-neutral-400',
      ],
      outlined: [
        'bg-white text-neutral-900 border-neutral-200',
        'hover:border-brand-hover hover:text-brand-hover',
        'active:border-brand-active active:text-brand-active',
        'aria-disabled:text-neutral-300 aria-disabled:border-neutral-300',
      ],
      text: [
        'bg-transparent text-neutral-900',
        'hover:bg-neutral-100',
        'active:bg-neutral-300',
        'aria-disabled:text-neutral-300 aria-disabled:bg-transparent',
      ],
    },
    loading: {
      true: 'gap-1',
      false: '',
    },
  },
  compoundVariants: [
    {
      size: 'small',
      loading: true,
      class: '**:data-[slot=loading]:size-2.5',
    },
    {
      size: 'medium',
      loading: true,
      class: '**:data-[slot=loading]:size-3.5',
    },
    {
      size: 'large',
      loading: true,
      class: '**:data-[slot=loading]:size-4.5',

    },
    {
      theme: 'primary',
      variant: 'contained',
      class: [
        'bg-brand text-white',
        'hover:bg-brand-hover',
        'active:bg-brand-active',
        'aria-disabled:bg-brand-disabled aria-disabled:text-white',
      ],
    },
    {
      theme: 'primary',
      variant: 'outlined',
      class: [
        'text-brand border-brand',
        'hover:text-brand-hover hover:border-brand-hover',
        'active:text-brand-active active:border-brand-active',
        'aria-disabled:text-brand-disabled aria-disabled:border-brand-disabled',
      ],
    },
    {
      theme: 'primary',
      variant: 'text',
      class: [
        'bg-transparent text-brand',
        'hover:bg-brand-hover/10 hover:text-brand-hover',
        'active:bg-brand-active/10 active:text-brand-active',
        'aria-disabled:text-brand-disabled',
      ],
    },
    {
      theme: 'danger',
      variant: 'contained',
      class: [
        'bg-error text-white',
        'hover:bg-error-hover',
        'active:bg-error-active',
        'aria-disabled:bg-error-disabled aria-disabled:text-white',
      ],
    },
    {
      theme: 'danger',
      variant: 'outlined',
      class: [
        'text-error border-error',
        'hover:text-error-hover hover:border-error-hover',
        'active:text-error-active active:border-error-active',
        'aria-disabled:text-error-disabled aria-disabled:border-error-disabled',
      ],
    },
    {
      theme: 'danger',
      variant: 'text',
      class: [
        'bg-transparent text-error',
        'hover:bg-error-hover/10 hover:text-error-hover',
        'active:bg-error-active/10 active:text-error-active',
        'aria-disabled:text-error-disabled',
      ],
    },
    {
      theme: 'warning',
      variant: 'contained',
      class: [
        'bg-warning text-white',
        'hover:bg-warning-hover',
        'active:bg-warning-active',
        'aria-disabled:bg-warning-disabled aria-disabled:text-white',
      ],
    },
    {
      theme: 'warning',
      variant: 'outlined',
      class: [
        'text-warning border-warning',
        'hover:text-warning-hover hover:border-warning-hover',
        'active:text-warning-active active:border-warning-active',
        'aria-disabled:text-warning-disabled aria-disabled:border-warning-disabled',
      ],
    },
    {
      theme: 'warning',
      variant: 'text',
      class: [
        'bg-transparent text-warning',
        'hover:bg-warning-hover/10 hover:text-warning-hover',
        'active:bg-warning-active/10 active:text-warning-active',
        'aria-disabled:text-warning-disabled',
      ],
    },
    {
      theme: 'success',
      variant: 'contained',
      class: [
        'bg-success text-white',
        'hover:bg-success-hover',
        'active:bg-success-active',
        'aria-disabled:bg-success-disabled aria-disabled:text-white',
      ],
    },
    {
      theme: 'success',
      variant: 'outlined',
      class: [
        'text-success border-success',
        'hover:text-success-hover hover:border-success-hover',
        'active:text-success-active active:border-success-active',
        'aria-disabled:text-success-disabled aria-disabled:border-success-disabled',
      ],
    },
    {
      theme: 'success',
      variant: 'text',
      class: [
        'bg-transparent text-success',
        'hover:bg-success-hover/10 hover:text-success-hover',
        'active:bg-success-active/10 active:text-success-active',
        'aria-disabled:text-success-disabled',
      ],
    },
  ],
});

export type ButtonVariants = VariantProps<typeof getButtonVariants>;
