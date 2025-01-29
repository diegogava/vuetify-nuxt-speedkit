<script setup lang="ts">
    import { useHydration } from 'quasar'
    const { isHydrated } = useHydration()

</script>
<template>
    <q-btn v-if="isHydrated" color="primary" label="Primary" rounded></q-btn>
    <QBtn  v-if="isHydrated" color="secondary" label="Secondary" />
    <LazyQBtn color="amber" glossy label="Amber" />
    <menu-footer></menu-footer>
    <edit></edit>
</template>
