<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import TheMenu from './TheMenu.vue';


const isDark = useDark({
    storageKey: 'my-dark-mode', // Tên key lưu vào localStorage
});
const toggleDark = useToggle(isDark)


</script>

<template>
    <!-- Header Start -->
    <div class="header-area">
        <div class="main-header header-sticky">
            <div class="container-fluid">
                <div class="menu-wrapper">
                    <!-- Logo -->
                    <div class="logo">
                        <router-link to="/"><img src="@/assets/img/logo/logo.png" alt="logo"></router-link>
                    </div>
                    <!-- Main-menu -->
                    <TheMenu></TheMenu>
                    <!-- Header Right -->
                    <div class="header-right">
                        <ul>
                            <li>

                                <div class="search-box">
                                    <button class="btn-search"><span class="flaticon-search icon_color"></span></button>
                                    <input type="text" class="input-search" placeholder="Search...">
                                </div>
                            </li>
                            <li> <a href=""><span class="flaticon-user icon_color"></span></a></li>
                            <li><a href=""><span class="flaticon-shopping-cart icon_color"></span></a> </li>
                            <li>
                                <div class="checkbox-wrap">
                                    <input type="checkbox" class="checkbox" id="checkbox" @input="toggleDark()">
                                    <label for="checkbox" class="checkbox-label">
                                        <i class="fas fa-moon"></i>
                                        <i class="fas fa-sun"></i>
                                        <span class="ball"></span>
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Mobile Menu -->
                <div class="col-12">
                    <div class="mobile_menu d-block d-lg-none"></div>
                </div>
            </div>
        </div>
    </div>
    <!-- Header End -->
  
</template>

<style scoped></style>