import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: colors.indigo.lighten3,
        secondary: colors.red.lighten3,
        light: colors.blueGrey.lighten5,
        dark: colors.grey.darken4,
      },
      dark: {
        primary: colors.indigo.darken2,
        secondary: colors.red.darken3,
        light: colors.blueGrey.darken4,
        dark: colors.grey.lighten3,
      },
    },
  },
  icons: {
    iconfont: 'fa',
  },
});
