import * as api from "api-pareto-path"
import * as path from "path"

export const dirname: api.Dirname = ($) => {
    return path.dirname($)
}