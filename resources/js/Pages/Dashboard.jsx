import React from 'react'
import Base from '../Layouts/Base'

export default function Dashboard() {
    return (
        <>
            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                        <div className="card">
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-8">
                                        <div className="numbers">
                                            <p className="text-sm mb-0 text-uppercase font-weight-bold">Total Complains</p>
                                            <h5 className="font-weight-bolder">
                                                30
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-4 text-end">
                                        <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                                            <i className="ni ni-world text-lg opacity-10" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                        <div className="card">
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-8">
                                        <div className="numbers">
                                            <p className="text-sm mb-0 text-uppercase font-weight-bold">Complains Resolved</p>
                                            <h5 className="font-weight-bolder">
                                                23
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-4 text-end">
                                        <div className="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                                            <i className="ni ni-paper-diploma text-lg opacity-10" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6">
                        <div className="card">
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-8">
                                        <div className="numbers">
                                            <p className="text-sm mb-0 text-uppercase font-weight-bold">Pending Resolutions</p>
                                            <h5 className="font-weight-bolder">
                                                3
                                            </h5>

                                        </div>
                                    </div>
                                    <div className="col-4 text-end">
                                        <div className="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                                            <i className="ni ni-app text-lg opacity-10" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-12 mb-lg-0 mb-4">
                        <div className="card ">
                            <div className="card-header pb-0 p-3">
                                <div className="d-flex justify-content-between">
                                    <h6 className="mb-2"><small>Latest Complains</small></h6>
                                </div>
                            </div>
                            <div className="card-body">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col"><small>id</small></th>
                                            <th scope="col"><small>Date</small></th>
                                            <th scope="col"><small>Tenant</small></th>
                                            <th scope="col"><small>Complain</small></th>
                                            <th scope="col"><small>Status</small></th>
                                            <th scope="col"><small></small></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row"><small>1</small></th>
                                            <td><small>04.07.2022</small></td>
                                            <td><small>Otton Mark</small></td>
                                            <td><small>Broken taps and clogged pipes.</small></td>
                                            <td><span className="badge rounded-pill bg-light text-danger"><small>pending</small></span></td>
                                            <td><small><div className="dropdown">
                                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Action
                                                </button>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                                    <li><a href="#" className="dropdown-item">Mark as Done</a></li>
                                                    <li><a href="#" className="dropdown-item">Delete Complain.</a></li>
                                                </ul>
                                            </div></small></td>
                                        </tr>
                                         <tr>
                                            <th scope="row"><small>2</small></th>
                                            <td><small>03.07.2022</small></td>
                                            <td><small>Marcus Bismark</small></td>
                                            <td><small>Cringy floor</small></td>
                                            <td><span className="badge rounded-pill bg-light text-success"><small>complete</small></span></td>
                                            <td><small><div className="dropdown">
                                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Action
                                                </button>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                                    <li><a href="#" className="dropdown-item">Mark as Done</a></li>
                                                    <li><a href="#" className="dropdown-item">Delete Complain.</a></li>
                                                </ul>
                                            </div></small></td>
                                        </tr>
                                         <tr>
                                            <th scope="row"><small>3</small></th>
                                            <td><small>06.07.2022</small></td>
                                            <td><small>Caleb Ishmael</small></td>
                                            <td><small>Loose door hinges and broken glasses.</small></td>
                                            <td><span className="badge rounded-pill bg-light text-danger"><small>pending</small></span></td>
                                            <td><small><div className="dropdown">
                                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Action
                                                </button>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                                    <li><a href="#" className="dropdown-item">Mark as Done</a></li>
                                                    <li><a href="#" className="dropdown-item">Delete Complain.</a></li>
                                                </ul>
                                            </div></small></td>
                                        </tr>                              
                                      
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

Dashboard.layout = (page) => <Base children={page} title={"Dashboard"} />
