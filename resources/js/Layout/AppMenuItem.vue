<template>
    <li class="app-menu-item">
      <router-link :to="item.path">{{ item.name }}</router-link>
    </li>
  </template>
  
  <script>
  export default {
    props: {
      item: Object,
    },
  };
  </script>
  