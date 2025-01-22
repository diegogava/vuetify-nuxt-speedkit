<script setup lang="ts">

    ///////////////////////////////////////////////
    ////////////// OPTIONS / PROPS ////////////////
    ///////////////////////////////////////////////

    defineOptions({ inheritAttrs: false })

    ///////////////////////////////////////////////
    /////////////////// IMPORTS ///////////////////
    ///////////////////////////////////////////////

    // Booster
    import { getStyleDescription } from '#booster/utils/description'
    import BoosterLayer from '#booster/components/BoosterLayer'

    // Components
    // import { VBtn } from 'vuetify/components/VBtn'

    // Fonts
    const { $getFont } = useBoosterFonts()

    ///////////////////////////////////////////////
    ////////////////// FETCH DATA /////////////////
    ///////////////////////////////////////////////

    ///////////////////////////////////////////////
    ///////////////// DATA/METHODS ////////////////
    ///////////////////////////////////////////////

    const messages: {
        main: string;
        booster: {
            disabledJS: string;
            outdatedBrowser: string;
            reducedBandwidth: string;
            weakHardware: string;
            lowBattery: string;
        };
        close: {
            noJS: string;
            noScripts: string;
            allFeatures: string;
        };
    } = {
        main: 'Desculpa, detectamos um problema ao carregar a página devido a: ',
        booster: {
            disabledJS: 'Javascript desativado',
            outdatedBrowser: 'Navegador desatualizado',
            reducedBandwidth: 'Internet fraca',
            weakHardware: 'Hardware fraco',
            lowBattery: 'Pouca bateria',
        },
        close: {
            noJS: 'Continuar sem Javascript',
            noScripts: 'Continuar sem scripts',
            allFeatures: 'Continuar com todas as funcionalidades'
        }
    }

</script>

<template>
  <booster-layer v-bind="$attrs"
    class="fixed !w-[100vw] !min-h-[100vh] !top-0 z-[2000] backdrop-filter backdrop-brightness-75 backdrop-blur nuxt-booster-layer-visible">
    <div class="p-4 w-full">
      <p v-font="$getFont('Roboto', 400, 'normal')"
        class="text-center">
        {{messages.main}}
      </p>
      <ul class="p-0 list-none text-center"
        v-font="$getFont('Roboto', 700, 'normal')">
        <li id="nuxt-booster-message-nojs">
            {{messages.booster.disabledJS}}
        </li>
        <li id="nuxt-booster-message-unsupported-browser">
            {{messages.booster.outdatedBrowser}}
        </li>
        <li id="nuxt-booster-message-reduced-bandwidth">
            {{messages.booster.reducedBandwidth}}
        </li>
        <li id="nuxt-booster-message-weak-hardware">
            {{messages.booster.weakHardware}}
        </li>
        <li id="nuxt-booster-message-low-battery">
            {{messages.booster.lowBattery}}
        </li>
      </ul>
      <div class="info-layer-buttons w-full flex flex-col items-center"
        v-font="$getFont('Roboto', 700, 'normal')">
        <button class="nuxt-booster-button-init-nojs mt-3 p-3 bg-gray-500/30 rounded cursor-pointer">
          <label for="nuxt-booster-layer-close">
            {{messages.close.noJS}}
          </label>
        </button>

        <!-- Button for use without javascript and with fonts -->
        <button class="nuxt-booster-button-init-reduced-view mt-3 p-3 bg-gray-500/30 rounded cursor-pointer">
          <label for="nuxt-booster-layer-close">
            {{messages.close.noScripts}}
          </label>
        </button>

        <!-- Button for activate javascript by bad connection or browser support -->
        <button class="nuxt-booster-button-init-app mt-3 p-3 bg-gray-500/30 rounded cursor-pointer">
            <label for="nuxt-booster-layer-close">
              {{messages.close.allFeatures}}
            </label>
        </button>
      </div>
    </div>
  </booster-layer>
</template>


