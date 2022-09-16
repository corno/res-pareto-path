import * as api from "api-pareto-path"
import { getPosixSeparator } from "../private/getPosixSeparator.p"
import { getWin32Separator } from "../private/getWin32Separator.p"
//import * as path from "path"

export const f_convertWindowsPathToPosixPath: api.FConvertWindowsPathToPosixPath = ($) => {
    return $.split(getWin32Separator()).join(getPosixSeparator())
}