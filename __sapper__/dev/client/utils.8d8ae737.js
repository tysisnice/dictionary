import { M as onMount } from './index.6e2061dd.js';
import './index.2be2201c.js';

function connectStore(store, callback) {
    onMount(function () { return store.subscribe(callback); });
}
function connectStores() {
    for (var i = 0; i < arguments.length; i++) {
        connectStore(arguments[i][0], arguments[i][1]);
    }
}

export { connectStores as a, connectStore as c };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuOGQ4YWU3MzcuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OzsifQ==
