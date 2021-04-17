<template>
  <Layout>
    <div class="detail__container">
      <img :src="getSelectedProduct.imgBig" :alt="getSelectedProduct.name" />
      <div class="detail__container--info">
        <h1 class="detail__container--info--name">
          {{ getSelectedProduct.name }}
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          similique? Autem, beatae quae ut repellat eos placeat, rerum
          distinctio cumque amet, magni quasi. Pariatur deleniti veniam laborum
          illo ab. Iusto!
        </p>
        <div class="detail__container--info--price">
          <span class="detail__container--info--price-title">Fiyat: </span> <span>{{ getSelectedProduct.price.toString().replace('.', ',') }} TL</span>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '../layouts/Layout';
export default {
  name: 'Detail',
  components: {
    Layout,
  },
  computed: {
    getSelectedProduct() {
      return this.$store.getters['product/getSelectedProduct'];
    },
  },
};
</script>

<style></style>
