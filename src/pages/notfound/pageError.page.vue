<script setup lang="ts">
  
</script>

<template>
    <div class="error-page">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <router-link to="/" class="text-error">Go back to Home</router-link>
    </div>
  </template>
  

  
  <style scoped>
  .error-page {
    height: 90vh;
    display: flex;
    /* text-align: center; */
    flex-direction: column;
    align-items: center;
    justify-content: center

  }
  .error-page h1 {
    margin-top: -10vh;
    color: var(--error-text-color);
    font-size: 50px;
  }


  .text-error {
    color: #ff2020;;
  }
  </style>
  