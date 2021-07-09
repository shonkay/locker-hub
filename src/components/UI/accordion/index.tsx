import React, { useState } from "react";
import './accordion.css';
import { Icon } from '@iconify/react';
import bxChevronUp from '@iconify-icons/bx/bx-chevron-up';


const LockerAccordion = (props: any) => {
    const [checked, setChecked] = useState<boolean>(true);

    const toggleChecked = () => {
        setChecked((prevState) => !prevState)
    }
    return (
        <div className="d-flex flex-column">
            <div className="accordion" onClick={toggleChecked}>
                <div className="accordion__header">
                    <h3 className="accordion__title">Featured</h3>
                    <span className="accordion__icon"><Icon icon={bxChevronUp} /></span>
                </div>
                {checked &&
                    <div className="accordion__content">
                        <ul>
                            <li className="active">Small</li>
                            <li>Medium</li>
                            <li>Large</li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default LockerAccordion