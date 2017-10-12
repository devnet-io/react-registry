# Optional Bundler Configuration

To allow components to be registered without importing them, the bundler may need to be configured. The purpose of these configs is to allow files with a component and a register statement to be run once, adding the component to the registry. This is not required, components can simply be imported once or registered in file that is imported instead of in the individual component files.

## Webpack Example

!>**The below is an experimental configuration. Someone with more webpack experience might be able to provide a better solution.**

Configure webpack to add all files with a *.reg.jsx* extension as entry points.

```
npm install glob --save
```

In webpack.config.*.js

```js
    import glob from 'glob';

    // Create array containing ths paths of all files that end in .reg.jsx
    const registered = glob.sync('./src/**/*reg.jsx');

    export default {
       // Standard config begins...

        entry: [...registered, './src/index.js'], // Array with all .reg.jsx files and standard entry

        // Standard config continues...
    }
```
