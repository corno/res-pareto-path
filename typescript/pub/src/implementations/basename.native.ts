

import { basenameImp } from "../native/basenameImp.native"
//import * as path from "path"

import { Cbasename } from "../definition/api.generated"

export const $$:Cbasename = ($) => {
    return basenameImp($)
}