<script setup lang="ts">
const listMenu = [
  { title: "SSR", url: "/ssr" },
  { title: "CSR", url: "/csr" },
];

useHead({
  title: "Meta Example",
  meta: [{ name: "description", content: "Example code for meta implementation" }],
});
</script>

<template>
  <div class="container">
    <h2>SEO & Meta</h2>
    <ul>
      <li v-for="(menu, index) in listMenu" :key="`menu-${index}`">
        <NuxtLink :to="menu.url">{{ menu.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
