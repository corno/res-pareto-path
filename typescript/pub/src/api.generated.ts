import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"
export namespace A {
    
    export type basename = g_this.SYNC.F.Basename
    
    export type convertWindowsPathToPosixPath = g_this.SYNC.F.ConvertWindowsPathToPosixPath
    
    export type dirname = g_this.SYNC.F.Dirname
    
    export type parseFilePath = g_this.SYNC.F.ParseFilePath
}

export type API = {
    basename: A.basename
    convertWindowsPathToPosixPath: A.convertWindowsPathToPosixPath
    dirname: A.dirname
    parseFilePath: A.parseFilePath
}