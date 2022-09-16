//import * as pi from "pareto-core-internals"

import * as api from "api-pareto-path"
import { basenameImp } from "../private/basenameImp"
import { dirnameImp } from "../private/dirnameImp"
import { extname } from "../private/extname"
import { getPosixSeparator } from "../private/getPosixSeparator"
import { normalize } from "../private/normalize"

//import * as path from "path"
import { panic } from "../private/panic"
import { wrapRawArray } from "../private/wrapRawArray"


export const f_parseFilePath: api.FParseFilePath = ($) => {
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
