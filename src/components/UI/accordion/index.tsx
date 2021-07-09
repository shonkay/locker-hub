import React, { useState } from "react";
import './accordion.css';
import { Icon } from '@iconify/react';
import bxChevronUp from '@iconify-icons/bx/bx-chevron-up';

interface LockerAccordionProps {
    updateDefaultSearchType: (searchType: string) => void;
    defaultSearchType?: string;
}

export const accordionTypes = ['small', 'medium', 'large'];

const LockerAccordion = (props: LockerAccordionProps) => {
    const [checked, setChecked] = useState<boolean>(true);

    const toggleChecked = () => {
        setChecked((prevState) => !prevState)
    }

    const handleSortType = (e: string) => {
        console.log(e);
        props.updateDefaultSearchType(e);
    }

    return (
        <div className="d-flex flex-column">
            <div className="accordion">
                <div className="accordion__header" onClick={toggleChecked}>
                    <h3 className="accordion__title">Featured</h3>
                    <span className="accordion__icon"><Icon icon={bxChevronUp} /></span>
                </div>
                {checked &&
                    <div className="accordion__content">
                        <ul>
                            {accordionTypes.map((res, i) => (
                                <li key={i} className={props.defaultSearchType === res ? 'active' : ''} onClick={() => { handleSortType(res) }}>{res}</li>
                            ))}
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default LockerAccordion