import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link,usePage} from "@inertiajs/inertia-react";
import CreateComplain from "../../Components/Dashboard/Complains/CreateComplain";
import Dialog from "../../Components/Dashboard/Dialog";
import useDialog from "../../Hooks/useDialog";
import Base from "../../Layouts/Base";


export default function ComplainIndex(props) {
    const [addDialogHandler, addCloseTrigger, addTrigger] = useDialog();
    const [state, setState] = React.useState([]);
    const { data: complains, meta } = props.complains;
    const [destroyDialogHandler, destroyCloseTrigger, destroyTrigger] = useDialog();
    const { auth } = usePage().props;

    const openDestroyDialog = (complain) => {
        setState(complain);
        destroyDialogHandler();
    };
    const destroyComplain = () => {
        Inertia.delete(
            route('complains.destroy', state.id),
            {
                onSuccess:()=>destroyCloseTrigger()
            }
        );
    }

    return <>
        <div className="container-fluid py-4">
            <Dialog trigger={addTrigger} title="Raise new complain">
                <CreateComplain close={addCloseTrigger} />
            </Dialog>
                    <Dialog trigger={destroyTrigger} title={`Delete Complain`}>
                    <p>Are you sure to you want to delete this complain ?</p>
                    <div className="modal-footer">
                        <button type="button" className="btn bg-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" onClick={destroyComplain} className="btn bg-danger">Delete</button>
                    </div>
                </Dialog>
            <div className="row pb-4">
                <div className="col-12 w-100">
                    <div className="card h-100 w-100">
                        <div className="card-header pb-0">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>Complains</h6>
                                </div>
                                {auth.user.house_number != 0 ?
                                <div className="col-md-6 d-flex justify-content-end">
                                    <button type="button" onClick={addDialogHandler} className="btn bg-primary btn-block mb-3 text-light" data-bs-toggle="modal" data-bs-target="#exampleModalMessage">
                                        <i className="fas fa-hand-sparkles text-success text-sm opacity-10" />   Raise Complain
                                    </button>
                                </div> : <p></p>}
                            </div>
                        </div>
                        <div className="card-body px-0 pt-0 pb-2">
                            <div className="table-responsive-xxl p-0" width="100%">
                                <table className="table align-items-center justify-content-center mb-0" width="100%">
                                    <thead>
                                        <tr>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-left">Date</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-left">Tenant</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-left opacity-7 ps-2">House</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-left opacity-7 ps-2">Complain</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {complains.map((complain) => (
                                            <tr key={complain.id}>
                                                <td className='text-left'>
                                                    <div className="d-flex px-2">
                                                        <div className="my-auto">
                                                            <h6 className="mb-0 text-sm"><small>{complain.created_at}</small></h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='text-left'>
                                                    <div className="d-flex px-2">
                                                        <div className="my-auto">
                                                            <h6 className="mb-0 text-sm"><small>{complain.tenant}</small></h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='text-left'>
                                                    <div className="d-flex px-2">
                                                        <div className="my-auto">
                                                            <h6 className="mb-0 text-sm"><small>{complain.tenant_house}</small></h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='text-left'>
                                                    <div className="d-flex px-2">
                                                        <div className="my-auto">
                                                            <h6 className="mb-0 text-sm"><small>{complain.complain}</small></h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="align-middle text-center" width="10%">
                                                    <div>
                                                        <button type="button" onClick={() => openDestroyDialog(complain)} className="btn btn-youtube btn-icon-only">
                                                            <span className="btn-inner--icon"><i className="fas fa-trash"></i></span>
                                                        </button>
                                                    </div>
                                                </td>

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
                                <Link disabled={link.url == null ? true : false} as="button" className={`${link.active && 'bg-info'} ${link.url == null && 'btn bg-gradient-secondary text-white'} page-link`} href={link.url || ''} dangerouslySetInnerHTML={{ __html: link.label }} />
                            </li>
                        ))}
                    </ul>
                </nav>
        </div>
    </>
}

ComplainIndex.layout = (page) => <Base key={page} children={page} title={"Complains"} />
