<template>
  <nav class="header__container">
    <div class="header__container--logo">
      <img src="../assets/images/logo.svg" alt="" />
    </div>
    <div class="header__container--search">
      <div class="header__container--search-wrapper">
        <img src="../assets/images/search.svg" alt="search" />
        <input type="text" placeholder="Ürün Ara" v-model="search" />
        <button @click="searchProduct">Ara</button>
      </div>
    </div>
    <div
      class="header__container--shoppingCart"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <img src="../assets/images/shopping-cart.svg" alt="shopping cart" />
      <span>Sepetim</span>
      <div
        v-if="getShoppingList.length > 0"
        class="header__container--shoppingCart-count"
      >
        {{ getShoppingList.length }}
      </div>
    </div>
    <transition name="fade">
      <div
        v-if="hover"
        class="header__container--cargo_info"
        ref="cargoInfo"
        :class="{'free-cargo' : parseInt(500 - this.calcPrice) <= 0}"
      >
        <div
          v-if="parseInt(500 - this.calcPrice) > 0"
          class="header__container--cargo_info--title"
        >
          <img src="../assets/images/simsek.svg" alt="simsek" />
          <span style="color: #ffce00"
            >{{ parseInt(500 - this.calcPrice) }} TL</span
          >
          <span style="color: #ffffff">ürün daha ekleyin kargo bedava</span>
        </div>
        <div
          v-else
          style="
            text-align: left;
            font: normal normal 600 15px/11px Source Sans Pro;
            letter-spacing: 0px;
            display: flex;
            align-items: center;
          "
        >
          <span style="color: #ffffff">Kargo Bedava</span>
        </div>
        <div
          v-if="parseInt(500 - this.calcPrice) > 0"
          class="header__container--cargo_info--loading"
          :style="{ width: loadingBarWidth + 'px' }"
        ></div>
        <div
          v-if="parseInt(500 - this.calcPrice) > 0"
          class="header__container--cargo_info--progress"
        ></div>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      search: '',
      hover: false,
      calcPrice: null,
      loadingBarWidth: 0,
    };
  },
  watch: {
    search() {
      this.searchProduct();
    },
    getShoppingList() {
      this.calcPrice = this.getShoppingList.reduce(
        (accumulator, currentValue) => {
          return accumulator + currentValue.price;
        },
        0
      );
      this.loadingBar();
    },
  },
  methods: {
    searchProduct() {
      if (this.search.length >= 3)
        this.$store.dispatch('product/setSearch', this.search);
      else this.$store.dispatch('product/setSearch', '');
    },
    loadingBar() {
      this.loadingBarWidth = parseInt((300 * this.calcPrice) / 500);
    },
  },
  computed: {
    getShoppingList() {
      return this.$store.getters['product/getShoppingProducts'];
    },
  },
};
</script>

<style></style>
