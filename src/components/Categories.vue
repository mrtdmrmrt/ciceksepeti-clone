<template>
  <div class="categories__container">
    <div class="categories__container--logo_title">
      <img src="../assets/images/categories-logo.svg" alt="categories-logo" />
      <span @click="isToggleCategory = !isToggleCategory">Kategoriler</span>
    </div>
    <transition name="fade">
      <div v-if="isToggleCategory" class="categories__container--categories">
        <ul class="categories__container--categories--list">
          <li
            class="categories__container--categories--list-item"
            v-for="(item, key) in categories"
            :key="key"
            :class="{ 'item-active': item.id == activeCategory }"
            @click="activeCategori(item)"
          >
            {{ item.name === 'Çiçek' ? item.name + ' (120)' : item.name }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Categories',
  data() {
    return {
      categories: [
        {
          id: 1,
          name: 'Tüm Kategoriler',
          isActive: true,
        },
        {
          id: 2,
          name: 'Elektronik',
          isActive: false,
        },
        {
          id: 3,
          name: 'Ev ve Yaşam',
          isActive: false,
        },
        {
          id: 4,
          name: 'Evcil Hayvan',
          isActive: false,
        },
        {
          id: 5,
          name: 'Kitap',
          isActive: false,
        },
        {
          id: 6,
          name: 'Oyuncak',
          isActive: false,
        },
        {
          id: 7,
          name: 'Spor',
          isActive: false,
        },
        {
          id: 8,
          name: 'Çiçek',
          isActive: false,
        },
        {
          id: 9,
          name: 'Hediye',
          isActive: false,
        },
        {
          id: 10,
          name: 'Moda, Aksesuar',
          isActive: false,
        },
        {
          id: 11,
          name: 'Ofis, Kırtasiye',
          isActive: false,
        },
        {
          id: 12,
          name: 'Parfüm',
          isActive: false,
        },
        {
          id: 13,
          name: 'Kişisel Bakım',
          isActive: false,
        },
        {
          id: 14,
          name: 'Petshop',
          isActive: false,
        },
      ],
      isToggleCategory: true,
      activeCategory: 1,
    };
  },
  methods: {
    activeCategori(item) {
      this.activeCategory = item.id;
      this.$store.dispatch('product/setSelectedCategory', item);
    },
  },
  mounted() {
    const startCategory = {
      id:1,
      name: 'Tüm Kategoriler',
      isActive: true,
    };
    this.activeCategory =1;
    this.activeCategori(startCategory);
  },
};
</script>

<style></style>
