<template>
  <div class="home bg-gray-50 h-fit">
    <div class="flex justify-center">
      <img src="@/assets/Sams.png" alt="Sams Bottle Shop" />
    </div>
    <div class="flex justify-around bg-blue-300 border text-lg font-semibold">
      <h3>Total Count: {{ totalCount }}</h3>
      <h3>Total Price: {{ formatter.format(totalPrice) }}</h3>
      <h3>Time Shopping: {{ timeShopping }}</h3>
    </div>
    <div class="flex justify-around">
      <Domestics />
      <Cart />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBeerStore } from "@/store/useBeerStore";
import { storeToRefs } from "pinia";
import Domestics from "@/components/Domestics.vue";
import { onMounted } from "vue";
import Cart from "../components/Cart.vue";

const beerStore = useBeerStore();

const { totalCount, totalPrice, timeShopping } = storeToRefs(beerStore);

const { triggerCounter } = beerStore;

onMounted(() => (timeShopping.value == 0 ? triggerCounter() : ""));

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
</script>
