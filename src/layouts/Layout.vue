<template>
  <div id="app">
    <Header />
    <CsTitle />
    <BreadCrumb />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import CsTitle from '../components/CsTitle';
import BreadCrumb from '../components/BreadCrumb';
export default {
  name: 'Layout',
  components:{
    Header,
    Footer,
    CsTitle,
    BreadCrumb
  }
}
</script>