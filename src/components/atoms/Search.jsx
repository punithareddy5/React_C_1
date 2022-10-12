import React from "react";


const Search = (props) => {    
    const {callBackFn,serachTerm} = props;
    return (
        <>
            <input
                type="text"
                placeholder="Search Movies"
                className="prompt"
                value={serachTerm}
                onChange={(e) => callBackFn(e.target.value)}
                />
      </>
    )
}
export default Search;