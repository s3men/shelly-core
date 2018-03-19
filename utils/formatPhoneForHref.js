function formatPhoneForHref(phone) {
  return `tel:${phone.replace(/(\s|-|\(|\))/g, '')}`
}

module.exports = formatPhoneForHref;
