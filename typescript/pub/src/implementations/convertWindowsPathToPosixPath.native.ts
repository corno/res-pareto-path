

import { getPosixSeparator } from "../native/getPosixSeparator.native"
import { getWin32Separator } from "../native/getWin32Separator.native"
//import * as path from "path"

import { CconvertWindowsPathToPosixPath } from "../api"

export const $$:CconvertWindowsPathToPosixPath = ($) => {
    return $.split(getWin32Separator()).join(getPosixSeparator())
}