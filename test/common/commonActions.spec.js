// @flow

import * as types from "../../client/constants/ActionTypes";
import * as actions from "../../client/common/actions";

describe("actions", () => {
    it("creates an action to close work in progress window", () => {
        const expectedAction = {
            type: types.CLOSE_WORK_IN_PROGRESS_WINDOW
        };

        expect(actions.closeWorkInProgressWindow()).toEqual(expectedAction);
    });

    it("creates an action to set error message", () => {
        const expectedAction = {
            type: types.SET_ERROR_MESSAGE,
            error: "Error Message"
        };

        expect(actions.setErrorMessage("Error Message")).toEqual(expectedAction);
    });

    it("creates an action to clear error message", () => {
        const expectedAction = {
            type: types.RESET_ERROR_MESSAGE
        };

        expect(actions.clearErrorMessage()).toEqual(expectedAction);
    });
});