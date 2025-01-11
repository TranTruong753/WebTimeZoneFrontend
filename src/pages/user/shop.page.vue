<template>
    <div>
        <h1>{{ $t('welcome') }}</h1>
        <p>{{ $t('greeting', { name: 'John' }) }}</p>
        <button @click="switchLanguage('vi')">Tiếng Việt</button>
        <button @click="switchLanguage('en')">English</button>
    </div>
</template>

<script setup lang="ts">
import { useConfigStore } from '@/stores/config.store';
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const useConfig = useConfigStore()



const switchLanguage = (lang:any) => {
    useConfig.addAndUpdateKeyConfig('lang',lang)
    locale.value = lang
}
</script>