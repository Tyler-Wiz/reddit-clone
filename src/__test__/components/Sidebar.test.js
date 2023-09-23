import { render, screen, waitFor } from "@testing-library/react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

test("check if the feeds and favorite list disappear on button click", async () => {
  render(
    <Router>
      <Sidebar />
    </Router>
  );
  // arrange
  const openIcon = screen.getAllByLabelText("open-menu");
  const feedsList = screen.getByLabelText("feeds-list");
  const favoriteList = screen.getByLabelText("favorites-list");
  const button = screen.getAllByRole("button");

  // assert
  expect(openIcon).toHaveLength(2);
  expect(feedsList).toBeInTheDocument();
  expect(favoriteList).toBeInTheDocument();

  // act //
  await userEvent.click(button[0]);
  await userEvent.click(button[1]);
  const closeIcon = await screen.findAllByLabelText("close-menu");
  expect(closeIcon).toHaveLength(2);

  await waitFor(() => {
    const feeds = screen.queryByLabelText("feeds-list");
    expect(feeds).toBeNull();
  });

  await waitFor(() => {
    const favorites = screen.queryByLabelText("favorites-list");
    expect(favorites).toBeNull();
  });
});
