import { Sort } from "../../types/base";

/*
on init...
    .
    . get callbacks

on client load...
    . fetch schema
    . fetch rows
    . fetch columns
    . get sorted columns

* */

export interface BaseInitialState {
    sorts: Sort[]
}

const baseInitialState = {
    table: null,
    metaService: null,
    rowService: null,
    refreshPageFlag: 0,
    isInitialComplete: false,
    editable: false,
}

const BaseReducer = (state: baseInitialState, action) => {
    switch (action.type) {


    }
    default:
        return state;
}