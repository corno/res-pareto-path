import * as pd from 'pareto-core-data'

import {
    array, data, externalTypeReference, group, imp, member, sfunction, string, type, typeReference
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
    'asynchronous': {
        'interfaces': d({}),
        'constructors': d({}),
        'functions': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'constructors': d({}),
        'functions': d({
            "ConvertWindowsPathToPosixPath": sfunction(data(externalTypeReference("common", "String")), externalTypeReference("common", "String")),
            "Basename": sfunction(data(externalTypeReference("common", "String")), externalTypeReference("common", "String")),
            "Dirname": sfunction(data(externalTypeReference("common", "String")), externalTypeReference("common", "String")),
            "ParseFilePath": sfunction(data(typeReference("ParseFilePathData")), typeReference("ParsedFilePath")),
        }),
    },
}