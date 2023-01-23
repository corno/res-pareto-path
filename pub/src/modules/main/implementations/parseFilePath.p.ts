//import * as pi from "pareto-core-internals"

import * as api from "../api"

import { basenameImp } from "../native/basenameImp.p"
import { dirnameImp } from "../native/dirnameImp.p"
import { extname } from "../native/extname.p"
import { getPosixSeparator } from "../native/getPosixSeparator.p"
import { normalize } from "../native/normalize.p"

//import * as path from "path"
import { panic } from "../native/panic.p"
import { wrapRawArray } from "../native/wrapRawArray.p"


export const $$: api.CparseFilePath = ($) => {
    const normalizedFilePath = normalize($.filePath)
    const extWithLeadingDot = extname(normalizedFilePath)
    return {
        directoryPath: (() => {
            const dirname = dirnameImp(normalizedFilePath)
            if (dirname === ".") {
                return wrapRawArray([])
            } else {
                return wrapRawArray(dirname.split(getPosixSeparator()))
            }
        })(),
        baseName: basenameImp(normalizedFilePath, extWithLeadingDot),
        extension: ((): null | string => {
            if (extWithLeadingDot === "") {
                return null
            } else {
                if (extWithLeadingDot[0] !== ".") {
                   panic(`unexpected extension format: ${extWithLeadingDot}`)
                }
                return extWithLeadingDot.slice(1)
            }
        })(),
    }
}
