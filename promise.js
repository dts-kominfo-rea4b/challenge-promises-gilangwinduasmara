const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emotion) => {
  const theaterIXX = await promiseTheaterIXX();
  const theaterVGC = await promiseTheaterVGC();
  const emotions = [...theaterIXX, ...theaterVGC].reduce((acc, curr) => {
    if (curr.hasil === emotion) {
      acc += 1;
    }
    return acc;
  }, 0);
  return emotions;
};

module.exports = {
  promiseOutput,
};
