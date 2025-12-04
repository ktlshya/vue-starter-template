<script setup lang="ts">
import { Button } from '@/components/Button';
import { Search } from '@/components/Icons';
import { MainLayoutRoot } from '@/layouts';
</script>

<template>
  <MainLayoutRoot>
    <div class="px-4 py-2 flex items-center gap-2">
      <Button size="small" type="button" @click="() => console.log(222)">
        <Search />
      </Button>
      <Button>
        <Search />
      </Button>
      <Button size="large" disabled @click="() => console.log(111)">
        DISABLED
      </Button>
      <Button size="small" variant="outlined">
        CLICK
      </Button>
      <Button variant="outlined">
        CLICK
      </Button>
      <Button size="large" variant="outlined" disabled>
        DISABLED
      </Button>
    </div>
    <div class="px-4 py-2 flex items-center gap-2">
      <Button color="error" size="small">
        CLICK
      </Button>
      <Button color="error">
        CLICK
      </Button>
      <Button color="error" size="large">
        CLICK
      </Button>
      <Button color="error" size="small" variant="outlined">
        CLICK
      </Button>
      <Button color="error" variant="outlined">
        CLICK
      </Button>
      <Button color="error" size="large" variant="outlined">
        CLICK
      </Button>
    </div>
    <div class="px-4 py-2 flex items-center gap-2">
      <Button color="success" size="small">
        CLICK
      </Button>
      <Button color="success">
        CLICK
      </Button>
      <Button color="success" size="large">
        CLICK
      </Button>
      <Button color="success" size="small" variant="outlined">
        CLICK
      </Button>
      <Button color="success" variant="outlined">
        CLICK
      </Button>
      <Button color="success" size="large" variant="outlined">
        CLICK
      </Button>
    </div>
    <div class="px-4 py-2 flex items-center gap-2">
      <Button color="info" size="small">
        CLICK
      </Button>
      <Button color="info">
        CLICK
      </Button>
      <Button color="info" size="large">
        CLICK
      </Button>
      <Button color="info" size="small" variant="outlined">
        CLICK
      </Button>
      <Button color="info" variant="outlined">
        CLICK
      </Button>
      <Button color="info" size="large" variant="outlined">
        CLICK
      </Button>
    </div>
    <div class="px-4 py-2 flex items-center gap-2">
      <Button color="warning" size="small">
        CLICK
      </Button>
      <Button color="warning">
        CLICK
      </Button>
      <Button color="warning" size="large">
        CLICK
      </Button>
      <Button color="warning" size="small" variant="outlined">
        CLICK
      </Button>
      <Button color="warning" variant="outlined">
        CLICK
      </Button>
      <Button color="warning" size="large" variant="outlined">
        CLICK
      </Button>
    </div>
  </MainLayoutRoot>
</template>
