const imagemin = require("imagemin-keep-folder");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminPngquant = require("imagemin-pngquant");
const imageminGifsicle = require("imagemin-gifsicle");
const imageminSvgo = require("imagemin-svgo");
const imageminWebp = require("imagemin-webp");
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

const convertWebp = (targetFiles) => {
  imagemin([targetFiles], {
    use: [imageminWebp({ quality: 50 })],
  });
};

imagemin(["src/images/**/*.{jpg,png,gif,svg}"], {
  plugins: [
    imageminMozjpeg({ quality: 80 }),
    imageminPngquant({ quality: [0.65, 0.8] }),
    imageminGifsicle(),
    imageminSvgo(),
  ],
  replaceOutputDir: (output) => {
    return output.replace(/images\//, `../${options.mode}/images/`);
  },
}).then(() => {
  convertWebp(`./${options.mode}/images/**/*`);
  console.log("Images optimized");
});
