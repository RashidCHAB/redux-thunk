import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector, } from "react-redux"
import { fetchtasks } from './features/todoReducer';
import "./Users.css"
const Users = () => {
    const users = useSelector((state) => state.users)
    const error = useSelector((state) => state.error)
    const loading = useSelector((state) => state.loading)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchtasks())
    }, [dispatch])

    if (loading) {
        return (
            <div className="loader"></div>
        )
    }
    if (error) {
        return <h1>error: {error}</h1>
    }
    return (
        <div>
            {users.map((el) => {
                return <div>{el.name}</div>
            })}
        </div>
    );
};

export default Users;