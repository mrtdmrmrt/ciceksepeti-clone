<template>
  <div class="cards__container">
    <div
      class="card__wrapper"
      v-for="(product, key) in searchFilterProduct"
      :key="key"
      @click="detailPage(product)"
    >
      <img :src="product.img" alt="saat" width="242" height="244" />
      <div class="card__wrapper--content">
        {{ product.name }}
      </div>
      <div
        class="card__wrapper--cargo"
        :style="[product.isCargo ? { opacity: 1 } : { opacity: 0 }]"
      >
        Ücretsiz Teslimat
      </div>
      <div class="card__wrapper--price">
        {{ product.price.toString().replace('.', ',') }} TL
      </div>
      <button
        class="card__wrapper--add_basket"
        @click.stop="setShoppingProduct(product)"
        v-if="productId !== product.id"
      >
        Sepete Ekle
      </button>
      <div
        v-if="productId === product.id"
        class="card__wrapper--shopping_counter"
      >
        <div
          class="card__wrapper--shopping_counter--btn"
          @click.stop="deleteShoppingProduct(product)"
        >
          -
        </div>
        <div class="card__wrapper--shopping_counter--count">
          {{ product.count }}
        </div>
        <div
          class="card__wrapper--shopping_counter--btn"
          @click.stop="setShoppingProduct(product)"
        >
          +
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cards',
  data() {
    return {
      products: [
        {
          id: 1,
          img: require('../assets/images/cards/saat.png'),
          imgBig: require('../assets/images/cards/saat2.png'),
          name:
            'Z6 Akıllı Saat Kameralı Konuşma Garantili Sim Kartlı Bluetooth',
          isCargo: true,
          price: 399.9,
          category: 'Elektronik',
          count: 0,
        },
        {
          id: 2,
          img: require('../assets/images/cards/parfum.png'),
          imgBig: require('../assets/images/cards/parfum2.png'),
          name: 'Calvin Klein Euphoria EDP 100 ml Kadın Parfüm',
          isCargo: false,
          price: 145.61,
          category: 'Parfüm',
          count: 0,
        },
        {
          id: 3,
          img: require('../assets/images/cards/cicek.png'),
          imgBig: require('../assets/images/cards/cicek2.png'),
          name: 'Gold Çizgili Vazoda 2 Dal Orkide Çiçeği',
          isCargo: true,
          price: 249.9,
          category: 'Çiçek',
          count: 0,
        },
        {
          id: 4,
          img: require('../assets/images/cards/kol-saati.png'),
          imgBig: require('../assets/images/cards/kol-saati2.png'),
          name: '925 Ayar Gümüş Çeyreklik Bileklik (Y)',
          isCargo: false,
          price: 329.9,
          category: 'Moda, Aksesuar',
          count: 0,
        },
        {
          id: 5,
          img: require('../assets/images/cards/kamp-cantasi.png'),
          imgBig: require('../assets/images/cards/kamp-cantasi2.png'),
          name:
            'Sailor SD-3160 Siyah Dağcı Seyahat Sırt Çantası 55 LT Outdoor-Trekking',
          isCargo: true,
          price: 499.9,
          category: 'Ofis, Kırtasiye',
          count: 0,
        },
        {
          id: 6,
          img: require('../assets/images/cards/satranc.png'),
          imgBig: require('../assets/images/cards/satranc2.png'),
          name:
            'Büyük Boy Metal Osmanlı Bizans Satranç Takımı Parlak ve Cev...',
          isCargo: true,
          price: 19.9,
          category: 'Hediye',
          count: 0,
        },
        {
          id: 7,
          img: require('../assets/images/cards/oyuncak-ayi.png'),
          imgBig: require('../assets/images/cards/oyuncak-ayi2.png'),
          name: '130 Cm Papyonlu Büyük Ayıcı (%100 Yerli)',
          isCargo: true,
          price: 89.9,
          category: 'Hediye',
          count: 0,
        },
        {
          id: 8,
          img: require('../assets/images/cards/nazar-boncugu.png'),
          imgBig: require('../assets/images/cards/nazar-boncugu2.png'),
          name: '925 Ayar Gümüş Dualı İsimli Nazar İgnesi',
          isCargo: true,
          price: 29.9,
          category: 'Moda, Aksesuar',
          count: 0,
        },
        {
          id: 9,
          img: require('../assets/images/cards/cikolata.png'),
          imgBig: require('../assets/images/cards/cikolata2.png'),
          name: 'Özel Tatlar Çikolata Kutusu 300 gr',
          isCargo: true,
          price: 59.9,
          category: 'Hediye',
          count: 0,
        },
        {
          id: 10,
          img: require('../assets/images/cards/gul.png'),
          imgBig: require('../assets/images/cards/gul2.png'),
          name: 'Kucak Dolusu Aşk 25 Kırmızı Gül Buketi',
          isCargo: false,
          price: 199.9,
          category: 'Çiçek',
          count: 0,
        },
        {
          id: 11,
          img: require('../assets/images/cards/saat.png'),
          imgBig: require('../assets/images/cards/saat2.png'),
          name:
            'Z6 Akıllı Saat Kameralı Konuşma Garantili Sim Kartlı Bluetooth',
          isCargo: true,
          price: 399.9,
          category: 'Elektronik',
          count: 0,
        },
        {
          id: 12,
          img: require('../assets/images/cards/parfum.png'),
          imgBig: require('../assets/images/cards/parfum2.png'),
          name: 'Calvin Klein Euphoria EDP 100 ml Kadın Parfüm',
          isCargo: false,
          price: 145.61,
          category: 'Parfüm',
          count: 0,
        },
        {
          id: 13,
          img: require('../assets/images/cards/cicek.png'),
          imgBig: require('../assets/images/cards/cicek2.png'),
          name: 'Gold Çizgili Vazoda 2 Dal Orkide Çiçeği',
          isCargo: true,
          price: 249.9,
          category: 'Çiçek',
          count: 0,
        },
        {
          id: 14,
          img: require('../assets/images/cards/kol-saati.png'),
          imgBig: require('../assets/images/cards/kol-saati2.png'),
          name: '925 Ayar Gümüş Çeyreklik Bileklik (Y)',
          isCargo: false,
          price: 329.9,
          category: 'Moda, Aksesuar',
          count: 0,
        },
        {
          id: 15,
          img: require('../assets/images/cards/kamp-cantasi.png'),
          imgBig: require('../assets/images/cards/kamp-cantasi2.png'),
          name:
            'Sailor SD-3160 Siyah Dağcı Seyahat Sırt Çantası 55 LT Outdoor-Trekking',
          isCargo: true,
          price: 499.9,
          category: 'Ofis, Kırtasiye',
          count: 0,
        },
        {
          id: 16,
          img: require('../assets/images/cards/satranc.png'),
          imgBig: require('../assets/images/cards/satranc2.png'),
          name:
            'Büyük Boy Metal Osmanlı Bizans Satranç Takımı Parlak ve Cev...',
          isCargo: true,
          price: 19.9,
          category: 'Hediye',
          count: 0,
        },
        {
          id: 17,
          img: require('../assets/images/cards/oyuncak-ayi.png'),
          imgBig: require('../assets/images/cards/oyuncak-ayi2.png'),
          name: '130 Cm Papyonlu Büyük Ayıcı (%100 Yerli)',
          isCargo: true,
          price: 89.9,
          category: 'Hediye',
          count: 0,
        },
        {
          id: 18,
          img: require('../assets/images/cards/nazar-boncugu.png'),
          imgBig: require('../assets/images/cards/nazar-boncugu2.png'),
          name: '925 Ayar Gümüş Dualı İsimli Nazar İgnesi',
          isCargo: true,
          price: 29.9,
          category: 'Moda, Aksesuar',
          count: 0,
        },
        {
          id: 19,
          img: require('../assets/images/cards/cikolata.png'),
          imgBig: require('../assets/images/cards/cikolata2.png'),
          name: 'Özel Tatlar Çikolata Kutusu 300 gr',
          isCargo: true,
          price: 59.9,
          category: 'Hediye',
          count: 0,
        },
        {
          id: 20,
          img: require('../assets/images/cards/gul.png'),
          imgBig: require('../assets/images/cards/gul2.png'),
          name: 'Kucak Dolusu Aşk 25 Kırmızı Gül Buketi',
          isCargo: false,
          price: 199.9,
          category: 'Çiçek',
          count: 0,
        },
      ],
      search: '',
      productId: null,
      searchFilterProduct: [],
    };
  },
  computed: {
    getSearch() {
      return this.$store.getters['product/getSearch'];
    },
    getShoppingList() {
      return this.$store.getters['product/getShoppingProducts'];
    },
    getSelectedCategory() {
      return this.$store.getters['product/getSelectedCategory'];
    },
  },
  watch: {
    getSelectedCategory() {
      this.filteredCategory();
    },
    getSearch() {
      if (this.getSearch) {
        this.searchFilterProduct = this.products.filter((product) => {
          return product.name.toLowerCase().match(this.getSearch.toLowerCase());
        });
      } else {
        this.searchFilterProduct = this.products;
      }
    },
  },
  methods: {
    setShoppingProduct(product) {
      this.productId = product.id;
      product.count += 1;
      this.$store.dispatch('product/setShoppingProducts', { ...product });
    },
    deleteShoppingProduct(product) {
      if (product.count <= 1) {
        this.productId = null;
      } else {
        product.count -= 1;
      }

      this.$store.dispatch('product/deleteShoppingProducts');
    },
    filteredCategory() {
      if (this.getSelectedCategory.name === 'Tüm Kategoriler') {
        this.searchFilterProduct = this.products;
      } else {
        this.searchFilterProduct = this.products.filter(
          (item) =>
            item.category.split(',').join().toLowerCase() ===
            this.getSelectedCategory.name.split(',').join().toLowerCase()
        );
      }
    },
    detailPage(card){
      this.$store.dispatch('product/setSelectedProduct', card);
      this.$router.push('/detail')
    }
  },
  mounted() {
    this.searchFilterProduct = this.products;
  },
};
</script>

<style></style>
