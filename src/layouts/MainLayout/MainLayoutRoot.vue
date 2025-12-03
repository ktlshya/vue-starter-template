<script setup lang="ts"></script>

<template>
  <div
    class="relative flex flex-col min-h-full"
    style="--sidebar-width: 280px; --sidebar-width-collapsed: 80px;"
  >
    <!-- 侧边栏 -->
    <div class="fixed left-0 inset-y-0 z-(--z-sidebar) w-(--sidebar-width) bg-red-500">
      SideBar
    </div>
    <!-- 内容区域 -->
    <div class="flex flex-col flex-auto pl-(--sidebar-width)">
      <header class="sticky top-0 inset-x-0 z-(--z-app-bar) w-full bg-white">
        <div class="flex items-center px-6 py-2 min-h-14 border-b border-slate-200">
          Header
        </div>
      </header>
      <main class="flex flex-col flex-auto">
        <slot />
      </main>
    </div>
  </div>
</template>
