<template>
  <div class="card">
    <div>
      <slot />
    </div>
    <div class="buttons">
      <slot name="buttons" />
    </div>
  </div>
</template>
<script lang="ts" src="./card.ts">
</script>
<style lang="less">
@import url(./card.less);
</style>