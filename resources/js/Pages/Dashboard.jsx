import Base from '../Layouts/Base'
import { Link, useForm } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function Dashboard(props) {
    const { data: complains, meta } = props.complains;
    const { put } = useForm();

    const handleStatus = (complain) => {
          put(route('complains.update', complain.id), {
           id: complain.id
        });
    }
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
                                        {complains.map((complain, index) => (
                                            <tr key={index}>
                                                <th scope='row'><small>{complain.id}</small></th>
                                                <td><small>{complain.created_at}</small></td>
                                                <td><small>{complain.tenant}</small></td>
                                                <td><small>{complain.complain}</small></td>
                                                {complain.isComplete ? <td><span className="badge rounded-pill bg-light text-danger"><small>complete</small></span></td>
                                                    : <td><span className="badge rounded-pill bg-light text-danger"><small>pending</small></span></td>
                                                }
                                                <td>
                                                    <button className="btn dropdown btn-outline-light bg-light text-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Action
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                                        <li><button onClick={() => handleStatus(complain)} className="dropdown-item">Mark as Done</button></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-center">
                                        {meta.links.map((link, k) => (
                                            <li key={k} className="page-item">
                                                <Link disabled={link.url == null ? true : false} as="button" className={`${link.active && 'bg-info'} ${link.url == null && 'btn bg-gradient-secondary text-white'} page-link`} href={link.url || ''} dangerouslySetInnerHTML={{ __html: link.label }} />
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

Dashboard.layout = (page) => <Base children={page} title={"Dashboard"} />
