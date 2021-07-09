import React from "react";
import classes from './BackgroundHeader.module.css'

const BackgroundHeader = (props: any) => {
    return (
        <div className={classes.BackgoundHeader}>
            <div className="mt-5">
                <h3>
                    Find a Locker
                </h3>
                <div className={classes.InputContainer}>
                    <input type="text" placeholder="Enter City or State" />
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