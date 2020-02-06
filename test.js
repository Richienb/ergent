const test = require("ava")
const userAgent = require(".")

test("main", (t) => {
	t.is(typeof userAgent, "string")
})
