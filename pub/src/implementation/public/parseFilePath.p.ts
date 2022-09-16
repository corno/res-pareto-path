//import * as pi from "pareto-core-internals"

import * as api from "api-pareto-path"
import { basenameImp } from "../private/basenameImp.p"
import { dirnameImp } from "../private/dirnameImp.p"
import { extname } from "../private/extname.p"
import { getPosixSeparator } from "../private/getPosixSeparator.p"
import { normalize } from "../private/normalize.p"

//import * as path from "path"
import { panic } from "../private/panic.p"
import { wrapRawArray } from "../private/wrapRawArray.p"


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
