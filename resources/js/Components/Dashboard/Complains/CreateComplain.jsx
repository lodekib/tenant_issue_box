export default function CreateComplain({close}) {
    return <>
        <form>
            <div className="modal-body">
                <div className="form-group">
                    <label htmlFor="complain" className="col-form-label">Complain :</label>
                    <textarea className="form-control" name="complain" id="complain" rows="4" cols="2" placeholder="write your complain here...">

                    </textarea>    
                </div>

            </div>
            <div className="modal-footer">
                <button type="button" className="btn bg-secondary text-light" data-bs-dismiss="modal">Close</button>
                <button type="buttton" className="btn bg-primary text-light">Submit</button>
            </div>
    </form>
    </>
}