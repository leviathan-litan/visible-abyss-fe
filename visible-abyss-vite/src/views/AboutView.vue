<template>
  <div class="about">
    <h1>This is an about page</h1>

    <h2>{{ counter.count }}</h2>

    <a-button type="primary" @click="counter.increment">Increment</a-button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/modules/counter';
const counter = useCounterStore();
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
