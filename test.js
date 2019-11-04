import test from "ava"
import userAgent from "."

test("main", (t) => {
    t.is(typeof userAgent, "string")
})
