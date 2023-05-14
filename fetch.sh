curl -L \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/tuna/issues/issues/1174 \
  | jq -r .title \
  | node test.js - -l 15 \
  | bat -l es6

