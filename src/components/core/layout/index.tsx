import React, { ReactNode } from "react";
import { RouteComponentProps } from "react-router";
import BackgroundHeader from "../../shared/background-header";
import Topbar from "../top-bar";

interface ApplayoutProps extends RouteComponentProps {
    children: ReactNode;
    setLocker: React.Dispatch<React.SetStateAction<any>>;
    setAvailableLocker: React.Dispatch<React.SetStateAction<number>>
    defaultSearchType: string;
}

const Applayout = (props: ApplayoutProps) => {
    return (
        <div>
            <Topbar />
            <BackgroundHeader setLocker={props.setLocker} setAvailableLocker={props.setAvailableLocker} defaultSearchType={props.defaultSearchType} />
            {props.children}
        </div>
    )
}

export default Applayout;