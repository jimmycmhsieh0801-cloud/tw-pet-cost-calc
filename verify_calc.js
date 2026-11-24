const assert = require("assert");
const { calcPetNeeds } = require("./app.js");
const r = calcPetNeeds(4, 1.2, 380);
assert.strictEqual(r.waterMin, 160);
assert.strictEqual(r.waterMax, 240);
assert(r.der > 200);
console.log("PET_COST_TESTS_PASSED");