import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gcommon from "glo-pareto-common"

export type FBasename = ($: gcommon.T.String,) => gcommon.T.String

export type FConvertWindowsPathToPosixPath = ($: gcommon.T.String,) => gcommon.T.String

export type FDirname = ($: gcommon.T.String,) => gcommon.T.String

export type FParseFilePath = ($: T.ParseFilePathData,) => T.ParsedFilePath