import { API } from "./definition/api.generated"
import { $$ as ibasename } from "./implementations/basename.native"
import { $$ as iconvertWindowsPathToPosixPath } from "./implementations/convertWindowsPathToPosixPath.native"
import { $$ as idirname } from "./implementations/dirname.native"
import { $$ as iparseFilePath } from "./implementations/parseFilePath.native"

export const $a: API = {
    'basename': ibasename,
    'convertWindowsPathToPosixPath': iconvertWindowsPathToPosixPath,
    'dirname': idirname,
    'parseFilePath': iparseFilePath,
}