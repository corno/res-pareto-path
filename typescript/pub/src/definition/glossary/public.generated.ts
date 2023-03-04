import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"

export namespace I {}

export namespace B {}

export namespace F {
    
    export type Basename = ($: g_common.T.String,) => g_common.T.String
    
    export type ConvertWindowsPathToPosixPath = ($: g_common.T.String,) => g_common.T.String
    
    export type Dirname = ($: g_common.T.String,) => g_common.T.String
    
    export type ParseFilePath = ($: T.ParseFilePathData,) => T.ParsedFilePath
}