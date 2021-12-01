<template>
  <table>
    <tr v-for="d in dati" :key="d.id">
      <td>{{d.id}}</td>
      <td>{{d.temperature}}</td>
      <td>{{d.precipitations}}</td>
    </tr>
  </table>
</template>
<script lang="ts" src="./table.ts"></script>