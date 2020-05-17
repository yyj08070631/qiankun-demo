<template>
  <a-spin :spinning="baseAppLoading" size="large">
    <a-layout style="min-height:100vh;">
      <a-layout-sider v-model="collapsed" collapsible>
        <div class="home-logo" />
        <a-menu :default-selected-keys="[locationHref]" theme="dark" mode="inline" @click="handleMenuItemClick">
          <a-menu-item v-for="nav in navs" :key="nav.key">
            <a-icon type="pie-chart" />
            <span>{{ nav.name }}</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0" />
        <a-layout-content style="margin: 0 16px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>User</a-breadcrumb-item>
            <a-breadcrumb-item>Bill</a-breadcrumb-item>
          </a-breadcrumb>
          <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
            <router-view v-show="locationHref.startsWith('/#/')" />
            <a-spin v-show="locationHref.startsWith('/vue2/#/') && microAppLoading" class="home-empty-loading" />
            <div v-show="locationHref.startsWith('/vue2/#/') && !microAppLoading" id="vue2" />
          </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-spin>
</template>
<script>
import { mapState } from 'vuex'

const navs = [
  { name: 'Index', key: '/#/' },
  { name: 'Vue11', key: '/#/vue11' },
  { name: 'Vue12', key: '/#/vue12' },
  { name: 'Vue2', key: '/vue2/#/' },
  { name: 'Vue2About', key: '/vue2/#/about' }
]

export default {
  name: 'Home',
  data: () => ({
    navs,
    locationHref: window.location.href.replace(window.location.origin, '').replace(/\?.+/, ''),
    collapsed: false
  }),
  methods: {
    handleMenuItemClick ({ item, key, keyPath }) {
      const { name, key: url } = this.navs[item.index]
      this.locationHref = url
      window.history.pushState({}, name, url)
    }
  },
  computed: {
    ...mapState(['baseAppLoading', 'microAppLoading'])
  }
}
</script>
<style>
.home-logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.home-empty-loading {
  width: 100%;
  height: 360px;
  line-height: 360px !important;
  background-color: rgba(0,0,0,.05);
}
</style>
