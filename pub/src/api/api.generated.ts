import * as pt from 'pareto-core-types'

import * as gthis from "./glossary"

export type Cbasename = gthis.FBasename

export type CconvertWindowsPathToPosixPath = gthis.FConvertWindowsPathToPosixPath

export type Cdirname = gthis.FDirname

export type CparseFilePath = gthis.FParseFilePath

export type API = {
    basename: Cbasename
    convertWindowsPathToPosixPath: CconvertWindowsPathToPosixPath
    dirname: Cdirname
    parseFilePath: CparseFilePath
}