import { createVuetify } from "vuetify";

import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
// import * as labsComponents from 'vuetify/labs/components'


const aliasesCustom = {
    ...aliases
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    defaults,
    // add theme
    theme: {
      defaultTheme: LIGHT_THEME,
      themes: {
        light,
        dark,
      },
      // add color variations
      //   variations: {
      //     colors: ["primary", "secondary"],
      //     lighten: 3,
      //     darken: 3,
      //   },
    },
    // components: {
    //     // ...components,
    //     // ...labsComponents,
    // },
    // Add the custom iconset
    icons: {
        // ...appIcons,
        defaultSet: 'mdi',
        aliases: {
            ...aliasesCustom,
            // account: mdiAccount,
            // accountConvert: mdiAccountConvert,
            // accountGroup: mdiAccountGroup,
            // accountMultiple: mdiAccountMultiple,
            // alert: mdiAlert,
            // alertCircleOutline: mdiAlertCircleOutline,
            // alertOctagram: mdiAlertOctagram,
            // apps: mdiApps,
            // arrowLeft: mdiArrowLeft,
            // arrowRight: mdiArrowRight,
            // arrowExpandAll: mdiArrowExpandAll,
            // arrowUp: mdiArrowUp,
            // arrowDown: mdiArrowDown,
            // arrowUpThick: mdiArrowUpThick,
            // arrowDownThick: mdiArrowDownThick,
            // bellOutline: mdiBellOutline,
            // calendar: mdiCalendar,
            // camera: mdiCamera,
            // cardMultipleOutline: mdiCardMultipleOutline,
            // checkboxMarkedCircleOutline: mdiCheckboxMarkedCircleOutline,
            // checkBoxOn: mdiCheckboxMarked,
            // checkBoxOff: mdiCheckboxBlankOutline,
            // checkBold: mdiCheckBold,
            // chevronDown: mdiChevronDown,
            // chevronLeft: mdiChevronLeft,
            // chevronRight: mdiChevronRight,
            // chevronUp: mdiChevronUp,
            // close: mdiClose,
            // closeCircle: mdiCloseCircle,
            // cog: mdiCog,
            // comment: mdiComment,
            // delete: mdiDelete,
            // deleteOutline: mdiDeleteOutline,
            // dotsVertical: mdiDotsVertical,
            // dramaMasks: mdiDramaMasks,
            // email: mdiEmail,
            // eye: mdiEye,
            // eyeOff: mdiEyeOff,
            // emoticonHappyOutline: mdiEmoticonHappyOutline,
            // facebook: mdiFacebook,
            // filter: mdiFilter,
            // filterOff: mdiFilterOff,
            // flag: mdiFlag,
            // genderTransgender: mdiGenderTransgender,
            // google: mdiGoogle,
            // heart: mdiHeart,
            // heartOutline: mdiHeartOutline,
            // home: mdiHomeAlert,
            // instagram: mdiInstagram,
            // lock: mdiLock,
            // login: mdiLogin,
            // magnify: mdiMagnify,
            // magnifyClose: mdiMagnifyClose,
            // mapMarker: mdiMapMarker,
            // movieOpen: mdiMovieOpen,
            // palette: mdiPalette,
            // pencil: mdiPencil,
            // play: mdiPlay,
            // plusThick: mdiPlusThick,
            // record: mdiRecord,
            // search: mdiMagnify,
            // themeDark: mdiBrightness2,
            // themeLight: mdiBrightness5,
            // refresh: mdiRefresh,
            // settings: mdiCog,
            // sort: mdiSort,
            // star: mdiStar,
            // starHalfFull: mdiStarHalfFull,
            // starOutline: mdiStarOutline,
            // swapVerticalBold: mdiSwapVerticalBold,
            // textBoxEditOutline: mdiTextBoxEditOutline,
            // textBoxOutline: mdiTextBoxOutline,
            // thumbDown: mdiThumbDown,
            // thumbDownOutline: mdiThumbDownOutline,
            // thumbUp: mdiThumbUp,
            // thumbUpOutline: mdiThumbUpOutline,
            // trashCanOutline: mdiTrashCanOutline,
            // twitter: mdiTwitter,
            // videoVintage: mdiVideoVintage,
            // viewList: mdiViewList,
            // web: mdiWeb,
            // youtube: mdiYoutube,
        },
        sets: {
          mdi,
        //   custom: customIcons,
        },
    },
  });

  app.vueApp.use(vuetify);
});
