import React from "react";
import classes from './SortBar.module.css'

const SortPanel = (props: any) => {
    return (
        <div className={classes.SortPanel}>
            <h4> 6 Open Lockers Available </h4>
            <div className="d-flex align-items-center">
                <h4 className="mb-0 pr-2">Sort By</h4>
                <div className={classes.Select}>
                    <select name="slct" id="slct">
                        <option selected disabled>Closest</option>
                        <option value="1">Closest</option>
                        <option value="2">Lowest Price</option>
                    </select>
                </div>
                </div>
            </div>
            )
}

            export default SortPanel;