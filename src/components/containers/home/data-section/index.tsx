import React from "react";
import { Row, Col } from "react-bootstrap";
import { LockersModel } from "../../../../model/api-interface";
import LockerAccordion from "../../../UI/accordion";
import LockerTable from "../../../UI/table";
import FeaturedLocker from "./featured-locker";

interface DataSectionProps {
    lockers: LockersModel[]
}
const DataSection = (props: DataSectionProps) => {
    return (
        <Row className="py-4 px-1">
            <Col xs={3}>
                <FeaturedLocker />
            </Col>
            <Col xs={9}>
                <div className="d-flex justify-content-between align-items-center px-2">
                    <LockerAccordion />
                    <span style={{ color: '#7abaf6', fontSize: 12, fontWeight: 600, textDecoration: 'underline' }}>View the guide size</span>
                </div>
                <div className="">
                    <LockerTable lockers={props.lockers} />
                </div>
            </Col>
        </Row>
    )
}

export default DataSection