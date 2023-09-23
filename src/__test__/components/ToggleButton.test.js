import { render, screen } from "@testing-library/react";
import { ToggleButton } from "../../components/button/ToggleButton";
import "@testing-library/jest-dom";

test("Check the button icon is Up icon when state is true", () => {
  render(
    <ToggleButton
      isVisibleFirst={true}
      isVisibleSecond={true}
      setIsVisibleFirst={() => {}}
      setIsVisibleSecond={() => {}}
      header="feed"
    />
  );
  const upIcon = screen.getByLabelText("open-menu");
  expect(upIcon).toBeInTheDocument();
});

test("Check the button icon is down icon when state is true", () => {
  render(
    <ToggleButton
      isVisibleFirst={false}
      isVisibleSecond={false}
      setIsVisibleFirst={() => {}}
      setIsVisibleSecond={() => {}}
      header="feed"
    />
  );
  const upIcon = screen.getByLabelText("close-menu");
  expect(upIcon).toBeInTheDocument();
});
