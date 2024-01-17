/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");
const {env} = require("eslint-plugin-vue/lib/configs/base");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  "rules": {
    "no-unused-vars": env.NODE_ENV === "production" ? "error" : "warn"
  }
};
