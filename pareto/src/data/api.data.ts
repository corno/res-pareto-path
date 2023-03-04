import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"
const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> = {
    'algorithms': d({
        "convertWindowsPathToPosixPath": algorithm(functionReference("this", {}, "ConvertWindowsPathToPosixPath")), 
        "basename": algorithm(functionReference("this", {}, "Basename")),
        "dirname":algorithm(functionReference("this", {}, "Dirname")),
        "parseFilePath":algorithm(functionReference("this", {}, "ParseFilePath")), 
    }),
}