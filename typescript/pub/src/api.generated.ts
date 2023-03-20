import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace A {
    
    export type basename = () => g_this.SYNC.A.F.Basename
    
    export type convertWindowsPathToPosixPath = () => g_this.SYNC.A.F.ConvertWindowsPathToPosixPath
    
    export type dirname = () => g_this.SYNC.A.F.Dirname
    
    export type parseFilePath = () => g_this.SYNC.A.F.ParseFilePath
}

export type API = {
    readonly 'basename': A.basename
    readonly 'convertWindowsPathToPosixPath': A.convertWindowsPathToPosixPath
    readonly 'dirname': A.dirname
    readonly 'parseFilePath': A.parseFilePath
}