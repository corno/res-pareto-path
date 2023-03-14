import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    sdata,
    sfunc,
    type,
    optional,
    number,
    imp,
    externalTypeReference,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({
        "common": imp({}),
    }),
    'types': d({
        "ParseFilePathData": type(group({
            "filePath": member(string()),
            "pathSeparator": member(string()),
        })),
        "ParsedFilePath": type(group({
            "directoryPath": member(array(string())),
            "baseName": member(string()),
        })),
    }),
    'type': ['synchronous', {
        'builders': d({}),
        'functions': d({
            "ConvertWindowsPathToPosixPath": sfunc(sdata(externalTypeReference("common", "String")), sdata(externalTypeReference("common", "String"))),
            "Basename": sfunc(sdata(externalTypeReference("common", "String")), sdata(externalTypeReference("common", "String"))),
            "Dirname": sfunc(sdata(externalTypeReference("common", "String")), sdata(externalTypeReference("common", "String"))),
            "ParseFilePath": sfunc(sdata(typeReference("ParseFilePathData")), sdata(typeReference("ParsedFilePath"))),
        }),

    }],
}