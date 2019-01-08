'use strict' /* eslint-env jasmine */
/**
 * @license
 * @author Stéphane M. Catala
 * Copyright 2019, ZenyWay S.A.S., Stephane M. Catala
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

const { modhex2hex, hex2modhex, isPureModhex } = require('../')

describe('hex2modhex:', function () {
  it('converts "84c16a0172e6d1f9b58df78503f65b" ' +
  'to "jfrchlbciduhtcvkngjtvijgbevhgn"', function () {
    expect(hex2modhex('84c16a0172e6d1f9b58df78503f65b'))
      .toBe('jfrchlbciduhtcvkngjtvijgbevhgn')
  })
  it('converts "84cq6a" to "jfrqhl"', function () {
    expect(hex2modhex('84cq6a'))
      .toBe('jfrqhl')
  })
})
describe('modhex2hex:', function () {
  it('converts "jfrchlbciduhtcvkngjtvijgbevhgn" ' +
  'to "84c16a0172e6d1f9b58df78503f65b"', function () {
    expect(modhex2hex('jfrchlbciduhtcvkngjtvijgbevhgn'))
      .toBe('84c16a0172e6d1f9b58df78503f65b')
  })
  it('converts "jfrqhl" to "84cq6a"', function () {
    expect(modhex2hex('jfrqhl'))
      .toBe('84cq6a')
  })
})
describe('isPureModhex:', function () {
  it('returns true for "jfrchlbciduhtcvkngjtvijgbevhgn"', function () {
    expect(isPureModhex('jfrchlbciduhtcvkngjtvijgbevhgn'))
      .toBe(true)
  })
  it('returns false for "jfrqhl"', function () {
    expect(isPureModhex('jfrqhl'))
      .toBe(false)
  })
})
