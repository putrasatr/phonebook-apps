import { render, screen } from "@testing-library/react";

const App = () => {
  return <div>learn react</div>;
};
const Welcome = ({ firstName, lastName }) => {
  return (
    <div>
      <div role="form">
        <input name={"firstName"} value={firstName} />
        <input name={"lastName"} value={lastName} />
      </div>
    </div>
  );
};

test("has correct input value", () => {
  render(<Welcome firstName="John" lastName="Doe" />);
  expect(screen.getByRole("form")).toHaveFormValues({
    firstName: "John",
    lastName: "Doe",
  });
});

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
