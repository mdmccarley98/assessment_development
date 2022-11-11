#!/usr/bin/env bash

_var_one="Id;"
_changed_var_two="${_var_two:=void}"
_combined="${_var_one^^} ${_changed_var_two/'void'/$_var_two}"
_output="${_combined/';'/':'}"
echo "${_output}"