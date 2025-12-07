<script setup lang="ts">
import type { ButtonEmits, ButtonProps } from './types';
import { cn } from '@wm/utils';
import { LoaderIcon } from '../Icons';
import { buttonVariants } from './variants';

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'contained',
  size: 'default',
  color: 'primary',
  disabled: false,
  type: 'button',
  loading: false,
});
const emits = defineEmits<ButtonEmits>();

function onClick(event: PointerEvent) {
  if (props.loading || props.disabled)
    return;

  emits('click', event);
}
</script>

<template>
  <button
    data-slot="button"
    :aria-disabled="disabled"
    :type
    :disabled
    :class="cn(buttonVariants({ size, color, variant, disabled, loading }), props.class)"
    v-bind="$attrs"
    @click="onClick"
  >
    <LoaderIcon v-if="loading" class="animate-spin" />
    <slot />
  </button>
</template>
