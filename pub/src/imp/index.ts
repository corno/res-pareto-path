export * from "./parseFilePath"
import * as api from "api-pareto-path"
import { parseFilePath } from "./parseFilePath"

type API = {
    parseFilePath: api.ParseFilePath,
}

export const $: API = {
    parseFilePath: parseFilePath
}