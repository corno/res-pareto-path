import * as api from "../api"

import { dirnameImp } from "../native/dirnameImp.p"
//import * as path from "path"

export const $$: api.Cdirname = ($) => {
    return dirnameImp($)
}