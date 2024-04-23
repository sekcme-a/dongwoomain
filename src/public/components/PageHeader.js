import React, { Component } from 'react';
import Link from 'next/link';


const PageHeader = ({main, sub, link}) => {
    return(
        <>
        <div className="dwg-titleZone item-bg1">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="dwg-titleCon">
                            <h2>{sub}</h2>
                            <ul>
                                <li>
                                    <Link href={link}>
                                        <a>{main}</a>
                                    </Link>
                                </li>
                                <li>{sub}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default PageHeader;