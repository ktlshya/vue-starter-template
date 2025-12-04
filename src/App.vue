<script setup lang="ts">
import { Button } from '@/components/Button';
import { MainLayoutRoot } from '@/layouts';
</script>

<template>
  <MainLayoutRoot>
    <div class="px-4 py-2 flex items-center gap-2">
      <Button size="small">
        Click me
      </Button>
      <Button>Click me</Button>
      <Button size="large">
        Click me
      </Button>
      <Button size="small" variant="outlined">
        Click me
      </Button>
      <Button variant="outlined">
        Click me
      </Button>
      <Button size="large" variant="outlined">
        Click me
      </Button>
    </div>
    <div class="px-4 py-2 flex items-center gap-2">
      <Button color="error" size="small">
        Click me
      </Button>
      <Button color="error">
        Click me
      </Button>
      <Button color="error" size="large">
        Click me
      </Button>
      <Button color="error" size="small" variant="outlined">
        Click me
      </Button>
      <Button color="error" variant="outlined">
        Click me
      </Button>
      <Button color="error" size="large" variant="outlined">
        Click me
      </Button>
    </div>
    <div class="px-4 py-2 flex items-center gap-2">
      <Button color="success" size="small">
        Click me
      </Button>
      <Button color="success">
        Click me
      </Button>
      <Button color="success" size="large">
        Click me
      </Button>
      <Button color="success" size="small" variant="outlined">
        Click me
      </Button>
      <Button color="success" variant="outlined">
        Click me
      </Button>
      <Button color="success" size="large" variant="outlined">
        Click me
      </Button>
    </div>
    <div class="px-4 py-2 flex items-center gap-2">
      <Button color="info" size="small">
        Click me
      </Button>
      <Button color="info">
        Click me
      </Button>
      <Button color="info" size="large">
        Click me
      </Button>
      <Button color="info" size="small" variant="outlined">
        Click me
      </Button>
      <Button color="info" variant="outlined">
        Click me
      </Button>
      <Button color="info" size="large" variant="outlined">
        Click me
      </Button>
    </div>
    <div class="px-4 py-2 flex items-center gap-2">
      <Button color="warning" size="small">
        Click me
      </Button>
      <Button color="warning">
        Click me
      </Button>
      <Button color="warning" size="large">
        Click me
      </Button>
      <Button color="warning" size="small" variant="outlined">
        Click me
      </Button>
      <Button color="warning" variant="outlined">
        Click me
      </Button>
      <Button color="warning" size="large" variant="outlined">
        Click me
      </Button>
    </div>
  </MainLayoutRoot>
</template>
