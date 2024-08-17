# プロジェクト環境

---

必要なプログラム
Node.js（https://nodejs.org/en/）
Git（https://git-scm.com/）
Yarn（https://classic.yarnpkg.com/ja/）

## 初期設定

---

### 動作環境

以下の環境で動作を確認済みです。

| タスク | バージョン |
| :----- | ---------- |
| Node   | v20.10.0   |
| yarn   | v1.22.19   |

#### 各プログラムの導入方法

##### Node.jsのインストール

- Mac: nodebrew を使用してバージョン管理（https://qiita.com/satoyan419/items/693a84e26a8ad2f0e29e）
- Windows: nodist を使用してバージョン管理（https://qiita.com/satoyan419/items/56e0b5f35912b9374305）
- バージョン管理しない場合は、インストーラをダウンロードしてインストール
  node -v

### Yarn

1. Homebrew をインストール
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

2. Yarnをインストール
   brew install yarn --ignore-dependencies

3. エラーが発生した場合
   brew install icu4c && brew link icu4c

4. Nodeのパスが通っていない場合
   mkdir /usr/local/opt/node
   ln -s .nodebrew/current/ /usr/local/opt/node/

5. PATHを設定
   export PATH="$PATH:/usr/local/Cellar/yarn/1.22.5/bin"

## ファイルディレクトリについて

---

### 基本モジュール

`yarn install`インストールされるモジュールの一覧:

| モジュール                                                                          | 詳細                                                                   |
| :---------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [autoprefixer](https://classic.yarnpkg.com/ja/package/autoprefixer)                 | CSS のベンダープレフィックスを追加・削除するモジュール                 |
| [browser-sync](https://classic.yarnpkg.com/ja/package/browser-sync)                 | ローカルサーバを立ち上げ、ブラウザの同期や自動リロードをするモジュール |
| [clean-css-cli](https://classic.yarnpkg.com/ja/package/clean-css-cli)               | CSS を圧縮するモジュール                                               |
| [command-line-args](https://classic.yarnpkg.com/ja/package/command-line-args)       | npm-scriptsで引数処理を行うモジュール                                  |
| [cpx2](https://classic.yarnpkg.com/ja/package/cpx2)                                 | ファイルをコピーして変更を監視するモジュール                           |
| [cssnano](https://classic.yarnpkg.com/ja/package/cssnano)                           | PostCSSの枠組みの中でCSSを最適化するモジュール                         |
| [ejs](https://classic.yarnpkg.com/ja/package/ejs)                                   | ejsコンパイラ                                                          |
| [fs](https://yarnpkg.com/package/fs)                                                | 対象となるファイルを収集するモジュール                                 |
| [glob](https://yarnpkg.com/package/glob)                                            | ファイル書き込みをするモジュール                                       |
| [imagemin](https://classic.yarnpkg.com/ja/package/imagemin)                         | 画像を圧縮するモジュール                                               |
| [imagemin-gifsicle](https://classic.yarnpkg.com/ja/package/imagemin-gifsicle)       | GIF ファイルを圧縮するモジュール                                       |
| [imagemin-keep-folder](https://classic.yarnpkg.com/ja/package/imagemin-keep-folder) | ディレクトリ構造そのままで画像を書き出すモジュール                     |
| [imagemin-mozjpeg](https://classic.yarnpkg.com/ja/package/imagemin-mozjpeg)         | JPG ファイルを圧縮するモジュール                                       |
| [imagemin-pngquant](https://classic.yarnpkg.com/ja/package/imagemin-pngquant)       | PNG ファイルを圧縮するモジュール                                       |
| [imagemin-svgo](https://classic.yarnpkg.com/ja/package/imagemin-svgo)               | SVG ファイルを圧縮するモジュール                                       |
| [imagemin-webp](https://classic.yarnpkg.com/ja/package/imagemin-webp)               | 画像をWebPに変換するモジュール                                         |
| [make-dir](https://classic.yarnpkg.com/ja/package/make-dir)                         | ディレクトリを作成するモジュール                                       |
| [npm-run-all](https://classic.yarnpkg.com/ja/package/npm-run-all)                   | npm-scriptsを順次・並列実行するモジュール                              |
| [onchange](https://classic.yarnpkg.com/ja/package/onchange)                         | ファイルを監視し、変更時にコマンドを実行するモジュール                 |
| [postcss-cli](https://classic.yarnpkg.com/ja/package/postcss-cli)                   | CSSを変換、PostCSSをコマンドラインから実行するモジュール               |
| [sass](https://classic.yarnpkg.com/ja/package/sass)                                 | sass本体をインストールするモジュール                                   |
| [ts-loader](https://classic.yarnpkg.com/ja/package/ts-loader)                       | typescriptを読み込むモジュール（webpack向け）                          |
| [tslint](https://classic.yarnpkg.com/ja/package/tslint)                             | tslint本体をインストールするモジュール                                 |
| [tslint-loader](https://classic.yarnpkg.com/ja/package/tslint-loader)               | ts-lintを読み込むモジュール（webpack向け）                             |
| [typescript](https://classic.yarnpkg.com/ja/package/sass)                           | typescript本体をインストールするモジュール                             |
| [uglify-es](https://classic.yarnpkg.com/ja/package/uglify-es)                       | ES6で書かれたJavaScriptを圧縮するモジュール                            |
| [uglifyjs-folder](https://classic.yarnpkg.com/ja/package/uglifyjs-folder)           | フォルダ内のすべての.jsを変換するモジュール                            |
| [watch](https://classic.yarnpkg.com/ja/package/watch)                               | ファイルツリーを監視するモジュール                                     |
| [webpack](https://classic.yarnpkg.com/ja/package/webpack)                           | webpack本体をインストールするモジュール                                |
| [webpack-cli](https://classic.yarnpkg.com/ja/package/webpack-cli)                   | webpack本体をインストールするモジュール                                |
| [webpack-merge](https://classic.yarnpkg.com/ja/package/webpack-merge)               | webpackの設定ファイルをマージするモジュール                            |
| [yarn](https://classic.yarnpkg.com/ja/package/yarn)                                 | JavaScriptのパッケージマネージャ。npmと互換性がある                    |

### プロジェクト構成

    project
    	├ src/(作業用ディレクトリ)
    	│  ├ ejs/(EJSファイルを置くディレクトリ)
    	│  ├ sass/(SCSSファイルを置くディレクトリ)
    	│  ├ js/(JSファイルを置くディレクトリ)
    	│  └ images/(画像を置くディレクトリ)
    	├ build/(デバッグ用ディレクトリ)
    	├ release/(納品用ディレクトリ)
    	├ tasks/(npm-script用ディレクトリ)
    	├ configs/(npm-script用ディレクトリ)
    	├ package.json(node_modulesを読み込むためのjsonファイル)
    	├ yarn.lock(パッケージのバージョンを固定するファイル。初回インストール時に自動生成される)
    	└ .gitignore(gitで管理しないファイルを定義するファイル)

### Sass のディレクトリ構成

開発環境の src/sass フォルダには、ベースとなる Sass ファイルが入っています。必要に応じて`カスタマイズ`してください。

    project
      └ src
        └ sass
          ├ helpers(変数やmixinなど使い回すSassを格納するフォルダ)
          ├ base(リセットの設定やページ全体の初期設定をするSassフォルダ)
          ├ components(パーツごとに指定したSassを格納するフォルダ)
          ├ layout(headerやfooterなどサイト全体で共通で使うSassを格納するフォルダ)
          ├ pages(ページごとに定義するSassを格納するフォルダ)
          └ style.scss(最終的に出力されるcss)

## コマンド

---

### 初期設定

開発環境があるプロジェクトフォルダに移動した上で、npm-script のタスクを実行するために必要なモジュールを yarn 経由でインストールします。プロジェクト内に`node_modules`フォルダができます。npm-script を動作させるためには、`node_modules`が必要です。プロジェクトごとに、`node_modules`のインストールが必要です。

### 開発用ファイルを一括で出力する

    yarn build

- Git から Pull した時
- 開発環境にアップする時
- 画像を追加した時
- ライブラリを追加した時

### 開発をする

    yarn dev

1.  ローカルサーバーが立ち上がる
2.  対象となるファイルを監視
3.  ファイルが更新されたらタスク(html, sass, js, image, copy)が実行されブラウザが自動的にリロードされる

### 納品用ファイルを一括で出力する

    yarn release

## 設定ファイルのカスタマイズ

---

基本的には対象ファイルと出力先の設定をします
（通常のディレクトリ構成であれば、変更する必要はありません）

### HTML の設定

#### ejs

tasks/ejs.js を編集

```javascript
const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const glob = require("glob");
const makeDir = require("make-dir");
const commandLineArgs = require("command-line-args");

const optionDefinitions = [
  {
    name: "mode",
    alias: "m",
    type: String,
    defaultValue: "build",
  },
];
const options = commandLineArgs(optionDefinitions);

const srcDir = `${process.cwd()}/src/ejs`;
const distDir = `${process.cwd()}/` + options.mode;

glob(
  `**/*.ejs`,
  {
    cwd: srcDir,
    ignore: `**/_*.ejs`,
  },
  (er, files) => {
    for (let fileName of files) {
      convert(fileName, srcDir, distDir);
    }
  }
);

const convert = (fileName, srcDir, distDir) => {
  ejs.renderFile(path.resolve(srcDir, fileName), (err, str) => {
    if (err) {
      console.log(err);
      return;
    }

    const distPath = path.resolve(distDir, fileName);
    makeDir(path.dirname(distPath)).then(() => {
      const htmlPath = path.format({
        dir: path.dirname(distPath),
        name: path.basename(distPath, ".ejs"),
        ext: ".html",
      });
      fs.writeFile(htmlPath, str, () => {});
    });
  });
};
```

### Sass の設定

package.json を編集

```json
    "build:css": "sass src/sass:build/css && cleancss -o ./build/css/style.css ./build/css/**/*.css --format beautify --compatibility '*'",
    "release:css": "sass src/sass:release/css --no-source-map && cleancss -o ./release/css/style.css ./release/css/**/*.css --compatibility '*'",
```

### TypeScript の設定

外部ライブラリはTypescriptでimportしてbundleする（vendor.js）。
config/webpack.base.config.js を編集

```javascript
"use strict";

const path = require("path");
const base = path.resolve();

module.exports = {
  context: path.resolve(__dirname, "../"),
  entry: "./src/ts/app.ts",
  output: {
    filename: "main.js",
  },
  target: "node",
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
          {
            loader: "tslint-loader",
            options: {
              typeCheck: true,
              fix: false,
              emitErrors: true,
            },
          },
        ],
        exclude: /(node_modules|client)/,
      },
    ],
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts"],
    alias: {
      "@": "src/ts",
    },
  },
  externals: {},
  plugins: [],
  optimization: {
    splitChunks: {
      name: "vendor",
      chunks: "initial",
    },
  },
};
```

必要に応じて以下も編集（書き出し先、watchの設定なので基本は編集不要）
config/webpack.dev.config.js を編集
config/webpack.build.config.js を編集
config/webpack.release.config.js を編集

### 画像の設定

tasks/imagemin.js を編集（release時）
defaultでは`src/images/`のファイルが`build/images`にコピーされる。

```javascript
const imagemin = require("imagemin-keep-folder");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminPngquant = require("imagemin-pngquant");
const imageminGifsicle = require("imagemin-gifsicle");
const imageminSvgo = require("imagemin-svgo");

imagemin(["src/images/**/*.{jpg,png,gif,svg}"], {
  plugins: [
    imageminMozjpeg({ quality: 80 }),
    imageminPngquant({ quality: [0.65, 0.8] }),
    imageminGifsicle(),
    imageminSvgo(),
  ],
  replaceOutputDir: (output) => {
    return output.replace(/images\//, "../release/images/");
  },
}).then(() => {
  console.log("Images optimized");
});
```

### ファイルコピーの設定

package.json を編集

```json
    "build:copy": "cpx \"src/copy/*\" build/*",
    "release:copy": "cpx \"src/copy/*\" release/*"
```

## CMS に組み込み時の開発環境の役割

---

CMS の構築が必要な場合は、CMS 側に組み込んだ時点で HTML は`CMSから出力されるHTMLを最新版`としてください。

DOM の更新は CMS で行い、`CSS・JSの開発は開発環境`で行います。DOM に大きな修正や更新があった場合は、`開発環境で試した上でCMSに組み込みを依頼`してください。

CMS 担当者に渡す際に、`どこが修正されたか`お知らせしてください。Git の差分を一緒にお知らせしてあげると、ソースレベルでの確認しやすくなります。
