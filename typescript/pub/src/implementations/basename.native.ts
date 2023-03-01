

import { basenameImp } from "../native/basenameImp.native"
//import * as path from "path"

import { Cbasename } from "../api"

export const $$:Cbasename = ($) => {
    return basenameImp($)
}