/**
 * @license Apache2.0
 * @author Stéphane M. Catala
 * Copyright 2019, ZenyWay S.A.S, Stephane M. Catala
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *  http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * Limitations under the License.
 */

/**
 * ZenyPass modhex digits ordered from 0 to 15: `bcdefghijklnrtuv`.
 *
 * note that Yubico modhex is `cbdefghijklnrtuv`, i.e. `b` and `c` are inversed.
 */
export const MODHEX_DIGITS = 'bcdefghijklnrtuv'
export const HEX_DIGITS = '0123456789abcdef'

export const modhex2hex = translator({ from: MODHEX_DIGITS, to: HEX_DIGITS})
export const hex2modhex = translator({ from: HEX_DIGITS, to: MODHEX_DIGITS})

const IS_PURE_MODHEX_REGEXP = new RegExp(`^[${MODHEX_DIGITS}]*$`, 'i')

/**
 * @param {any} val
 * @return {val is string} true if `val` is a string
 * and is either empty,
 * or all its characters are modhex digits.
 */
export function isPureModhex (val: any): val is string {
  return isString(val) && IS_PURE_MODHEX_REGEXP.test(val.valueOf())
}

export function isString (val: any): val is string|String {
  return typeof (val && val.valueOf()) === 'string'
}

/**
 * @returns a function that translates each character of the input string
 * as defined by its index in the given `digits.from` string
 * to the character at the same index in the given `digits.to` string.
 * any character not listed in `digits.from`,
 * or which has no corresponding character in `digits.to`
 * remains unchanged in the returned string.
 * character matching is case insensitive.
 * translated characters are lowercase.
 */
export default function translator (
  digits: { from: string, to: string }
): (val: string) => string {
  const fromDigits = lowercase(digits.from)
  const toDigits = lowercase(digits.to)
  const regexp = new RegExp(`[${fromDigits}]`, 'gi')

  /**
   * @function convert
   * @param {string} val
   * @return {string}
   */
  return function translate (val: string): string {
    return val.replace(regexp, digit => toDigits[fromDigits.indexOf(digit)] || digit)
  }
}

/**
 * @param {string} str
 * @return {string} lowercase `str`
 */
function lowercase (str: string): string {
  return ('' + str).toLowerCase()
}
