<script setup lang="ts">
import type { ButtonProps } from './types';
import { Loader2Icon } from 'lucide-vue-next';
import { computed } from 'vue';
import { cn } from '../../../utils/src';
import { getButtonVariants } from './variants';

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<ButtonProps>(), {
  as: 'button',
  block: false,
  size: 'medium',
  variant: 'contained',
  type: 'button',
  disabled: false,
  loading: false,
});

const disabled = computed(() => props.disabled || props.loading);

const asAttrs = computed(() => {
  return props.as === 'button' ? { type: props.type, disabled: disabled.value } : undefined;
});
</script>

<template>
  <component
    :is="as"
    data-slot="button"
    :aria-disabled="disabled"
    :class="cn(getButtonVariants({
      theme: props.theme,
      block: props.block,
      size: props.size,
      variant: props.variant,
      disabled,
      loading: props.loading,
    }), props.class)"
    v-bind="{ ...asAttrs, ...$attrs }"
  >
    <Loader2Icon v-if="props.loading" data-slot="loading" class="animate-spin" />
    <slot></slot>
  </component>
</template>
