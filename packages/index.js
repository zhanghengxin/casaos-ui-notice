// ref: https://juejin.cn/post/6919125800637693959
import Notice from '/packages/local-stroage-notice.vue';

const install = function (Vue) {
    // 全局注册组件
    Vue.component('local-stroage-notice', Notice);
}

export {
    install,
    Notice
}

export default {
    install
}