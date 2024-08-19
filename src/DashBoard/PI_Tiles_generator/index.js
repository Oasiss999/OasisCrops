import React,{useState,useContext} from "react";
import A_pi from "../../A_pi/A_pi";
import {PiContext} from "../../Contexts/PIArray";

const PI_Tiles_generator = () => {
    const { piNodes } = useContext(PiContext);

    return (
        <>
        {piNodes.length > 0 ? (
                piNodes.map((node, index) => (
                    <A_pi key={index} node={node} />
                ))
            ) : (
                <div>No PI Nodes found</div>
            )}
        </>
    );
}

export default PI_Tiles_generator