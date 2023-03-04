import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"

export namespace T {
    
    export namespace ParsedFilePath {
        
        export type baseName = string
        
        export namespace directoryPath {
            
            export type T = string
        }
        
        export type directoryPath = pt.Array<string>
    }
    
    export type ParsedFilePath = {
        readonly 'baseName': string
        readonly 'directoryPath': pt.Array<string>
    }
    
    export namespace ParseFilePathData {
        
        export type filePath = string
        
        export type pathSeparator = string
    }
    
    export type ParseFilePathData = {
        readonly 'filePath': string
        readonly 'pathSeparator': string
    }
}