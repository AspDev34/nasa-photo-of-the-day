import React from "react";
// import HeaderComp from "../headerComp/headerComp";
import FooterComp from "../footerComp/footerComp";
import styled from 'styled-components';

const StyledBody = styled.img`
height: 80vh;
border-radius: 10%;
border: 6px solid greenyellow;
`;

const Letters = styled.p`

color: white;
text-align: center;
margin-right: 5%;
margin-left: 5%;
margin-top: 2%;

`;

function BodyComp(props) {


    return (

        <div>
            {/* <HeaderComp headerData={props.bodyData}/> */}
            <StyledBody src={props.bodyData.url}></StyledBody>

            <Letters>{props.bodyData.explanation}</Letters>
            <FooterComp footerData={props.bodyData.copyright}/>
        </div>


    );


};

export default BodyComp;