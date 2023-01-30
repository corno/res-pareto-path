import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"

export namespace VOptional {
    
    export namespace Onot__set {}
    export type Onot__set<AType> = {}
}
export type VOptional<AType> = 
    | ['not set', VOptional.Onot__set<AType>]
    | ['set', AType]

export type MOptional<AType> = VOptional<AType>

export namespace GParsedFilePath {
    
    export namespace PdirectoryPath {}
    export type PdirectoryPath = pt.Array<string>
    
    export namespace Pextension {}
    export type Pextension = MOptional<string>
}
export type GParsedFilePath = {
    readonly 'baseName': string
    readonly 'directoryPath': GParsedFilePath.PdirectoryPath
    readonly 'extension': GParsedFilePath.Pextension
}
export type UParsedFilePath = GParsedFilePath

export namespace GParseFilePathData {}
export type GParseFilePathData = {
    readonly 'filePath': string
    readonly 'pathSeparator': string
}
export type UParseFilePathData = GParseFilePathData