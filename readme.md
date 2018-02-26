## Disable New Version Notification

### Why?

Users who manage their programs via package managers will update their software
when the corresponding package udpates are released.  Notifications are noise
in this scenario.

### Install

hpm install hyper-disable-new-version-notification

### If it doesn't work

This plugin expects a hardcoded state path of `state.ui.notifications.updates`.
If for some reason this state path changes then an error log should appear in
the developer console explaining that you should

1. Make sure your package is up to date
2. If it's still not working, file an issue on this repo (or create a pull request with the fix)

### Hack on this plugin locally

```sh
hub clone olsonpm/hyper-disable-new-version-notification
npm install --no-save
cd hyper-disable-new-version-notification
./create-symlink.sh

# add 'hyper-disable-new-version-notification' to your localPlugins inside ~/.hyper.js

# open hyper
```
