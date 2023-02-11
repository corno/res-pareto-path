import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mcommon from "glo-pareto-common"

export type FBasename = ($: mcommon.T.String,) => mcommon.T.String

export type FConvertWindowsPathToPosixPath = ($: mcommon.T.String,) => mcommon.T.String

export type FDirname = ($: mcommon.T.String,) => mcommon.T.String

export type FParseFilePath = ($: T.ParseFilePathData,) => T.ParsedFilePath