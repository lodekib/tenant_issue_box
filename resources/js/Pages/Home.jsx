import React from 'react'
import Guest from '../Layouts/Guest';
import { Link } from '@inertiajs/inertia-react';

export default function Home() {
  return (
    <>
      <div className='bg-secondary' style={{ left: "50%",top:"50%",position:"absolute",transform:"translate(-50%,-50%)",color:"#fff",padding:"40px",borderRadius:"10px",cursor:"pointer"}}>
      <h3>Acacia TenantCare</h3>
      <div className="btn bg-dark btn-block mt-4 w-100">
      <Link className="nav-link text-success" href={route('login')}>LOGIN</Link>
      </div>
    </div>
    </>
  )
}

Home.layout = (page) => <Guest children={page} title={"Home"}/>
