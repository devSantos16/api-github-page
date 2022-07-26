import React from "react";

const Container = (props) => {
    let {children} = props;
    return (
        <div className="container">
            {children}
        </div>
    )
}

export default Container;