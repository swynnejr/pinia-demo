<template>
  <div class="about">
    <div class="flex justify-center">
      <img src="@/assets/Sams.png" alt="Sam's Bottle Shop" />
    </div>
    <div class="flex justify-around bg-blue-300 border text-lg font-semibold">
      <h3>Time Shopping: {{ timeShopping }}</h3>
    </div>

    <h1 class="text-4xl font-bold mt-4">Thank you for your purchase</h1>
    <Cart class="text-xl font-semibold mt-4" />
    <h1 class="text-4xl font-bold mt-4">Total Beers: {{ totalCount }}</h1>
    <h1 class="text-4xl font-bold mt-4">
      Total Price: {{ formatter.format(totalPrice) }}
    </h1>
    <button
      class="mb-4 mx-2 bg-red-500 hover:bg-red-300 text-white font-bold py-1 px-2 rounded-md"
      @click="beerStore.$reset"
    >
      New Shopper
    </button>
  </div>
</template>

<script setup lang="ts">
import { useBeerStore } from "@/store/useBeerStore";
import { storeToRefs } from "pinia";
import Cart from "@/components/Cart.vue";

const beerStore = useBeerStore();

const { totalCount, totalPrice, timeShopping } =
  storeToRefs(beerStore); /* storeToRefs */

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
</script>
