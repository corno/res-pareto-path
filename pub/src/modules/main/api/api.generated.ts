import * as pt from 'pareto-core-types'

import * as glo from "./types.generated"


export type Cbasename = glo.FBasename

export type CconvertWindowsPathToPosixPath = glo.FConvertWindowsPathToPosixPath

export type Cdirname = glo.FDirname

export type CparseFilePath = glo.FParseFilePath

export type API = {
    basename: Cbasename
    convertWindowsPathToPosixPath: CconvertWindowsPathToPosixPath
    dirname: Cdirname
    parseFilePath: CparseFilePath
}