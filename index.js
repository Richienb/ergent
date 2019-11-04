"use strict"

const universalUserAgent = require("universal-user-agent").getUserAgent()
const pkgConf = require("read-pkg").sync()
const packageName = require("pname")
const cleanSemver = require("clean-semver")

module.exports = (() => {
    if (packageName) {
        if (pkgConf.version) return `${packageName} v${cleanSemver(pkgConf.version)}`
        else return packageName
    } else return universalUserAgent
})()
