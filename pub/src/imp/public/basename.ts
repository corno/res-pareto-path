import * as api from "api-pareto-path"
import { basenameImp } from "../private/basenameImp"
//import * as path from "path"

export const basename: api.FBasename = ($) => {
    return basenameImp($)
}