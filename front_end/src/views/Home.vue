<template>
  <div class="home">
    <div class="main-title">
      <img src="@/assets/_image/ticket.png" alt="">
      <h1>Mticket</h1>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';// @ is an alias to /src

export default defineComponent({
  name: 'HomePage',
  components: {
  },
});
</script>
<style lang="scss" scoped>
.home {
  background-color: $mainBackground;
  width: 100%;
  height: 100vh;
  padding: 1rem;

  .main-title {
    display: flex;
    align-items: flex-end;

    img {
      width: 4rem;
    }

    h1 {
      font-size: 4rem;
      font-family: 'Oswald', sans-serif;
    }
  }
}
</style>
