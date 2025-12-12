<script setup lang="ts">
import type { ButtonProps } from './types';
import { computed } from 'vue';
import { cn } from '../../../utils/src';
import { getButtonVariants } from './variants';

defineOptions({ inheritAttrs: false });

const {
  as = 'button',
  block = false,
  size = 'medium',
  variant = 'contained',
  theme = 'primary',
  type = 'button',
  class: classProp,
} = defineProps<ButtonProps>();

const asAttrs = computed(() => as === 'button' ? { type } : undefined);
</script>

<template>
  <component
    :is="as"
    :class="cn(
      getButtonVariants({ theme, block, size, variant }),
      classProp,
    )"
    v-bind="{ ...asAttrs, ...$attrs }"
  >
    <slot></slot>
  </component>
</template>
