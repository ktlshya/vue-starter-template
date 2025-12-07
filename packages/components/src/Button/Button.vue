<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue';
import type { ButtonVariants } from './variants';
import { cn } from '@/utils';
import { buttonVariants } from './variants';

type NativeButtonProps = Omit<ButtonHTMLAttributes, 'class' | 'color' | 'disabled' | 'type'>;
export interface ButtonProps extends /* @vue-ignore */ NativeButtonProps {
  variant?: ButtonVariants['variant'];
  size?: ButtonVariants['size'];
  color?: ButtonVariants['color'];
  disabled?: boolean;
  type?: ButtonHTMLAttributes['type'];
  class?: ButtonHTMLAttributes['class'];
}

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'contained',
  size: 'default',
  color: 'primary',
  disabled: false,
  type: 'button',
});
</script>

<template>
  <button
    data-slot="button"
    :aria-disabled="disabled"
    :type
    :disabled
    :class="cn(buttonVariants({ size, color, variant, disabled }), props.class)"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>
