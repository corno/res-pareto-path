import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    data,
    func,
    type,
    optional,
    reference,
    number,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> =  {
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
    'builders': d({}),
    'interfaces': d({}),
    'functions': d({
        "ConvertWindowsPathToPosixPath": func(typeReference("common", "String"), null, null, data(typeReference("common", "String"),false)),
        "Basename": func(typeReference("common", "String"), null, null, data(typeReference("common", "String"),false)),
        "Dirname": func(typeReference("common", "String"), null, null, data(typeReference("common", "String"),false)),
        "ParseFilePath": func(typeReference("ParseFilePathData"), null, null, data(typeReference("ParsedFilePath"),false)),
    }),
}