import * as pr from 'pareto-core-raw'

import {
    string,
    null_,
    nested,
    template,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    parameter,
    func,
    data,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

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