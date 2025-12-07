import type { ButtonHTMLAttributes } from 'vue';
import type { ButtonVariants } from './variants';

type NativeButtonProps = Omit<ButtonHTMLAttributes, 'class' | 'color' | 'disabled' | 'type'>;

export interface ButtonProps extends /* @vue-ignore */ NativeButtonProps {
  variant?: ButtonVariants['variant'];
  size?: ButtonVariants['size'];
  color?: ButtonVariants['color'];
  type?: ButtonHTMLAttributes['type'];
  class?: ButtonHTMLAttributes['class'];
  disabled?: boolean;
  loading?: boolean;
}

export interface ButtonEmits {
  click: [event: PointerEvent];
}
