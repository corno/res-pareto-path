
import * as ps from 'pareto-core-state'
import * as pa from 'pareto-core-async'

import * as g_test from "lib-pareto-test"

import * as g_pub from "../../../../../pub"

import { getTestSet } from "../api.generated"

export const $$: getTestSet = () => {

    const builder = ps.createUnsafeDictionaryBuilder<g_test.T.TestElement>()
    function createTest(name: string, actual: string, expected: string) {
        builder.add(name, {
            'type': ['test', {
                type: ['short string', {
                    actual: actual,
                    expected: expected
                }]
            }]
        })
    }

    createTest("basename", g_pub.$r.basename()("../foo/.."), "..")
    createTest("dirname 1", g_pub.$r.dirname()("../foo/bar/.."), "../foo/bar")
    createTest("dirname 2", g_pub.$r.dirname()("../foo/bar/x"), "../foo/bar")
    return pa.asyncValue({
        elements: builder.getDictionary()
    })
}