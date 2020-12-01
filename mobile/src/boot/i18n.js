import Vue from 'vue';
import VueI18n from 'vue-i18n';
import i18nOptions from '@/i18n';

Vue.use(VueI18n);

const i18n = new VueI18n(i18nOptions);

export default ({ app }) => {
  app.i18n = i18n;
};

export { i18n };
