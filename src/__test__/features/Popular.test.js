import { findAllByRole, render, screen, waitFor } from "@testing-library/react";
import { Popular } from "../../features/popular/Popular";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { PopularList } from "../../features/popular/PopularList";

describe("Popular", () => {
  test("render popular hot contents correctly", async () => {
    const initialState = {
      popular: [],
      isLoading: true,
    };
    const mockStore = configureStore([thunk]);
    let store;
    store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Router>
          <Popular />
        </Router>
      </Provider>
    );

    const risingButton = screen.getByLabelText("rising-button");
    userEvent.click(risingButton);

    await waitFor(() => {
      const favorites = screen.queryAllByRole("listitem");
      console.log(favorites);
    }, 100000);
  });
});
