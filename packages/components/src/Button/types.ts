import type { Component, HTMLAttributes } from 'vue';
import type { ButtonVariants } from './variants';

export interface ButtonProps
  extends /* @vue-ignore */ Omit<HTMLAttributes, 'class' | 'color'> {
  class?: any;
  as?: string | Component | undefined;
  theme?: ButtonVariants['theme'];
  block?: boolean;
  size?: ButtonVariants['size'];
}
