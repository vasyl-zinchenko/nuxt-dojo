<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, porro
      accusamus! Nihil molestias ea aliquam, dicta dolorem debitis quas
      inventore.
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, porro
      accusamus! Nihil molestias ea aliquam, dicta dolorem debitis quas
      inventore.
    </p>

    <div>{{ data }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/currency/EUR");
console.log(data)
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
</style>
