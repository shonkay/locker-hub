import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import DataSection from "../../components/containers/home/data-section";
import SortPanel from "../../components/containers/home/sort-panel";
import Applayout from "../../components/core/layout";
import { LockersModel } from "../../model/api-interface";

interface HomeProps extends RouteComponentProps {
}

const Home = (props: HomeProps) => {
    const [lockers, setLocker] = useState([] as LockersModel[]);

    return (
        <Applayout {...props} setLocker={setLocker}>
            <SortPanel />
            <DataSection lockers={lockers} />
        </Applayout>
    )
}

export default Home;