import React from "react";
import FeaturedImg from '../../../../../assets/images/featured-img.jpg'
import classes from './FeaturedLocker.module.css';

const FeaturedLocker = (props: any) => {
    return (
        <div className="d-flex flex-column align-items-center">
            <img src={FeaturedImg} alt="grand" />
            <div className="d-flex flex-column">
                <span style={{ color: '#7abaf6', fontSize: 12, fontWeight: 600 }}>
                    22A Adeola Odeku Street, VI, Lagos
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
            </div>
        </div>
    )
}

export default FeaturedLocker;