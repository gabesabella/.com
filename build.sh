#!/usr/bin/env bash

# 1. Install .NET SDK (Change 8.0 to your target version if needed)
curl -sSL https://dot.net | bash /dev/stdin --version 10.0.0

# 2. Add .NET to the PATH environment variable
export DOTNET_ROOT=$HOME/.dotnet
export PATH=$PATH:$HOME/.dotnet

# 3. Run the publish command
dotnet publish -c Release -o release

# 4. Move the output to the directory Vercel expects
# (Blazor WASM static files are located inside the wwwroot of the publish output)
mkdir -p public
cp -r release/wwwroot/* public/
