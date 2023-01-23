import * as pr from 'pareto-core-raw'

import {
    externalReference as er,
    string as str,
    null_,
    reference as ref,
    boolean as bln,
    number as nr,
    nested,
    template,
    dictionary, group as grp, member, taggedUnion, types, _function, group,
    array,
    typeReference,
    externalTypeReference,
    optional,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"
const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            // "project": "../../project",
            "common": "glo-pareto-common",
            // "main": "glo-pareto-main",
        }),
        'namespace': {
            'types': types({
                "ParseFilePathData": group({
                    "filePath": member(str()),
                    "pathSeparator": member(str()),
                }),
                "ParsedFilePath": group({
                    "directoryPath": member(array(str())),
                    "baseName": member(str()),
                    "extension": member(optional(str())),
                })
            }),
            'interfaces': d({}),

        },
        'functions': d({
            "ConvertWindowsPathToPosixPath": {
                'data':  externalTypeReference("common", "String"),
                'return value': externalTypeReference("common", "String"),
            },
            "Basename": {
                'data':  externalTypeReference("common", "String"),
                'return value': externalTypeReference("common", "String"),
            },
            "Dirname": {
                'data':  externalTypeReference("common", "String"),
                'return value': externalTypeReference("common", "String"),
            },
            "ParseFilePath": {
                'data':  typeReference("ParseFilePathData"),
                'return value': typeReference("ParsedFilePath"),
            },
        }),
        'callbacks': d({
        }),
        'pipes': d({}),
    },
    'api': {
        'imports': d({
            // "main": "glo-pareto-main",
        }),
        'algorithms': d({
            "convertWindowsPathToPosixPath": {
                'definition': ['function', {
                    'function': "ConvertWindowsPathToPosixPath"
                }],
                'type': ['reference', null],
            },
            "basename": {
                'definition': ['function', {
                    'function': "Basename"
                }],
                'type': ['reference', null],
            },
            "dirname": {
                'definition': ['function', {
                    'function': "Dirname"
                }],
                'type': ['reference', null],
            },
            "parseFilePath": {
                'definition': ['function', {
                    'function': "ParseFilePath"
                }],
                'type': ['reference', null],
            },
        })
    },
}