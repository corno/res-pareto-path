import * as mapi from "../api"

import { dirnameImp } from "../native/dirnameImp.native"
//import * as path from "path"

export const $$: mapi.Cdirname = ($) => {
    return dirnameImp($)
}