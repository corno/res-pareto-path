
import * as pa from "pareto-core-async"
import * as pm from "pareto-core-state"
import * as pl from "pareto-core-lib"

import * as test from "lib-pareto-test"

import * as pub from "../../../pub"

export function createGetTestSet($d: {}): test.GetTestSet {
    return () => {

        const builder = pm.createDictionaryBuilder<test.TTestElement>(
            ["ignore", {}],
            () => {
                pl.panic("duplicate key")
            }
        )
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

        createTest("basename", pub.basename("../foo/.."), "..")
        createTest("dirname 1", pub.dirname("../foo/bar/.."), "../foo/bar")
        createTest("dirname 2", pub.dirname("../foo/bar/x"), "../foo/bar")
        return pa.value({
            elements: builder.getDictionary()
        })
    }
}