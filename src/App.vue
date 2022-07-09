<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import { IonApp } from '@ionic/vue';
</script>

<template>
<IonApp>
<NavBar />
  <!-- Main app header here with dynamic links passed in an object -->
  <router-view></router-view>
</IonApp>
</template>
