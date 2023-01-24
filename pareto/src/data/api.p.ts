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

import { definitionReference, externalDefinitionReference, constructor } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"
const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            // "project": "../../project",
            "common": "glo-pareto-common",
            // "main": "glo-pareto-main",
        }),
        'parameters': d({}),
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
            "ConvertWindowsPathToPosixPath": _function( externalTypeReference("common", "String"),externalTypeReference("common", "String")),
            "Basename":_function( externalTypeReference("common", "String"),externalTypeReference("common", "String")),
            "Dirname":_function( externalTypeReference("common", "String"),externalTypeReference("common", "String")),
            "ParseFilePath": _function( typeReference("ParseFilePathData"),typeReference("ParsedFilePath")),
        }),
    },
    'api': {
        'imports': d({
            // "main": "glo-pareto-main",
        }),
        'algorithms': d({
            "convertWindowsPathToPosixPath": {
                'definition': {
                    'function': "ConvertWindowsPathToPosixPath"
                },
                'type': ['reference', null],
            },
            "basename": {
                'definition': {
                    'function': "Basename"
                },
                'type': ['reference', null],
            },
            "dirname": {
                'definition': {
                    'function': "Dirname"
                },
                'type': ['reference', null],
            },
            "parseFilePath": {
                'definition': {
                    'function': "ParseFilePath"
                },
                'type': ['reference', null],
            },
        })
    },
}