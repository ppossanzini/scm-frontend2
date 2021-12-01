<template>
  <div>
  
    <svg viewBox="">
      <rect
        :x="idx * 110"
        :y="50 - d.temperature"
        width="100"
        :height="d.temperature"
        v-for="(d, idx) in dati"
        :key="d.id"
      />
    </svg>
  </div>
</template>
<script lang="ts" src="./barChart.ts">
</script>