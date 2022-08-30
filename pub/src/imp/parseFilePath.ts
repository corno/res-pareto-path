import * as api from "api-pareto-path"

import * as path from "path"


export const parseFilePath: api.ParseFilePath = ($) => {
    const normalizedFilePath = path.normalize($.filePath)
    const extWithLeadingDot = path.extname(normalizedFilePath)
    return {
        directoryPath: (() => {
            const dirname = path.dirname(normalizedFilePath)
            if (dirname === ".") {
                return []
            } else {
                return dirname.split(path.posix.sep)
            }
        })(),
        baseName: path.basename(normalizedFilePath, extWithLeadingDot),
        extension: ((): null | string => {
            if (extWithLeadingDot === "") {
                return null
            } else {
                if (extWithLeadingDot[0] !== ".") {
                    throw new Error(`unexpected extension format: ${extWithLeadingDot}`)
                }
                return extWithLeadingDot.slice(1)
            }
        })(),
    }
}
