<template>
    <h1> {{ t("hello", {}, {locale: 'es' }) }} </h1>
    <h1> {{ t("hello") }}</h1>
</template>
<script>

import { useI18n } from 'vue-i18n'


export default {
    name:'HomeView',
    setup() {

        const { t } = useI18n();
        const message = 'HOME!'
        return { message, t }
    }
}
</script>
<style>

</style>