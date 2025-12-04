<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import type { ButtonVariants } from './classes';
import { cn } from '@/utils';
import { buttonVariants } from './classes';

export interface ButtonProps {
  variant?: ButtonVariants['variant'];
  size?: ButtonVariants['size'];
  color?: ButtonVariants['color'];
  disabled?: boolean;
  class?: HTMLAttributes['class'];
}

const props = defineProps<ButtonProps>();
</script>

<template>
  <button
    data-slot="button"
    :data-disabled="disabled"
    :disabled="disabled"
    :class="cn(buttonVariants({ size, color, variant, disabled }), props.class)"
  >
    <slot />
  </button>
</template>
