export function pluralize(prop, text) {
    return `${prop} ${prop < 2 ? text : text + 's'}`
  }