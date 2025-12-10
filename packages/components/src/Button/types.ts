import type { ButtonHTMLAttributes, Component } from 'vue';
import type { ButtonVariants } from './variants';

export interface ButtonProps {
  variant?: ButtonVariants['variant'];
  size?: ButtonVariants['size'];
  color?: ButtonVariants['color'];
  type?: ButtonHTMLAttributes['type'];
  class?: ButtonHTMLAttributes['class'];
  disabled?: boolean;
  loading?: boolean;
  as?: string | Component | undefined;
  asChild?: boolean;
}

export interface ButtonEmits {
  click: [event: PointerEvent];
}
