import { Link,usePage } from '@inertiajs/inertia-react';
import React, { useState } from 'react'
import Dialog from '../../Components/Dashboard/Dialog';
import Base from '../../Layouts/Base'
import useDialog from '../../Hooks/useDialog';
import CreateUser from '../../Components/Dashboard/Users/CreateUser';
import EditUser from '../../Components/Dashboard/Users/EditUser';
import { Inertia } from '@inertiajs/inertia';

export default function Index(props) {

    const { auth } = usePage().props;

    const { data: users, links, meta } = props.users;
    const [state, setState] = useState([])
    const [addDialogHandler, addCloseTrigger, addTrigger] = useDialog()
    const [UpdateDialogHandler, UpdateCloseTrigger, UpdateTrigger] = useDialog()
    const [destroyDialogHandler, destroyCloseTrigger, destroyTrigger] = useDialog()
    const openUpdateDialog = (user) => {
        setState(user);
        UpdateDialogHandler()
    }

    const openDestroyDialog = (user) => {
        setState(user);
        destroyDialogHandler()
    };

    const destroyUser = () => {
        Inertia.delete(
            route('users.destroy', state.id),
            { onSuccess: () => destroyCloseTrigger() });
    }

    return (
        <>
            <div className="container-fluid py-4">
                <Dialog trigger={addTrigger} title="Create New Tenant">
                    <CreateUser close={addCloseTrigger} />
                </Dialog>

                <Dialog trigger={UpdateTrigger} title={`Update Tenant: ${state.name}`}>
                    <EditUser model={state} close={UpdateCloseTrigger} />
                </Dialog>

                <Dialog trigger={destroyTrigger} title={`Delete Tenant: ${state.name}`}>
                    <p>Are you sure to you want to delete this tenant ?</p>
                    <div className="modal-footer">
                        <button type="button" className="btn bg-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" onClick={destroyUser} className="btn bg-danger">Delete</button>
                    </div>
                </Dialog>

                <div className="row pb-4">
                    <div className="col-12 w-100">
                        <div className="card h-100 w-100">
                            <div className="card-header pb-0">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6>Tenants</h6>
                                    </div>
                                    {auth.user.rent != 0 ? <p></p> :
                                        <div className="col-md-6 d-flex justify-content-end">
                                            <button onClick={addDialogHandler} type="button" className="btn bg-dark text-success btn-block mb-3" data-bs-toggle="modal" data-bs-target="#exampleModalMessage">
                                                New Tenant
                                            </button>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="card-body px-0 pt-0 pb-2">
                                <div className="table-responsive-xxl p-0" width="100%">
                                    <table className="table align-items-center justify-content-center mb-0" width="100%">
                                        <thead>
                                            <tr>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-left">Id</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-left">Name</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-left">Username</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-left opacity-7 ps-2">Email</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-left opacity-7 ps-2">House</th>
                                                {auth.user.rent != 0 ? <p></p> :
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-left opacity-7 ps-2">Rent</th>
                                                }
                                                {auth.user.rent != 0 ? <p></p> :
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Actions</th>
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map((user, index) => (
                                                <tr key={user.id}>
                                                    <td className='text-center'><small>{meta.from + index}</small></td>
                                                    <td className='text-left'>
                                                        <div className="d-flex px-2">
                                                            <div className="my-auto">
                                                                <h6 className="mb-0 text-sm"><small>{user.name}</small></h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='text-left'>
                                                        <p className="text-sm font-weight-bold mb-0"><small>{user.username}</small></p>
                                                    </td>
                                                    <td className='text-left'>
                                                        <span className="text-xs font-weight-bold"><small>{user.email}</small></span>
                                                    </td>
                                                    <td className="align-middle text-left">
                                                        <div className="d-flex align-items-center text-left">
                                                            <span className="text-xs font-weight-bold mb-0"><small>{user.house_number}</small></span>
                                                        </div>
                                                    </td>
                                                    {auth.user.rent != 0 ? <p></p> :
                                                        <td className="align-middle text-left">
                                                            <div className="d-flex align-items-center text-left">
                                                                <span className="text-xs font-weight-bold mb-0"><small>{user.rent}</small></span>
                                                            </div>
                                                        </td>
                                                    }
                                                    {auth.user.rent != 0 ? <p></p> :
                                                        <td className="align-middle text-center" width="10%">
                                                            <div><small><button type="button" onClick={() => openUpdateDialog(user)} className="btn btn-vimeo btn-icon-only mx-2">
                                                                <span className="btn-inner--icon"><i className="fas fa-pencil-alt"></i></span>
                                                            </button>
                                                                <button type="button" onClick={() => openDestroyDialog(user)} className="btn btn-youtube btn-icon-only">
                                                                    <span className="btn-inner--icon"><i className="fas fa-trash"></i></span>
                                                                </button>
                                                            </small>
                                                            </div>
                                                        </td>
                                                    }
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        {meta.links.map((link, k) => (
                            <li key={k} className="page-item">
                                <Link disabled={link.url == null ? true : false} as="button" className={`${link.active && 'bg-dark text-success'} ${link.url == null && 'btn bg-gradient-secondary text-white'} page-link`} href={link.url || ''} dangerouslySetInnerHTML={{ __html: link.label }} />
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    )
}

Index.layout = (page) => <Base key={page} children={page} title={"Manage Tenants"} />
