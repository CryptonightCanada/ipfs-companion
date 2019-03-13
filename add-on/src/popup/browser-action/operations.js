'use strict'
/* eslint-env browser, webextensions */

const browser = require('webextension-polyfill')
const html = require('choo/html')
const navItem = require('./nav-item')

module.exports = function operations ({
  active,
  redirect,
  ipfsNodeType,
  onToggleGlobalRedirect
}) {
  const activeRedirectSwitch = active && ipfsNodeType === 'external'
  return html`
    <div class="fade-in pv1 bb b--black-10">
  ${navItem({
    text: browser.i18n.getMessage('panel_redirectToggle'),
    title: browser.i18n.getMessage('panel_redirectToggleTooltip'),
    disabled: !activeRedirectSwitch,
    switchValue: redirect && activeRedirectSwitch,
    onClick: onToggleGlobalRedirect
  })}
    </div>
  `
}
