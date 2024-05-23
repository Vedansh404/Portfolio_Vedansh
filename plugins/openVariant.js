// eslint-disable-next-line no-undef
const plugin = require("tailwindcss/plugin");
const openVariant = plugin(function ({ addVariant }) {
  addVariant("group-open", ":merge(.group).open &");
  addVariant("peer-open", ":merge(.group).open ~ &");
});
// module.exports = openVariant;
export default openVariant;
