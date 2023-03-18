

import { basenameImp } from "../native/basenameImp.native"
//import * as path from "path"

import { A } from "../api.generated"

export const $$: A.basename = ($) => {
    return basenameImp($)
}