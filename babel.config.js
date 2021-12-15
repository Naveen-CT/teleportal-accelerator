module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
          '.e2e.js'
        ],
        alias: {
          atoms: './src/app/components/atoms',
          molecules: './src/app/components/molecules',
          organisms: './src/app/components/organisms',
          templates: './src/app/components/templates',
          pages: './src/app/pages',
          models: './src/app/models',
          app: './src/app'
        }
      }
    ]
  ]
};
