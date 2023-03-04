import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export type basename = g_this.F.Basename

export type convertWindowsPathToPosixPath = g_this.F.ConvertWindowsPathToPosixPath

export type dirname = g_this.F.Dirname

export type parseFilePath = g_this.F.ParseFilePath

export type API = {
    basename: basename
    convertWindowsPathToPosixPath: convertWindowsPathToPosixPath
    dirname: dirname
    parseFilePath: parseFilePath
}