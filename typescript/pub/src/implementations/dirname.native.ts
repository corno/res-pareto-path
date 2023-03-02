

import { dirnameImp } from "../native/dirnameImp.native"
//import * as path from "path"

import { Cdirname } from "../definition/api.generated"

export const $$:Cdirname = ($) => {
    return dirnameImp($)
}