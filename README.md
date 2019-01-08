# zenypass-modhex
[![NPM](https://nodei.co/npm/zenypass-modhex.png?compact=true)](https://nodei.co/npm/zenypass-modhex/)

lightweight (388 bytes gzip) hex to modhex converter and vice-versa for zenypass.

# Example
```ts
import { hex2modhex, modhex2hex, isPureModhex } from 'zenypass-modhex'
console.log(hex2modhex('84c16a0172e6d1f9b58df78503f65b'))
// 'jfrchlbciduhtcvkngjtvijgbevhgn'
console.log(modhex2hex('jfrchlbciduhtcvkngjtvijgbevhgn'))
// '84c16a0172e6d1f9b58df78503f65b'
console.log(modhex2hex('jfrqhl')) // `q` is not modhex -> not converted
// '84cq6a'
console.log(hex2modhex('84cq6a')) // `q` is not hex -> not converted
// 'jfrqhl'
console.log(isPureModhex('jfrqhl')) // includes a `q` !
// false
console.log(isPureModhex('jfrchlbciduhtcvkngjtvijgbevhgn'))
// true
```
# API
```ts
export declare const modhex2hex: (val: string) => string
export declare const hex2modhex: (val: string) => string
export declare function isPureModhex(val: any): val is string

export declare const MODHEX_DIGITS = "bcdefghijklnrtuv"
export declare const HEX_DIGITS = "0123456789abcdef"
export declare function isString(val: any): val is string | String
export default function translator(
  digits: { from: string, to: string }
): (val: string) => string
```

# TypeScript
although this library is written in [TypeScript](https://www.typescriptlang.org),
it may also be imported into plain JavaScript code:
modern code editors will still benefit from the available type definition,
e.g. for helpful code completion.

# License
Copyright 2019, ZenyWay S.A.S., Stéphane M. Catala

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the [License](./LICENSE) for the specific language governing permissions and
Limitations under the License.
