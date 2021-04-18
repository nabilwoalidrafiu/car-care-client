import React from 'react';
import './Statistics.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faComments, faSuitcase, faCarCrash } from '@fortawesome/free-solid-svg-icons'
const Statistics = () => {
    return (
        <section className="statistics text-center">
        <div className="data">
            <div className="container">
                <h2 className="h1">Our Main Statistics</h2>
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="stats">
                        <FontAwesomeIcon  className="fa-5x" icon={faUsers} />
                            <p>3,290</p>
                            <span>Satisfied Users</span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="stats">
                            <FontAwesomeIcon  className="fa-5x" icon={faComments} />
                            <p>12,000</p>
                            <span>Review </span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="stats">
                        <FontAwesomeIcon  className="fa-5x" icon={faSuitcase} />
                            <p>1,200</p>
                            <span>Projects Done</span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="stats">
                        <FontAwesomeIcon  className="fa-5x" icon={faCarCrash} />
                            <p>22,600</p>
                            <span>Total</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Statistics;