import * as api from "../api"

import { basenameImp } from "../native/basenameImp.native"
//import * as path from "path"

export const $$: api.Cbasename = ($) => {
    return basenameImp($)
}