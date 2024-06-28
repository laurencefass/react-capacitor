import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { fetchUser, updateUser } from '../../store/slices/userSlice';
import './styles.scss';


export const UserForm: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const userState = useSelector((state: RootState) => state.user);
    const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '' });

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    useEffect(() => {
        if (userState.user) {
            setFormState(userState.user);
        }
    }, [userState.user]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(updateUser(formState));
    };

    if (userState.loading) {
        return <div>Loading...</div>;
    }

    if (userState.error) {
        return <div>Error: {userState.error}</div>;
    }

    if (!userState.user) {
        return null;
    }

    return <div className="user-form">
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    First Name:
                    <input type="text" name="firstName" value={formState.firstName} onChange={handleInputChange} />
                </label>
            </div>
            <div>
                <label>
                    Last Name:
                    <input type="text" name="lastName" value={formState.lastName} onChange={handleInputChange} />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input type="email" name="email" value={formState.email} onChange={handleInputChange} />
                </label>
            </div>
            <button type="submit">Save</button>
        </form>
    </div>
};

export const UserCard: React.FC = () => {
    const user = useSelector((state: RootState) => state.user.user);

    if (!user) {
        return <div>No user data available</div>;
    }

    return <>
        <h2>User Info</h2>
        <p>This subscribes to state changes and will update automatically on any page at any level of nesting</p>
        <div className="user-card">
            <h2>User Proile</h2>
            <p><strong>First Name:</strong> {user.firstName}</p>
            <p><strong>Last Name:</strong> {user.lastName}</p>
            <p><strong>Email:</strong> {user.email}</p>
        </div>
    </>
};
