import React, { Dispatch, SetStateAction } from 'react';
import { pureAddUserCallback, UserType } from '../HW3';

let initialState: UserType[];
const setUsers: Dispatch<SetStateAction<UserType[]>> = (action) => {
    if (typeof action === 'function') {
        initialState = action(initialState);
    } else {
        initialState = action;
    }
};

beforeEach(() => {
    initialState = [];
});

test('name 1', () => {
    pureAddUserCallback('name', setUsers, initialState);
    expect(initialState.length).toBe(1);
    expect(initialState[0].name).toBe('name');
    expect(!!initialState[0]._id).toBe(true);
});