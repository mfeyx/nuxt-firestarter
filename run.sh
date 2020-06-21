#!/bin/sh
set -e

cmd=$1
if [ "$cmd" != "deploy" ]; then
    cmd=serve
fi

echo "runnig $cmd"

echo "cleaning..."
rm -rf __build__ && rm -rf public

npm run build

echo "copy to public folder..."
mkdir -p public/_nuxt &&
    cp -a __build__/dist/client/. public/_nuxt &&
    cp -a src/static/. public/ &&
    cp -a www/. public/

firebase "$cmd"
