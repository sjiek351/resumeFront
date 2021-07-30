import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
// import zhHant from 'vuetify/lib/locale/zh-Hant';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    default: 'light',
    themes: {
      light: {
        primary: colors.red.darken1,//'#007BFF'
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
   /* lang: {
      locales: { zhHant },
      current: 'zhHant',
    },*/
  icons: {
    iconfont: 'fa',
  },
});
