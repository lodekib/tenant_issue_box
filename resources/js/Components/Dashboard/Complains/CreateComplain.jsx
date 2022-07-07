import { useForm } from "@inertiajs/inertia-react"

export default function CreateComplain({ close }) {
    const { data, setData, post, reset, errors } = useForm({ complain: '' });
    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route('complains.store'), {
            data,
            onSuccess: () => {
                reset(),
                    close()
            }
        });
    }
    return <>
        <form onSubmit={onSubmit}>
            <div className="modal-body">
                <div className="form-group">
                    <label htmlFor="complain" className="col-form-label">Complain :</label>
                    <textarea className="form-control" name="complain" id="complain" value={data.complain} rows="4" cols="2" placeholder="write your complain here..." onChange={onChange} required>
                    </textarea>
                    {errors && <div className='text-danger mt-1'>{errors.complain}</div>}

                </div>

            </div>
            <div className="modal-footer">
                <button type="button" className="btn bg-secondary text-light" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn bg-primary text-light">Submit</button>
            </div>
        </form>
    </>
}