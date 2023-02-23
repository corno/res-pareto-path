import * as mapi from "../api"

import { basenameImp } from "../native/basenameImp.native"
//import * as path from "path"

export const $$: mapi.Cbasename = ($) => {
    return basenameImp($)
}