import React from 'react';
import auth from '../hoc/auth';

const OpList = (props)=> (
    <div>
        <h1 className="text-center">Secret Operatives list</h1>
        <ol className="list-group">
            <li className="list-group-item">Jim</li>
            <li className="list-group-item">Kim</li>
            <li className="list-group-item">Tim</li>
            <li className="list-group-item">Scott</li>
        </ol>
    </div>
)

export default auth(OpList)