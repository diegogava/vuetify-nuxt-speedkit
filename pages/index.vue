<script setup lang="ts">
    import { useHydration } from 'quasar'
    const { isHydrated } = useHydration()

    // Fonts
    const { $getFont } = useBoosterFonts()

    // Booster
    import boosterHydrate from '#booster/hydrate'
    const hydrate = useBoosterHydrate()

    // Components
    const MenuFooter = hydrate(() => import('@/components/menu-footer/index.vue'))
    const MenuDrawer = hydrate(() => import('@/components/menu-drawer/index.vue'))
    const Edit = hydrate(() => import('@/components/edit/index.vue'))

</script>
<template>
    <q-btn v-if="isHydrated" v-font="$getFont('Roboto', 400, 'normal')" color="primary" label="Primary" rounded></q-btn>
    <QBtn  v-if="isHydrated" v-font="$getFont('Roboto', 400, 'normal')" color="secondary" label="Secondary" />
    <LazyQBtn color="amber" v-font="$getFont('Roboto', 400, 'normal')" glossy label="Amber" />
    <menu-footer></menu-footer>

    <menu-drawer></menu-drawer>

    <edit></edit>
</template>
