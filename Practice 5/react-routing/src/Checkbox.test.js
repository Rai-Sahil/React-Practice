import { fireEvent, render } from "@testing-library/react"
import { Checkbox } from "./Checkbox"

test("Selecting the checkbox change value to true", () => {
    const { getByLabelText } = render(<Checkbox />)
    const checkbox = getByLabelText(/Not Checked/i) // Adding makes not case sensitive
    fireEvent.click(checkbox); // This means try clicking the checkbox and then test the below thing.
    expect(checkbox.checked).toEqual(true);

})