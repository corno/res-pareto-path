
import * as pm from "pareto-core-state"
import * as pl from "pareto-core-lib"

import * as test from "lib-pareto-test"

import * as api from "../../interface"


import * as pub from "../../../../pub"

export const createGetTestset: api.FCreateGetTestset = ($d) => {
    return () => {

        const builder = pm.createUnsafeDictionaryBuilder<test.TTestElement>()
        function createTest(name: string, actual: string, expected: string) {
            builder.add(name, {
                type: ["test", {
                    type: ["simple string", {
                        actual: actual,
                        expected: expected
                    }]
                }]
            })
        }

        createTest("basename", pub.f_basename("../foo/.."), "..")
        createTest("dirname 1", pub.f_dirname("../foo/bar/.."), "../foo/bar")
        createTest("dirname 2", pub.f_dirname("../foo/bar/x"), "../foo/bar")
        return pl.asyncValue({
            elements: builder.getDictionary()
        })
    }
}