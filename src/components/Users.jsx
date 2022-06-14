import React, { useEffect } from "react";
import { loadingSelector, userSelector, errorSelector } from "../redux/redusers/userReducer/selectors"
import { useSelector } from "react-redux/es/exports"
import { useDispatch } from "react-redux/es/exports"
import { loadUsers } from "../redux/redusers/userReducer/userReducer";





export function Users() {
    const users = useSelector(userSelector);
    const loading = useSelector(loadingSelector);
    const error = useSelector(errorSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUsers())
    },[])

    const handleError = () => {
        dispatch(loadUsers())
    }

    if(loading){
        return(
            <div>
                loading...
            </div>
        )
    }

    if(error){
        return (
            <div>
                <div>error...</div>
                <button className="button" onClick={handleError}>update</button>
            </div>
        )
    }

    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    {user.name}
                </div>
            ))}
        </div>
    );
}
