import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"

export namespace GParsedFilePath {
    
    export namespace PdirectoryPath {}
    export type PdirectoryPath = pt.Array<string>
    
    export namespace Pextension {}
    export type Pextension = null | string
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