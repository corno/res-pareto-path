import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace A {
        
        
        export namespace F {
            export type Basename = ($: g_common.T.String) => g_common.T.String
        }
        
        
        export namespace F {
            export type ConvertWindowsPathToPosixPath = ($: g_common.T.String) => g_common.T.String
        }
        
        
        export namespace F {
            export type Dirname = ($: g_common.T.String) => g_common.T.String
        }
        
        
        export namespace F {
            export type ParseFilePath = ($: T.ParseFilePathData) => T.ParsedFilePath
        }
    }
}