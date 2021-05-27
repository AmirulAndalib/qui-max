import type { App } from 'vue';

import QCol from './src/QCol.vue';

/* istanbul ignore next */
QCol.install = (app: App): void => {
  app.component(QCol.name, QCol);
};

export type { QColProps, QColInstance } from './src/types';
export default QCol;
