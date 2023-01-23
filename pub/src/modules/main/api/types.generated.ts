import * as pt from 'pareto-core-types'
import * as mcommon from "glo-pareto-common"

export type TParsedFilePath = {
    readonly 'baseName': string
    readonly 'directoryPath': pt.Array<string>
    readonly 'extension': null | string
}

export type TParseFilePathData = {
    readonly 'filePath': string
    readonly 'pathSeparator': string
}

export type FBasename = ($: mcommon.TString) => mcommon.TString

export type FConvertWindowsPathToPosixPath = ($: mcommon.TString) => mcommon.TString

export type FDirname = ($: mcommon.TString) => mcommon.TString

export type FParseFilePath = ($: TParseFilePathData) => TParsedFilePath