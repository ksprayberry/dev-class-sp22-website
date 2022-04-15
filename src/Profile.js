import React from "react"

export default ({ image, funFact }) => (
    <div className="col">
        <div className="card border-0">
            <img
                src={image}
                className="card-img-top"
            />
            <div className="card-body">
                <p className="card-text">
                    {funFact}
                </p>
            </div>
        </div>
    </div>
)