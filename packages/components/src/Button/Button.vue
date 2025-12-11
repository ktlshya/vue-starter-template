<script setup lang="ts">
import type { ButtonProps } from './types';
import { cn } from '../../../utils/src';
import { getButtonVariants } from './variants';

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<ButtonProps>(), {
  as: 'button',
  block: false,
  size: 'medium',
});
</script>

<template>
  <component
    :is="props.as"
    :class="cn(getButtonVariants({
      theme: props.theme,
      block: props.block,
      size: props.size,
    }), props.class)"
    v-bind="$attrs"
  >
    <slot></slot>
  </component>
</template>
