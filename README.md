# The 3 AM Excuse

[![make.fun](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878.svg)](https://make.fun/c/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![rank](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/Ajahmantocou/the-3-am-excuse/rank.svg)](https://make.fun/c/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![reward](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/Ajahmantocou/the-3-am-excuse/reward.svg)](https://make.fun/c/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)

Entry for the make.fun bounty **The 3 AM Excuse**
([competition page](https://make.fun/c/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)):
one line, under 200 characters, in the voice of a hardware wallet refusing
to sign a transaction at 3 AM.

## The entry

> Signing refused: it's 3 AM, and my threat model lists 'you, awake at this hour' as the number one attack vector.

The wallet doesn't blame its battery, its firmware, or the cold. It blames
its owner: at 3 AM, the person holding it *is* the threat model. The joke
only works at 3 AM — at 3 PM, "awake at this hour" is not an attack vector.

## Why this line

- **On subject:** a refusal to sign, in the wallet's own words.
- **Original angle:** the owner is the security threat, not a hacker.
- **Wallet's voice:** "threat model" and "attack vector" are the device's
  native vocabulary, turned back on its owner.
- **The hour is the joke:** the line collapses if you swap 3 AM for 3 PM.
- **Tight:** 112 characters, every word earning its place.

## How it runs

`main.ts` (Node 22, plain TypeScript, no dependencies, no network) writes
the single line to `/output/entry.txt`. It is fully deterministic: two runs
produce byte-identical output.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
