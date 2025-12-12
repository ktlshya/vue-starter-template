import type { Component } from 'vue';
import type { ButtonVariants } from './variants';

export interface ButtonProps {
  class?: any;
  as?: string | Component | undefined;
  theme?: ButtonVariants['theme'];
  block?: boolean;
  size?: ButtonVariants['size'];
  type?: HTMLButtonElement['type'];
  variant?: ButtonVariants['variant'];
}
