function makeIdFromName(name) {
  return name.toLowerCase().split(' ').join('-');
}

export default makeIdFromName;
