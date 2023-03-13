import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.Module.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "convertWindowsPathToPosixPath": algorithm(functionReference("this", {}, "ConvertWindowsPathToPosixPath")), 
        "basename": algorithm(functionReference("this", {}, "Basename")),
        "dirname":algorithm(functionReference("this", {}, "Dirname")),
        "parseFilePath":algorithm(functionReference("this", {}, "ParseFilePath")), 
    }),
}