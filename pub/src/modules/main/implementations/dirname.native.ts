import * as api from "../api"

import { dirnameImp } from "../native/dirnameImp.native"
//import * as path from "path"

export const $$: api.Cdirname = ($) => {
    return dirnameImp($)
}