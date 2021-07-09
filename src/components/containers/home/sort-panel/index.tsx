import React from "react";
import classes from './SortBar.module.css'

interface SortPanelProps {
    updateDefaultSearchType: (searchType: string) => void
}
const SortPanel = (props: SortPanelProps) => {

    const handleSortType = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        console.log(value);
        props.updateDefaultSearchType(value);
    }
    return (
        <div className={classes.SortPanel}>
            <h4> 6 Open Lockers Available </h4>
            <div className="d-flex align-items-center">
                <h4 className="mb-0 pr-2">Sort By</h4>
                <div className={classes.Select}>
                    <select name="slct" id="slct" defaultValue="" onChange={handleSortType}>
                        <option value="closest">Closest</option>
                        <option value="lowestPrice">Lowest Price</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default SortPanel;