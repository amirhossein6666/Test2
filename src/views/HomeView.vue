<template>
  <p class="first">به صفحه اول خوش اومدی عشقم</p>
  <p class="second">
    قبل از هر چیزی ببخشید اگه خیلی خوب نشد به بزرگی خودت ببخش
  </p>
  <p class="third">
    التبه ایده اصلیش که از خودته ولی خب خیلی فکر کردم ولی چیز قشنگ تری به ذهنم
    نرسید
  </p>
  <p class="four">و این که مرسی از این که تا الان باهام بودی :))))</p>
  <p class="five">خیلی دوستت دارم</p>
  <div class="myimg">
    <img src="../assets/images.jpeg" alt="" class="myimg" />
  </div>
  <div>
    <navigation-button></navigation-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationButton from "../components/NavigationButton.vue";
export default defineComponent({
  components: {
    NavigationButton,
  },
});
</script>

<style scoped>
.first {
  font-size: x-large;
  text-align: center;
  color: rgb(219, 9, 131);
}
.second {
  font-size: large;
  color: rgb(214, 28, 28);
  text-align: center;
}
.third {
  text-align: center;
  font-size: large;
  color: rgb(214, 28, 28);
}
.four {
  text-align: center;
  color: rgb(214, 28, 28);
  font-size: large;
}
.five {
  text-align: center;
  color: red;
  font-size: xx-large;
}
.myimg {
  display: flex;
  justify-content: center; /* Horizontal centering */
  align-items: center;
}
.background {
  background: url("../assets/sunset.jpg") no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
}
</style>
