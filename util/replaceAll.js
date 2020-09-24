const replaceAll = (stringToReplace, substringToFind, substringToReplace) => {
  let copy = stringToReplace;
  while (copy.includes(substringToFind)) {
    copy = copy.replace(substringToFind, substringToReplace);
  }
  return copy;
};

const sanitizeIds = (id) => {
  return replaceAll(id, " ", "-");
};

module.exports = { sanitizeIds };
