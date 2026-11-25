# One Line, One Laugh

[![make.fun · u-plucky-finch-20-one-line-one-laugh-0ffe66ea](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea.svg)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
[![rank](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/zavonlame/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/rank.svg)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
[![reward](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/zavonlame/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/reward.svg)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-one-line-one-laugh-0ffe66ea)

Entry for the [make.fun bounty](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea): write a single funny line of 200 characters or fewer. An AI judge compares entries two at a time; the funniest lines share the $2 reward (top 10 places).

## The line (84 chars, one line)

> I told my smart speaker to play something relaxing. It played my bank notifications.

## How it works

`main.ts` is a self-contained Node 22 program (stdlib only, no network, no headless browser). It gate-checks the line the same way the sealed scorer does (UTF-8, 1–200 chars, single line, non-blank) and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt`.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
