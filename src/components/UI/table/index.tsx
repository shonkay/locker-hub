import React from "react";
import { LockersModel } from "../../../model/api-interface";
import classes from "./Table.module.css";

interface LockerTableProps {
    lockers: LockersModel[]
}

const LockerTable = (props: LockerTableProps) => {
    return (
        <table className={`table ${classes.Borderless}`}>
            <tbody>
                {
                    props.lockers.length?
                        (props.lockers || []).map((res, i) => (
                            <tr key={i}>
                                <td> {res.dimension} </td>
                                <td> {res.details} </td>
                                <td> {res.price} </td>
                                <td> {res.availability} </td>
                                <td> <button className="btn btn-success">Rent Now</button> </td>
                            </tr>
                        )) :
                        <tr style={{ width: '100%' }}>
                            <td style={{ textAlign: 'center' }}>No record found</td>
                        </tr>
                }
            </tbody>
        </table>
    )
}

export default LockerTable;