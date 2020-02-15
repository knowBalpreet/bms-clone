const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const tsImportPluginFactory = require('ts-import-plugin');

const CSSLoader = {
  test: /\.css$/,
  // exclude: /node_modules/,
  use: [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
      options: { importLoaders: 1 },
    },
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: `${__dirname}/postcss.config.js`,
        },
      },
    },
  ],
};

const FONTLoader = {
  test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'assets/webfonts/',
      },
    },
  ],
};

const LessLoader = {
  test: /\.less$/,
  use: [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
    },
    {
      loader: 'less-loader',
      options: {
        paths: [path.resolve(__dirname, 'node_modules')],
        javascriptEnabled: true,
      },
    },
  ],
};

const htmlLoader = {
  test: /\.html$/,
  use: [
    {
      loader: 'html-loader',
    },
  ],
};

const JSLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      babelrcRoots: ['.', '../'],
      presets: ['@babel/preset-react', '@babel/preset-env', 'linaria/babel'],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-export-default-from',
        'syntax-dynamic-import',
        ['import', { libraryName: 'antd', style: true }],
      ],
    },
  },
};

const TSLoader = {
  test: /\.(tsx|js|ts)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
        getCustomTransformers: () => ({
          before: [
            tsImportPluginFactory({
              libraryName: 'antd',
              libraryDirectory: 'es',
              style: true,
            }),
          ],
        }),
        configFile: path.join(__dirname, '..', 'tsconfig.json'),
        compilerOptions: {
          module: 'es2015',
        },
      },
    },
  ],
};

const SVGLoader = {
  test: /\.svg/,
  use: {
    loader: 'svg-url-loader',
    options: {},
  },
};

const ESLintLoader = {
  test: /\.js$/,
  enforce: 'pre',
  exclude: /node_modules/,
  use: {
    loader: 'eslint-loader',
    options: {
      configFile: `${__dirname}/../.eslintrc`,
    },
  },
};

const TSLintLoader = {
  test: /\.tsx$/,
  enforce: 'pre',
  exclude: /node_modules/,
  use: {
    loader: 'tslint-loader',
    options: {},
  },
};

module.exports = {
  JSLoader,
  htmlLoader,
  CSSLoader,
  LessLoader,
  SVGLoader,
  ESLintLoader,
  TSLintLoader,
  FONTLoader,
  TSLoader,
};
