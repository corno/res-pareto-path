import * as pd from 'pareto-core-data'

import {
    array, data, externalTypeReference, group, imp, member, sfunction, string, type, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'glossary parameters':d({}),
    'imports': d({
        "common": imp(),
    }),
    'root': {
        'namespaces': d({}),
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
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),

    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "ConvertWindowsPathToPosixPath": sfunction(externalTypeReference("common", "String"), data(externalTypeReference("common", "String"))),
            "Basename": sfunction(externalTypeReference("common", "String"), data(externalTypeReference("common", "String"))),
            "Dirname": sfunction(externalTypeReference("common", "String"), data(externalTypeReference("common", "String"))),
            "ParseFilePath": sfunction(typeReference("ParsedFilePath"), data(typeReference("ParseFilePathData"))),
        }),
    },
}