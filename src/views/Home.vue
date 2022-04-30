<template>
    <h1> {{ $t("hello") }}</h1>
</template>
<script>

import { useI18n } from 'vue-i18n'

export default {
    name:'HomeView',
    setup() {

        const { t } = useI18n();

        console.log('t!!')
        return { t }
    }
}
</script>
<style>

</style>