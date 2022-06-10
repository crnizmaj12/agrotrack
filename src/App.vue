<script>
import VuejsPaginateNext from './components/Paginate.vue'

export default {
  data() {
    return {
      page: 1,
    }
  },
  components: {
    paginate: VuejsPaginateNext,
  }
}
</script>

<template>
  <div style="padding-left: 20px;">
    <h2>vuejs-paginate-next</h2>
    <hr />

    <div>
      <h3>Unit Test</h3>
      <!-- The 'pagination' style using in containerClass comes from bootstrap -->
      <paginate
        id="unit"
        :page-count="10"
        :page-range="5"
        :margin-pages="0"
        :initial-page="1"
        :prev-class="'ignore'"
        :next-class="'ignore'"
        :disabled-class="'ignore'"
      ></paginate>
    </div>

    
  </div>
</template>

<style>
h3 {
  margin-top: 30px;
}
</style>
