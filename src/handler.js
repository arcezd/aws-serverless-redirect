'use strict'

const data = require('./data.json')

module.exports.redirect = async event => {
  console.log(JSON.stringify(event));
  const requestDomain = event.requestContext.domainName
  let url = data.requestDomain,
    redirectUrl = data[requestDomain],
    defaultUrl = 'https://diego.arce.cr'
  if (redirectUrl && redirectUrl.url) defaultUrl = redirectUrl.url
  return {
    statusCode: 301,
    headers: {
      'Location': defaultUrl,
      'X-Powered-By': 'https://diego.arce.cr'
    },
    body: null
  }
}