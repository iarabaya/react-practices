import { fireEvent, getByPlaceholderText, getByText, render } from "@testing-library/react"
import Checkbox from "./Checkbox";

test("Selecting checkbox", ()=>{
  const { getByLabelText } = render(<Checkbox/>);
  const checkbox = getByLabelText(/Not Checked/);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
})

// test("Label of checkbox changes", ()=>{
//   const { getByLabelText } = render(<Checkbox/>);
//   const checkboxLabel = getByText(/Not Checked/);
//   const checkbox = getByLabelText(/Not Checked/);
//   fireEvent.click(checkbox);
//   expect(checkboxLabel).toHaveTextContent('Checked');
// })