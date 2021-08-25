import React from 'react'
import { DebounceInput } from 'react-debounce-input';

let Search = ({input, setInput}) => {

    return(
        <>
        <div className="bg-dark">
            <div className="container">
                <center className="p-5">
                    <h3 className="text-light mb-4">Class Plus Task</h3>
                    <DebounceInput
                    minLength={3}
                    debounceTimeout={1000} className="form-control" type="text" name="search" placeholder="Search Photos" value = {input} onChange={(e) => setInput(e.target.value)}/>
                </center>
            </div>
        </div>
        </>
    );
}
export default Search;