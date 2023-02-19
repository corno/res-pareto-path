import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    func,
    data,
    type,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pd.d

export const $: mmoduleDefinition.T.ModuleDefinition<pd.SourceLocation> = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'parameters': d({}),
        'types': d({
            "ParseFilePathData": type( group({
                "filePath": member(string()),
                "pathSeparator": member(string()),
            })),
            "ParsedFilePath": type( group({
                "directoryPath": member(array(string())),
                "baseName": member(string()),
            })),
        }),
        'interfaces': d({}),
        'functions': d({
            "ConvertWindowsPathToPosixPath": func(typeReference("common", "String"), null, null, data(typeReference("common", "String"),false)),
            "Basename": func(typeReference("common", "String"), null, null, data(typeReference("common", "String"),false)),
            "Dirname": func(typeReference("common", "String"), null, null, data(typeReference("common", "String"),false)),
            "ParseFilePath": func(typeReference("ParseFilePathData"), null, null, data(typeReference("ParsedFilePath"),false)),
        }),
    },
    'api': {
        'imports': d({
            // "main": "glo-pareto-main",
        }),
        'algorithms': d({
            "convertWindowsPathToPosixPath": algorithm(definitionReference("ConvertWindowsPathToPosixPath")), 
            "basename": algorithm(definitionReference("Basename")),
            "dirname":algorithm(definitionReference("Dirname")),
            "parseFilePath":algorithm(definitionReference("ParseFilePath")), 
        }),
    },
}