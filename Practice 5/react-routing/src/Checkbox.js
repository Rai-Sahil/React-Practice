//Testing if the event occured or not.
import { useReducer } from 'react';

export function Checkbox () {
    //Usereducer takes 2 params first the function then the value
    const [checked, setChecked] = useReducer(checked => !checked, false);

    // htmlFor is wrap the label around checkbox else it will give error
    return (
        <>
            <label htmlFor='checked'>
                (checked ? "Checked" : "Not Checked")
            </label>
            <input id="checked" type='checkbox' value={ checked } onChange={ setChecked } />
        </>
    )
}