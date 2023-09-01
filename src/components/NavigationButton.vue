<template>
  <router-link to="/bestNight" class="routerlink">
    <button class="button">بهترین شبامون</button>
  </router-link>
  <router-link to="/thingsMakeMeHappy" class="routerlink">
    <button class="button">چیز هایی که خوشحالم میکنه</button>
  </router-link>
  <router-link to="/thingsILoveInYou" class="routerlink">
    <button class="button">چیز هایی که توت دوسشون دارم</button>
  </router-link>
  <router-link to="/thingsILikeToDo" class="routerlink">
    <button class="button">کار هایی که دوس دارم انجام بدیم</button>
  </router-link>
  <router-link to="/expectationsFromYou" class="routerlink"> 
    <button class="button">انتظاراتی که ازت دارم</button>
  </router-link>
  <router-link to="/curious" class="routerlink">
    <button class="button">فضول گیر</button>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
/* Base Button Styles */
.button {
  display: block; /* Display buttons as blocks */
  margin-bottom: 10px; /* Add spacing between buttons */
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: 2px solid #007bff; /* Button border color */
  border-radius: 5px;
  background-color: #007bff; /* Button background color */
  color: #fff; /* Button text color */
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

/* Button Hover State */
.button:hover {
  background-color: #0056b3; /* Hover background color */
  border-color: #0056b3; /* Hover border color */
  color: #fff; /* Hover text color */
}

/* Button Active State (e.g., when clicked) */
.button:active {
  background-color: #003d80; /* Active background color */
  border-color: #003d80; /* Active border color */
  color: #fff; /* Active text color */
}
.routerlink {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
