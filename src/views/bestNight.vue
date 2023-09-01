<template>
  <div class="background">
    <div class="container">
      <div class="amirSection">
        <p class="amirHeader">شبایی که من دوستشون داشتم</p>
        <p class="amirSection_p">شبی که رابطمون شروع شد</p>
        <p class="amirSection_p">شب تولدت</p>
        <p class="amirSection_p">شبی که رفتیم پارک شادی</p>
        <p class="amirSection_p">شبی که برا اولین بار تو اون کوچه بغلم کردی</p>
        <p class="amirSection_p">
          اون روزی که تو پارک بهاران یه فرصت دیکه بهم دادی
        </p>
        <p class="amirSection_p">اون روزی که بعد مدت ها اومدی یزد که ببینمت</p>
        <p class="amirSection_p">
          اون شبی که اذیتت می کردم و نمی بردمت خوابگاه که بعد بهت گفتم چقد خوشگل
          شده بودی
        </p>
      </div>
    </div>
    <div class="buttonContainer">
      <router-link to="/" class="button">Come Back to Home Page</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.amirSection {
  margin-top: 200px;
  background-color: #fff; /* Background color of the content */
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 3%;
}
.amirSection_p {
  font-size: large;
  text-align: center;
  color: rgb(32, 29, 29);
}
.amirHeader {
  font-size: x-large;
  color: red;
  text-align: center;
}
.button {
  margin-top: 20px; /* Add space between content and button */
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
.buttonContainer {
  text-align: center;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
}
.background {
  background: url("../assets/moon2.jpg") no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
}
</style>
