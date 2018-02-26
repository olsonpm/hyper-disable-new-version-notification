'use strict'

//---------//
// Imports //
//---------//

const { version } = require('./package.json')

//
//------//
// Init //
//------//

let errorWasReported = false

//
//------//
// Main //
//------//

const mapNotificationsState = state => {
  try {
    state.ui.notifications.updates = false
  } catch (e) {
    if (errorWasReported) return

    // eslint-disable-next-line no-console
    console.error(
      `This plugin 'hyper-disable-new-version-notification v${version}' expects` +
        ' a state structure of "state.ui.notifications.updates".  It seems' +
        ' either this structure has changed or the assumption is incorrect.' +
        ' If this plugin is fully up to date then please file an issue at' +
        ' https://github.com/olsonpm/hyper-disable-new-version-notification/issues/new.' +
        `\n\n${e.stack}`
    )

    errorWasReported = true
  }
  return state
}

//
//---------//
// Exports //
//---------//

module.exports = {
  mapNotificationsState,
}
