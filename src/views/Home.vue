<template>
  <Layout>
    <Categories />
    <div class="home__container">
      <div class="home__container--category">
        <img src="../assets/images/categories-icon.svg" alt="categories-icon" />
        <span>{{getSelectedCategory.name}}</span>
      </div>
      <Cards />
    </div>
  </Layout>
</template>

<script>
import Layout from '../layouts/Layout';
import Categories from '../components/Categories';
import Cards from '../components/Cards';
export default {
  name: 'Home',
  components: {
    Layout,
    Categories,
    Cards
  },
  computed:{
    getSelectedCategory() {
      return this.$store.getters['product/getSelectedCategory'];
    },
  }
};
</script>

<style></style>
