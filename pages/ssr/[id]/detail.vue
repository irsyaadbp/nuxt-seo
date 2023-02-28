<script setup lang="ts">
import { ICharacter } from "~~/types/response";

const config = useRuntimeConfig();

const route = useRoute();
const id = route.params.id;

const { data: character } = await useFetch<ICharacter>(`/character/${id}`, {
  baseURL: config.public.baseUrl,
});

useServerSeoMeta({
  title: () => character.value?.name || "Character Detail",
  ogTitle: () => character.value?.name || "Character Detail",
  description: () => `This is detail character from ${character.value?.name}`,
  ogDescription: () => `This is detail character from ${character.value?.name}`,
  ogImage: () => character.value?.image,
  twitterCard: () => "summary_large_image",
});
</script>

<template>
  <div class="container">
    <div class="d-flex gap-8 align-items-center">
      <NuxtLink to="/ssr"> &#8592; </NuxtLink>
      <h2>Detail Character</h2>
    </div>
    <div v-if="!character">No Character Found</div>
    <div v-else>
      <img :src="character.image" />
      <h2>{{ character.name }}</h2>
      <p>{{ character.species }}</p>
      <p>{{ character.status }}</p>
      <p>{{ character.gender }}</p>
    </div>
  </div>
</template>
