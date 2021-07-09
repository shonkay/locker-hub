import AwesomeDebouncePromise from "awesome-debounce-promise";
import React, { useState } from "react";
import { searchLockerApi } from "../../../lib/locker-api";
import { LockersModel } from "../../../model/api-interface";
import classes from './BackgroundHeader.module.css'

interface BackgroundHeaderProps {
    setLocker: React.Dispatch<React.SetStateAction<any>>
}

const searchAPI = async (text: string) => {
    try {
        const res = await searchLockerApi(text);
        if (res.responseCode === 200) {
            return res?.modelResponse as LockersModel[]
        }
        return null
    } catch (error) {
        return null
    }
}

const searchAPIDebounced = AwesomeDebouncePromise(searchAPI, 500);

const BackgroundHeader = (props: BackgroundHeaderProps) => {

    const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const searchData = await searchAPIDebounced(e.target.value);
        console.log(searchData)
        props.setLocker(searchData);
    }

    return (
        <div className={classes.BackgoundHeader}>
            <div className="mt-5">
                <h3>
                    Find a Locker
                </h3>
                <div className={classes.InputContainer}>
                    <input type="text" defaultValue="" placeholder="Enter City or State" onChange={handleInputChange} />
                    <div className={classes.ActionButton}>
                        <p className="mt-2 mb-0">Find Locker</p>
                        <span>One Naira For First Rent</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BackgroundHeader;