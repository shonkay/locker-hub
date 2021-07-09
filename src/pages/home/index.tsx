import React from "react";
import { RouteComponentProps } from "react-router";
import SortPanel from "../../components/containers/home/sort-panel";
import Applayout from "../../components/core/layout";

interface HomeProps extends RouteComponentProps {
}

const Home = (props: HomeProps) => {
    return (
        <Applayout {...props}>
            <SortPanel />
            <div>Yea</div>
        </Applayout>
    )
}

export default Home;