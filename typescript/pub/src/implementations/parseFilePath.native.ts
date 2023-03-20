//import * as pi from 'pareto-core-internals'



import { basenameImp } from "../native/basenameImp.native"
import { dirnameImp } from "../native/dirnameImp.native"
import { getPosixSeparator } from "../native/getPosixSeparator.native"
import { normalize } from "../native/normalize.native"

//import * as path from "path"
import { wrapRawArray } from "../native/wrapRawArray.native"

import { A } from "../api.generated"

export const $$: A.parseFilePath = () => {
    return ($) => {
        const normalizedFilePath = normalize($.filePath)
        // const extWithLeadingDot = extname(normalizedFilePath)
        return {
            directoryPath: (() => {
                const dirname = dirnameImp(normalizedFilePath)
                if (dirname === ".") {
                    return wrapRawArray([])
                } else {
                    return wrapRawArray(dirname.split(getPosixSeparator()))
                }
            })(),
            baseName: basenameImp(normalizedFilePath),
            // extension: ((): api.GParsedFilePath.Pextension => {
            //     if (extWithLeadingDot === "") {
            //         return ['not set', {}]
            //     } else {
            //         if (extWithLeadingDot[0] !== ".") {
            //            panic(`unexpected extension format: ${extWithLeadingDot}`)
            //         }
            //         return ['set', extWithLeadingDot.slice(1)]
            //     }
            // })(),
        }
    }
}