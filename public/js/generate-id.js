function generateId() {
  const alphaNumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "0123456789" + "abcdefghijklmnopqrstuvxyz";

  let id = "";
  for (let i = 0; i < 7; i++) {
    const index = Math.floor((Math.random() * alphaNumeric.length));
    id = id.concat(alphaNumeric[index]);
  }
  return id;
}

module.exports = generateId;