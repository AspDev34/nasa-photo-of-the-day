import React from "react";
import HeaderComp from "../headerComp/headerComp";
import FooterComp from "../footerComp/footerComp";

function BodyComp(props) {


    return (

        <div>
            <HeaderComp headerData={props.bodyData}/>
            <img src={props.bodyData.url}></img>

            <p>{props.bodyData.explanation}</p>
            <FooterComp footerData={props.bodyData.copyright}/>
        </div>


    );


};

export default BodyComp;