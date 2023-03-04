

import { dirnameImp } from "../native/dirnameImp.native"
//import * as path from "path"

import { dirname } from "../definition/api.generated"

export const $$: dirname = ($) => {
    return dirnameImp($)
}