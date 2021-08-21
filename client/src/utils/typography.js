export const capitalize = text => {
  if (text && typeof text === 'string') {
    return `${text.substring(0, 1).toUpperCase()}${text.substring(1)}`
  } else {
    return text
  }
}
