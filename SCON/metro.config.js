/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
 const { getDefaultConfig } = require("metro-config");
 const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues();
 exports.resolver = {
   ...defaultResolver,
   sourceExts: [
     ...defaultResolver.sourceExts,
     "cjs",
   ],
 };
module.exports = {
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: true,
            },
        }),
    },
    resolver: {
        sourceExts: ['jsx', 'js', 'ts', 'tsx', 'cjs'], //add here
      },
}

// const blacklist = require('metro-config/src/defaults/blacklist');
// module.exports = {
//   resolver: {
//     blacklistRE: blacklist([/#current-cloud-backend\/.*/]),
//   },
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: false,
//       },
//     }),
//   },
// };
