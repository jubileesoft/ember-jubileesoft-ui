function join(stringArray) {
  let joined = null;

  stringArray.forEach(function (text) {
    if (!text) {
      return;
    }

    if (joined == null) {
      joined = text;
    } else {
      joined = joined + `\n` + text;
    }
  });

  return joined;
}

export { join };