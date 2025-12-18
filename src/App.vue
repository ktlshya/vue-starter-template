<script setup lang="ts">
import { Button } from '@wm/components';
import { SaveIcon } from 'lucide-vue-next';
import { ref } from 'vue';

const disabled = ref(false);
const loading = ref(false);
</script>

<template>
  <div class="w-screen h-screen flex flex-col gap-2 items-center justify-center">
    <label for="disabled">
      <input
        id="disabled"
        v-model="disabled"
        type="checkbox"
        name="disabled"
        :true-value="true"
        :false-value="false"
      />
      Disabled
    </label>
    <label for="loading">
      <input
        id="loading"
        v-model="loading"
        type="checkbox"
        name="loading"
        :true-value="true"
        :false-value="false"
      />
      Loading
    </label>
    <Button
      as="div"
      theme="success"
      variant="contained"
      :block="false"
      size="medium"
      type="submit"
      :disabled="disabled"
      :loading="loading"
      :icon="SaveIcon"
      @click="() => console.log('click')"
    >
      确定
    </Button>
  </div>
</template>
