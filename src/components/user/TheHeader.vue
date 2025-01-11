<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import TheNav from './TheNav.vue';
import { useWindowScroll } from '@vueuse/core';
import { ref, watchEffect } from 'vue';

// Định nghĩa biến `isFixed` và sử dụng `useWindowScroll` để theo dõi vị trí cuộn
const isFixed = ref(false);
const previousScrollY = ref(0);  // Biến lưu vị trí cuộn trước đó

const { y } = useWindowScroll(); // Trả về giá trị cuộn theo trục y

// Thêm hoặc bớt class `fixed` khi cuộn lên hoặc cuộn xuống
watchEffect(() => {
  if (y.value < previousScrollY.value && y.value>110) {  // Nếu cuộn lên
    isFixed.value = true;
  } else {  // Nếu cuộn xuống
    isFixed.value = false;
  }
  
  previousScrollY.value = y.value;  // Cập nhật vị trí cuộn trước đó
});

const isDark = useDark({
    storageKey: 'my-dark-mode', // Tên key lưu vào localStorage
});
const toggleDark = useToggle(isDark)





</script>

<template>
    <!-- Header Start -->
    <div :class="{'header-area': true, 'fixed': isFixed}">
        <div class="main-header header-sticky">
            <div class="container-fluid">
                <div class="menu-wrapper">
                    <!-- Logo -->
                    <div class="logo">
                        <router-link to="/"><img src="@/assets/img/logo/logo.png" alt="logo"></router-link>
                    </div>
                    <!-- Main-menu -->
                    <TheNav></TheNav>
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

<style scoped>
.header-area {
  transition: all 0.3s ease-in-out; /* Thêm hiệu ứng chuyển tiếp cho toàn bộ thay đổi */
}

.fixed {
    /* background: transparent !important; */
    position: fixed;
    width: 100%;
    z-index: 999;
    top: 0;
    left: 0;
   

}
</style>