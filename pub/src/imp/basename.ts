import * as api from "api-pareto-path"
import * as path from "path"

export const basename: api.Basename = ($) => {
    return path.basename($)
}