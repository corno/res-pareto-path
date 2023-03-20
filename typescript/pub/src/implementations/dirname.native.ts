

import { dirnameImp } from "../native/dirnameImp.native"
//import * as path from "path"

import { A } from "../api.generated"

export const $$: A.dirname = () => {
    return ($) => {
        return dirnameImp($)
    }
}