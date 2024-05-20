// const path = require('path');
// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

// module.exports = {
//     // Other webpack configuration options...
//     plugins: [
//         new NodePolyfillPlugin()
//     ]
// };


// module.exports = {
//     externals: {
//         nodemailer: 'commonjs nodemailer',
//         stream: 'stream',
//         crypto: 'crypto',
//         os: 'os',
//         url: 'url',
//         util: 'util',
//         path: 'path',
//         zlib: 'zlib',
//         https: 'https',
//     },
//     // resolve: {
//     //     fallback: {
//     //         "stream": require.resolve("stream-browserify"),
//     //         "crypto": require.resolve("crypto-browserify")
//     //     }
//     // }
//     resolve: {
//         fallback: {
//             "stream": false,
//         }
//     },
//     resolve: {
//         fallback: {
//             "crypto": false
//         }
//     },
//     resolve: {
//         fallback: {
//             "os": false,
//         }
//     },
//     resolve: {
//         fallback: {
//             "url": false,
//         }
//     },
//     resolve: {
//         fallback: {
//             "util": false,
//         }
//     },
//     resolve: {
//         fallback: {
//             "path": false,
//         }
//     },
//     resolve: {
//         fallback: {
//             "zlib": false,
//         }
//     },
//     resolve: {
//         fallback: {
//             "https": false
//         }
//     }
// };
