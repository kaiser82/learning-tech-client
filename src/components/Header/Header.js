import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import logo from '../../assets/pictures/logo.png'

const Header = () => {

    const { user, logOut } = useContext(AuthContext)
    return (
        <div className="navbar bg-gray-800 text-neutral-content lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 rounded-box w-52">
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='blog'>FAQ</Link></li>
                    </ul>
                </div>
                <div className='w-12'>
                    <img src={logo} alt="" />
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Learning Tech</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 space-x-5">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/blog'>FAQ</Link></li>
                </ul>
            </div>
            <div className="navbar-end space-x-5 ">
                <p className='hidden lg:block'>
                    {
                        user?.displayName ? <span>{user.displayName}</span> : <span>{user?.email}</span>
                    }
                </p>
                {
                    user?.photoURL &&
                    <div className="tooltip  tooltip-right" data-tip={user?.displayName}>
                        <div className="avatar p-1">
                            <div className="w-8 lg:w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user.photoURL} alt="profilePic" />
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={() => { logOut() }} className='btn'>Logout</button>
                        :
                        <div className='space-x-5'>
                            <Link to='/login' className="btn">Login</Link>
                            <Link to='/register' className="btn">Register</Link>
                        </div>
                }
            </div>

        </div>
    );
};

export default Header;