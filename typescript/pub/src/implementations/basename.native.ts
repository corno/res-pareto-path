

import { basenameImp } from "../native/basenameImp.native"
//import * as path from "path"

import { basename } from "../api.generated"

export const $$: basename = ($) => {
    return basenameImp($)
}