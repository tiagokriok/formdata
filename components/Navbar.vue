<template>
  <nav
    class="h-16 max-w-4xl mx-auto flex items-center justify-between px-6 lg:px-0"
  >
    <div class="flex items-center gap-x-2">
      <Icon name="solar:document-add-bold-duotone" class="h-8 w-8" />
      <span class="text-lg font-bold font-display">Formjar</span>
    </div>
    <div>
      <div class="items-center gap-x-3 flex">
        <UButton
          variant="solid"
          color="black"
          class="transition-transform active:scale-[0.98]"
        >
          <template #default>
            <Icon name="mdi:github" class="h-5 w-5" />
            <span>Github</span>
          </template>
        </UButton>
      </div>
    </div>
  </nav>
</template>
