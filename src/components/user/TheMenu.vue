<template>
    <div class="main-menu d-none d-lg-block">
        <nav>
            <ul id="navigation">
                <li>
                    <router-link :to="{ name: 'user-home' }"   activeClass="activity"
                    exactActiveClass="activity">{{ $t('menuTitle.home') }}</router-link>
                </li>
                <li><router-link :to="{ name: 'user-shop' }"  activeClass="activity"
                    exactActiveClass="activity">{{ $t('menuTitle.shop') }}</router-link></li>
                <li><a href="about.html">about</a></li>
                <li class="hot"><a href="#">Latest</a>
                    <ul class="submenu">
                        <li><a href="shop.html"> Product list</a></li>
                        <li><a href="product_details.html"> Product Details</a></li>
                    </ul>
                </li>
                <li><a href="blog.html">Blog</a>
                    <ul class="submenu">
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="blog-details.html">Blog Details</a></li>
                    </ul>
                </li>
                <li><a href="#">Pages</a>
                    <ul class="submenu">
                        <li><a href="">Login</a></li>
                        <li><a href="">Cart</a></li>
                        <li><a href="">Element</a></li>
                        <li><a href="">Confirmation</a></li>
                        <li><a href="">Product Checkout</a></li>
                    </ul>
                </li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
  
    
</script>


<style scoped>
    .activity {
        color: #ff2020 !important;
        pointer-events: none;
        scale: 1.1;
        transition: scale 0.25s;
    }

</style>