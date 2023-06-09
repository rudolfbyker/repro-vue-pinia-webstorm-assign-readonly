<template>
  <h1>Test</h1>
  <div>
    <p>a = {{ test.a }}</p>
    <p>b = {{ test.b }}</p>
    <button @click="clicked">Click me</button>
  </div>
</template>

<script setup lang="ts">
import {useTestStore} from "@/stores/useTestStore";

const test = useTestStore();

function clicked() {
  test.b = Math.random();
}
</script>
