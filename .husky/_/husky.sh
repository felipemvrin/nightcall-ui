#!/usr/bin/env sh

if [ -z "$husky_skip_init" ]; then
  debug () {
    [ "$HUSKY_DEBUG" = "1" ] && echo "husky (debug) - $1"
  }

  readonly hook_name="$(basename -- "$0")"
  debug "starting $hook_name..."

  if [ "$HUSKY" = "0" ]; then
    debug "HUSKY env var is set to 0, skipping hook"
    exit 0
  fi

  export readonly husky_skip_init=1
  sh -e "$0" "$@"
  exitCode="$?"

  if [ "$exitCode" != 0 ]; then
    echo "husky - $hook_name script failed (code $exitCode)"
  fi

  if [ "$exitCode" = 127 ]; then
    echo "husky - command not found in PATH=$PATH"
  fi

  exit "$exitCode"
fi
