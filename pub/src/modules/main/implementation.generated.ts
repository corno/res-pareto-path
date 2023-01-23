import { API } from "./api"
import { $$ as ibasename } from "./implementations/basename.p"
import { $$ as iconvertWindowsPathToPosixPath } from "./implementations/convertWindowsPathToPosixPath.p"
import { $$ as idirname } from "./implementations/dirname.p"
import { $$ as iparseFilePath } from "./implementations/parseFilePath.p"

export const $a: API = {
    'basename': ibasename,
    'convertWindowsPathToPosixPath': iconvertWindowsPathToPosixPath,
    'dirname': idirname,
    'parseFilePath': iparseFilePath,
}