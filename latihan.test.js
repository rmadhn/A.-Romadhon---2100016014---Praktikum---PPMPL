const { expect } = require("chai");
const { tambah, kali } = require("./math");

describe("Pengujian Kasus Negatif untuk Fungsi Tambah dan Kali", function () {
  it("seharusnya mengembalikan error jika input tambah adalah string", function () {
    expect(() => tambah("a", 2)).to.throw(Error);
  });

  it("seharusnya mengembalikan error jika input tambah adalah null", function () {
    expect(() => tambah(null, 2)).to.throw(Error);
  });

  it("seharusnya mengembalikan error jika input kali adalah string", function () {
    expect(() => kali("b", 3)).to.throw(Error);
  });

  it("seharusnya mengembalikan error jika input kali adalah null", function () {
    expect(() => kali(null, 3)).to.throw(Error);
  });
});
