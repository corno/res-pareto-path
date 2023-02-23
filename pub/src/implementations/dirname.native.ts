

import { dirnameImp } from "../native/dirnameImp.native"
//import * as path from "path"

import { Cdirname } from "../api"

export const $$:Cdirname = ($) => {
    return dirnameImp($)
}