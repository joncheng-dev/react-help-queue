import rootReducer from "../../reducers/index.js";
import { legacy_createStore as createStore } from "redux";
import formVisibleReducer from "../../reducers/form-visible-reducer.js";
import ticketListReducer from "../../reducers/ticket-list-reducer.js";

let store = createStore(rootReducer);

describe("rootReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(rootReducer({}, { type: null })).toEqual({
      mainTicketList: {},
      formVisibleOnPage: false,
    });
  });

  test("Check that initial state of ticketListReducer matches root reducer", () => {
    expect(store.getState().mainTicketList).toEqual(ticketListReducer(undefined, { type: null }));
  });

  test("Check that initial state of formVisibleReducer matches root reducer", () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });
});
