import * as pr from 'pareto-core-raw'

import {
    string,
    null_,
    nested,
    template,
    dictionary, member, taggedUnion, types, _function, group,
    array,
    typeReference,
    parameter,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'parameters': d({}),
        'templates': d({
            "Optional": {
                'parameters': d({ "Type": {}, }),
                'type': taggedUnion({
                    "set": parameter("Type"),
                    "not set": group({}),
                })
            }
        }),
        'types': types({
            "ParseFilePathData": group({
                "filePath": member(string()),
                "pathSeparator": member(string()),
            }),
            "ParsedFilePath": group({
                "directoryPath": member(array(string())),
                "baseName": member(string()),
                "extension": member(template("Optional", {
                    "Type": string()
                })),
            })
        }),
        'interfaces': d({}),
        'functions': d({
            "ConvertWindowsPathToPosixPath": _function(typeReference("common", "String"), typeReference("common", "String")),
            "Basename": _function(typeReference("common", "String"), typeReference("common", "String")),
            "Dirname": _function(typeReference("common", "String"), typeReference("common", "String")),
            "ParseFilePath": _function(typeReference("ParseFilePathData"), typeReference("ParsedFilePath")),
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