#!/usr/bin/env bash
# 更新依赖
npm config set registry https://registry.npm.taobao.org
yarn
yarn build:prd
