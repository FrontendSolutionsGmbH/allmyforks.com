#!/bin/sh

set -e

echo "$(date) - Start"

curl -o /output/file-$(date +%m-%d-%H:%M:%S) $OPTIONS

echo "$(date) End"
