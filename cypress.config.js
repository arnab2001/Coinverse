const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "98ck39",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
