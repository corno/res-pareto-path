#!/usr/bin/env node

import * as pe from "pareto-core-exe"
import * as pa from "pareto-core-async"
import * as pw from "pareto-core-raw"
import * as pm from "pareto-core-state"
import * as pl from "pareto-core-lib"

import * as test from "lib-pareto-test"

import * as diff from "res-pareto-diff"
import * as fs from "res-pareto-filesystem"

import * as pub from "../../../pub"

pe.runProgram(
    test.createTester(
        {
            getTestSet: () => {

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
            },
            diff: {
                diffData: diff.diffData,
                stringsAreEqual: diff.stringsAreEqual,
            },
            fs: {
                readFile: fs.readFile,
                writeFile: fs.writeFile,
                unlink: fs.unlink,
            },
        },
    )
)
