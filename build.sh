#!/usr/bin/env bash
set -euo pipefail

curl -sSL https://dot.net/v1/dotnet-install.sh | bash /dev/stdin --channel 10.0

export DOTNET_ROOT=$HOME/.dotnet
export PATH=$PATH:$HOME/.dotnet

dotnet publish -c Release -o release

rm -rf public
mkdir -p public
cp -r release/wwwroot/* public/