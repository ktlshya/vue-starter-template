<script setup lang="ts">
import type { ButtonVariants } from './classes';
import { cn } from '@/utils';
import { buttonVariants } from './classes';

export interface ButtonProps {
  variant?: ButtonVariants['variant'];
  size?: ButtonVariants['size'];
  color?: ButtonVariants['color'];
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'contained',
  size: 'default',
  color: 'primary',
});
</script>

<template>
  <button
    data-slot="button"
    :class="cn(buttonVariants({ size: props.size, color: props.color, variant: props.variant }))"
  >
    <slot />
  </button>
</template>
