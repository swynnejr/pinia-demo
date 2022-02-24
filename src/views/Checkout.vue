<template>
  <div class="about">
    <div class="flex justify-center">
      <img src="@/assets/Sams.png" alt="Sam's Bottle Shop" />
    </div>
    <div class="flex justify-around bg-blue-300 border text-lg font-semibold">
      <h3>Time Shopping:</h3>
    </div>

    <h1 class="text-4xl font-bold mt-4">Thank you for your purchase</h1>
    <!-- <Cart class="text-xl font-semibold mt-4" /> -->
    <h1 class="text-4xl font-bold mt-4">Total Beers:</h1>
    <h1 class="text-4xl font-bold mt-4">Total Price:</h1>
    <button
      class="mb-4 mx-2 bg-red-500 hover:bg-red-300 text-white font-bold py-1 px-2 rounded-md"
    >
      New Shopper
    </button>
  </div>
</template>

<script setup lang="ts">
import Cart from "@/components/Cart.vue";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
</script>
