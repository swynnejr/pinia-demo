<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
});
</script>

<!-- <template>
  <div class="home bg-gray-50 h-fit">
    <div class="flex justify-center">
      <img src="@/assets/Sams.png" alt="Sams Bottle Shop" />
    </div>
    <div class="flex justify-around bg-blue-300 border text-lg font-semibold">
      <h3>Total Count:</h3>
      <h3>Total Price:</h3>
      <h3>Time Shopping:</h3>
    </div>
    <div class="flex justify-around">
    </div>
  </div>
</template> -->

<!-- <script setup lang="ts">
import Domestics from "@/components/Domestics.vue";
import { onMounted } from "vue";
import Cart from "../components/Cart.vue";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
</script> -->
