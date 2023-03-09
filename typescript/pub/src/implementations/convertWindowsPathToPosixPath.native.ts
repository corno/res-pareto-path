

import { getPosixSeparator } from "../native/getPosixSeparator.native"
import { getWin32Separator } from "../native/getWin32Separator.native"
//import * as path from "path"

import { convertWindowsPathToPosixPath } from "../api.generated"

export const $$: convertWindowsPathToPosixPath = ($) => {
    return $.split(getWin32Separator()).join(getPosixSeparator())
}