import React from "react";
import styled from "styled-components";
import { Badge } from 'reactstrap';

const HeaderStyles = styled.div`



margin-right: 20%;
margin-left: 20%;


`;







function HeaderComp(props) {
    console.log(props);

    return (

        <HeaderStyles>

        {/* <h1>{props.headerData.title}</h1> */}
    <h1><Badge color="primary">{props.bodyData.title}</Badge></h1>

        </HeaderStyles>


    );


};

export default HeaderComp;