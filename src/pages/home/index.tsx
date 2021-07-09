import React from "react";
import { RouteComponentProps } from "react-router";
import Applayout from "../../components/core/layout";

interface HomeProps extends RouteComponentProps {
}

const Home = (props: HomeProps) => {
    return (
        <Applayout {...props}>
            <div>Yea</div>
        </Applayout>
    )
}

export default Home;