import { Store } from '@ngrx/store';

export default {
  //   get(store: Store) {
  //     return store.select('pokemon');
  //   },

  set(store: Store) {
    store.dispatch({ type: 'SSS' });
  }
};
