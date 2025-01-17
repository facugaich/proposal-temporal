// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.subtract
description: Strings with fractional duration units are treated with the correct sign
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const instance = new Temporal.ZonedDateTime(1_000_000_000_000_000_000n, "UTC");

const resultHours = instance.subtract("-PT24.567890123H");
assert.sameValue(resultHours.epochNanoseconds, 1_000_088_444_404_442_799n, "negative fractional hours");

const resultMinutes = instance.subtract("-PT1440.567890123M");
assert.sameValue(resultMinutes.epochNanoseconds, 1_000_086_434_073_407_379n, "negative fractional minutes");
