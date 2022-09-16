import * as api from "api-pareto-path"
import { dirnameImp } from "../private/dirnameImp"
//import * as path from "path"

export const f_dirname: api.FDirname = ($) => {
    return dirnameImp($)
}