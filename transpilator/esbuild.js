const {buildSync} = require('esbuild');

buildSync({
    entryPoints: ['main.ts'],
    outfile: 'dist/bundle.js',
    bundle: true
});