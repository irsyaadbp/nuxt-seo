<script setup lang="ts">
import { ICharacter, IResponseList } from "~~/types/response";

const config = useRuntimeConfig();

const { data: characters } = await useFetch<IResponseList<ICharacter[]>>(
  `${config.public.baseUrl}/character`
);

useHead({
  title: "CSR Example for Meta",
  meta: [{ name: "description", content: "My amazing site." }],
});
</script>

<template>
  <div class="d-flex gap-8 align-items-center">
    <NuxtLink to="/"> &#8592; </NuxtLink>
    <h2>CSR Example for META</h2>
  </div>

  <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px">
    <NuxtLink
      v-for="item in characters?.results || []"
      :key="item.id"
      :to="`/csr/${item.id}/detail`"
    >
      <fieldset>
        <img :src="item.image" />
        <h2>{{ item.name }}</h2>
        <p>{{ item.species }}</p>
      </fieldset>
    </NuxtLink>
  </div>
</template>
