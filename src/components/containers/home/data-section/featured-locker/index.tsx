import React from "react";
import FeaturedImg from '../../../../../assets/images/featured-img.jpg'
import { LockersModel } from "../../../../../model/api-interface";
import classes from './FeaturedLocker.module.css';

interface FeaturedLockerProps {
    lockers: LockersModel[]
}

const FeaturedLocker = (props: FeaturedLockerProps) => {
    return (
        <div className="d-flex flex-column align-items-center">
            <img src={FeaturedImg} alt="grand" />
            {props.lockers.length ?
                (<div className="d-flex flex-column">
                    <span style={{ color: '#7abaf6', fontSize: 12, fontWeight: 600 }}>
                        {props.lockers[0].address}
                    </span>
                    <div className={classes.StarRating}>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span style={{ color: '#7abaf6', fontSize: 12, fontWeight: 600 }}>
                        0.3 Miles Away
                    </span>
                </div>) :
                null
            }
        </div>
    )
}

export default FeaturedLocker;