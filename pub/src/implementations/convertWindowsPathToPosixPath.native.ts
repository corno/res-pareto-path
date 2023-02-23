import * as mapi from "../api"

import { getPosixSeparator } from "../native/getPosixSeparator.native"
import { getWin32Separator } from "../native/getWin32Separator.native"
//import * as path from "path"

export const $$: mapi.CconvertWindowsPathToPosixPath = ($) => {
    return $.split(getWin32Separator()).join(getPosixSeparator())
}