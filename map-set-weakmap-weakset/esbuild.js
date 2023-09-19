const {buildSync} = require('esbuild');

buildSync({
    entryPoints: ['src/main.ts'],
    outfile: 'dist/bundle.js'
})