import { useForm } from '@inertiajs/inertia-react'
import React from 'react'

export default function CreateUser({close}) {

    const {data, setData, post, reset, errors} = useForm({ name: '', email: '', username: '', address: '', password: '',rent: '',house_number: '' });

    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route('users.store'), {
            data, 
            onSuccess: () => {
                reset(),
                close()
            }, 
        });
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="name" className="col-form-label">Name:</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={onChange} id="name"/>
                            {errors && <div className='text-danger mt-1'>{errors.name}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="username" className="col-form-label">Username:</label>
                            <input type="text" className="form-control" name='username' value={data.username} onChange={onChange} id="username"/>
                            {errors && <div className='text-danger mt-1'>{errors.username}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="col-form-label">Email:</label>
                            <input type="email" className="form-control" name='email' value={data.email} onChange={onChange} id="email"/>
                            {errors && <div className='text-danger mt-1'>{errors.email}</div>}
                    </div>
                     <div className="form-group">
                            <label htmlFor="house_number" className="col-form-label">House Number:</label>
                            <input type="text" className="form-control" name='house_number' value={data.house_number} onChange={onChange} id="house_number"/>
                            {errors && <div className='text-danger mt-1'>{errors.house_number}</div>}
                    </div>
                     <div className="form-group">
                            <label htmlFor="rent" className="col-form-label">Rent:</label>
                            <input type="number" className="form-control" name='rent' value={data.rent} onChange={onChange} id="rent"/>
                            {errors && <div className='text-danger mt-1'>{errors.rent}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="address" className="col-form-label">Address:</label>
                            <input type="text" className="form-control" name='address' value={data.address} onChange={onChange} id="address"/>
                            {errors && <div className='text-danger mt-1'>{errors.address}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="col-form-label">Password:</label>
                            <input type="password" className="form-control" name='password' value={data.password} onChange={onChange} id="password"/>
                            {errors && <div className='text-danger mt-1'>{errors.password}</div>}
                        </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn bg-secondary text-success" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn bg-dark text-success">Save</button>
                </div>
            </form>
        </>

    )
}
