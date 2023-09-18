const {buildSync} = require('esbuild');

buildSync({
    entryPoints: ['src/main.ts'],
    outfile: 'dist/bundle.js',
    bundle: true,
    minify: true,
    tsconfig: './tsconfig.json'
});