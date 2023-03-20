

import { getPosixSeparator } from "../native/getPosixSeparator.native"
import { getWin32Separator } from "../native/getWin32Separator.native"
//import * as path from "path"

import { A } from "../api.generated"

export const $$: A.convertWindowsPathToPosixPath = () => {
    return ($) => {
        return $.split(getWin32Separator()).join(getPosixSeparator())
    }
}