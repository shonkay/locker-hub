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
    const [availableLocker, setAvailableLocker] = useState<number>(0)
    const [defaultSearchType, setDefaultSearchType] = useState<string>('')

    const updateDefaultSearchType = (searchType: string) => {
        setDefaultSearchType(searchType)
    }

    return (
        <Applayout {...props} setLocker={setLocker} setAvailableLocker={setAvailableLocker} defaultSearchType={defaultSearchType}>
            <SortPanel availableLocker={availableLocker} updateDefaultSearchType={updateDefaultSearchType} />
            <DataSection updateDefaultSearchType={updateDefaultSearchType} defaultSearchType={defaultSearchType} lockers={lockers} />
        </Applayout>
    )
}

export default Home;