import * as pt from 'pareto-core-types'

import * as t from './types.generated'

import * as mcommon from "glo-pareto-common"

export type TParsedFilePath = t.UParsedFilePath

export type TParseFilePathData = t.UParseFilePathData

export type FBasename = ($: mcommon.TString,) => mcommon.TString

export type FConvertWindowsPathToPosixPath = ($: mcommon.TString,) => mcommon.TString

export type FDirname = ($: mcommon.TString,) => mcommon.TString

export type FParseFilePath = ($: TParseFilePathData,) => TParsedFilePath