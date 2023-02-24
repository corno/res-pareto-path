import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"


export type Cbasename = gglo.FBasename

export type CconvertWindowsPathToPosixPath = gglo.FConvertWindowsPathToPosixPath

export type Cdirname = gglo.FDirname

export type CparseFilePath = gglo.FParseFilePath

export type API = {
    basename: Cbasename
    convertWindowsPathToPosixPath: CconvertWindowsPathToPosixPath
    dirname: Cdirname
    parseFilePath: CparseFilePath
}