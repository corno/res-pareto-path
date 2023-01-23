
import * as pm from "pareto-core-state"
import * as pl from "pareto-core-lib"

import * as test from "lib-pareto-test"

import * as api from "../api"


import * as pub from "../../../../../pub"

export const $$: api.CgetTestSet = () => {

    const builder = pm.createUnsafeDictionaryBuilder<test.TTestElement>()
    function createTest(name: string, actual: string, expected: string) {
        builder.add(name, {
            type: ["test", {
                type: ["short string", {
                    actual: actual,
                    expected: expected
                }]
            }]
        })
    }

    createTest("basename", pub.$a.basename("../foo/.."), "..")
    createTest("dirname 1", pub.$a.dirname("../foo/bar/.."), "../foo/bar")
    createTest("dirname 2", pub.$a.dirname("../foo/bar/x"), "../foo/bar")
    return pl.asyncValue({
        elements: builder.getDictionary()
    })
}