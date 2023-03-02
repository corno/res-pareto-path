
import * as ps from 'pareto-core-state'
import * as pa from 'pareto-core-async'

import * as gtest from "lib-pareto-test"

import * as gpub from "../../../../../pub"

import { CgetTestSet } from "../definition/api.generated"

export const $$:CgetTestSet = () => {

    const builder = ps.createUnsafeDictionaryBuilder<gtest.T.TestElement>()
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

    createTest("basename", gpub.$r.basename("../foo/.."), "..")
    createTest("dirname 1", gpub.$r.dirname("../foo/bar/.."), "../foo/bar")
    createTest("dirname 2", gpub.$r.dirname("../foo/bar/x"), "../foo/bar")
    return pa.asyncValue({
        elements: builder.getDictionary()
    })
}