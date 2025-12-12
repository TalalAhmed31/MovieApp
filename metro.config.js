const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const { withNativeWind } = require("nativewind/metro");

// Load the default Metro config
const defaultConfig = getDefaultConfig(__dirname);

// Merge with your custom config (currently empty)
const config = mergeConfig(defaultConfig, {
  /* your custom config here */
});

// Pass to NativeWind with correct CSS path
module.exports = withNativeWind(config, {
  input: "./app/global.css", // change to "./global.css" if file is at root
});
