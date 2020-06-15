const pipeline = (input, ...methods) => methods.reduce((ac, cv) => cv(ac), input);

module.exports = () => pipeline(
  new Date,
  toISOString,
  withoutSeconds,
  withoutDashesAndColons,
  toDateDashTime
);


function toDateDashTime(str) {
  return str.replace('T', '-');
}

function withoutDashesAndColons(str) {
  return str.replace(/[-:]/g, '');
}

function withoutSeconds(isoString) {
  return isoString.slice(0, isoString.lastIndexOf(':'));
}

function toISOString(date) {
  return date.toISOString();
}
