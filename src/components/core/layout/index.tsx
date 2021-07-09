import React, { ReactNode } from "react";
import { RouteComponentProps } from "react-router";
import BackgroundHeader from "../../shared/background-header";
import Topbar from "../top-bar";

interface ApplayoutProps extends RouteComponentProps {
    children: ReactNode
}

const Applayout = (props: ApplayoutProps) => {
    return (
        <div>
            <Topbar />
            <BackgroundHeader />
            { props.children }
        </div>
    )
}

export default Applayout;