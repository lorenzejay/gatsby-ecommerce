const path = require(`path`);
const data = require("./src/content/charisPresetsData.json");
exports.createPages = ({ actions: { createPage } }) => {
  data.cPresets.presets.forEach((preset) => {
    createPage({
      path: `presets/${preset.slug}`,
      component: require.resolve("./src/templates/Preset/index.js"),
      context: {
        id: preset.id,
        name: preset.name,
        price: preset.price,
        description: preset.description,
        guid: preset.guid,
        mainImage: preset.mainImage,
        beforeAndAfters: preset.beforeAndAfters,
        desktopPreset: preset.desktopPreset,
      },
    });
  });
};
