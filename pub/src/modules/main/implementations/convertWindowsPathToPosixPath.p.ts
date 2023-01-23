import * as api from "../api"

import { getPosixSeparator } from "../native/getPosixSeparator.p"
import { getWin32Separator } from "../native/getWin32Separator.p"
//import * as path from "path"

export const $$: api.CconvertWindowsPathToPosixPath = ($) => {
    return $.split(getWin32Separator()).join(getPosixSeparator())
}