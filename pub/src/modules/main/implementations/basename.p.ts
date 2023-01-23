import * as api from "../api"

import { basenameImp } from "../native/basenameImp.p"
//import * as path from "path"

export const $$: api.Cbasename = ($) => {
    return basenameImp($)
}