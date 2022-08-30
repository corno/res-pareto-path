import * as api from "api-pareto-path"
import * as path from "path"

export const convertWindowsPathToPosixPath: api.ConvertWindowsPathToPosixPath = ($) => {
    return $.split(path.win32.sep).join(path.posix.sep)
}