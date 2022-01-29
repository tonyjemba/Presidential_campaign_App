import { CHANGESTATE } from "./Constants";

export const getInput= (input) => ({
    type: CHANGESTATE,
    payload:input
})