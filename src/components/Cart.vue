<template>
  <div class="max-w-[50%]">
    <div class="text-2xl font-bold mt-8">Shopping Cart</div>
    <div>
      <button
        class="mb-4 mx-2 bg-red-500 hover:bg-red-300 text-white text-sm font-bold py-1 px-2 rounded-full"
        @click="beerStore.clearCart"
      >
        Clear Cart
      </button>
    </div>
    <div class="">
      <ul>
        <li v-for="(item, index) in receipt" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBeerStore } from "@/store/useBeerStore";
import { storeToRefs } from "pinia";

const beerStore = useBeerStore();

const { receipt } = storeToRefs(beerStore); /* storeToRefs */
</script>
