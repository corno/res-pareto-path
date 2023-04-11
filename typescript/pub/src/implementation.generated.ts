import { API } from "./api.generated"
import { $$ as ibasename } from "./implementations/basename.native"
import { $$ as iconvertWindowsPathToPosixPath } from "./implementations/convertWindowsPathToPosixPath.native"
import { $$ as idirname } from "./implementations/dirname.native"
import { $$ as iparseFilePath } from "./implementations/parseFilePath.native"

export const $api: API = {
    'basename': ibasename,
    'convertWindowsPathToPosixPath': iconvertWindowsPathToPosixPath,
    'dirname': idirname,
    'parseFilePath': iparseFilePath,
}