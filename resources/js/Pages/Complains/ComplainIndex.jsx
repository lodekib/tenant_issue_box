import CreateComplain from "../../Components/Dashboard/Complains/CreateComplain";
import Dialog from "../../Components/Dashboard/Dialog";
import useDialog from "../../Hooks/useDialog";
import Base from "../../Layouts/Base";


export default function ComplainIndex(props) {
    const [addDialogHandler, addCloseTrigger, addTrigger] = useDialog();

    return <>
        <div className="container-fluid py-4">
            <Dialog trigger={addTrigger} title="Raise new complain">
                <CreateComplain />
            </Dialog>
            <div className="row pb-4">
                <div className="col-12 w-100">
                    <div className="card h-100 w-100">
                        <div className="card-header pb-0">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>Complains</h6>
                                </div>
                                <div className="col-md-6 d-flex justify-content-end">
                                    <button  type="button" onClick={addDialogHandler} className="btn bg-primary btn-block mb-3 text-light" data-bs-toggle="modal" data-bs-target="#exampleModalMessage">
                                     <i className="fas fa-hand-sparkles text-success text-sm opacity-10" />   Raise Complain
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card-body px-0 pt-0 pb-2">
                            <div className="table-responsive-xxl p-0" width="100%">
                                <table className="table align-items-center justify-content-center mb-0" width="100%">
                                    <thead>
                                        <tr>
                                             <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-left">Id</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-left">Date</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-left">Tenant</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-left opacity-7 ps-2">House</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-left opacity-7 ps-2">Complain</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav arial-label="Page Navigation">
                <ul className="pagination justify-content-center">
                    
                </ul>
            </nav>
        </div>
    </>
}

ComplainIndex.layout = (page) => <Base key={page} children={page} title={"Complains"} />
