<template>
  <div class="page-wrapper">
    <!-- Top Bar -->
    <div class="page-main-header">
      <app-topbar></app-topbar>
    </div>
    <!-- Sidebar and Main Content -->
    <div class="page-body-wrapper">
      <!-- Sidebar -->
      <header :class="['main-nav', { 'nav-visible': store.isSidebarVisible, 'nav-hide': !store.isSidebarVisible }]">
        <app-sidebar v-if="store.isSidebarVisible"></app-sidebar>
      </header>
      <!-- Main Content -->
      <div :class="['page-body', { 'page-body-sidebar-visible': store.isSidebarVisible, 'page-body-sidebar-hide': !store.isSidebarVisible }]">
        <div class="container-fluid">
          <div class="content-header">
            <app-header></app-header>
          </div>
          <slot></slot>
          <footer>
            <!-- <app-footer></app-footer> -->
          </footer>
        </div>
      </div>
    </div>
    <app-setting></app-setting>
  </div>
</template>

<script setup>
import { store } from '../AppSettings.js';
import AppTopbar from './AppTopbar.vue';
import AppSidebar from './AppSidebar.vue';
import AppHeader from './AppHeader.vue';
import AppSetting from './AppSetting.vue';
import ConfigPanel from './ConfigPanel.vue';

</script>

<style scoped>
@import '../Layout/css/custom-layout.css';
</style>
