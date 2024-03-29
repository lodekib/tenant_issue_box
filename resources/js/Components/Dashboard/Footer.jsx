import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="footer mt-auto pb-4">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-lg-between">
                        <div className="col-lg-6 mb-lg-0 mb-4">
                        <div className="copyright text-center text-sm text-muted text-lg-start">
                            Copyright © 2022 ,
                            <a href="#" className="font-weight-bold"> Zainab </a>
                        
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                            <li className="nav-item">
                            <a href="#" className="nav-link text-muted">Acacia TenantCare</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
