import React, { useEffect, useState, useRef } from 'react';
import history from '../../config/history';
import { connect } from 'react-redux';
import { setWorkerDetails } from '../../redux/actions';

function mapStateToProps(state) {
    return {
        workerRedux: state.workerReducer.worker
    };
}
function mapDispatchToProps(dispatch) {
    return {
        setWorkerDetails: (worker) => dispatch(setWorkerDetails(worker))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(function Login(props) {

    const passwordRef = useRef();
    const emailRef = useRef();
    const userNameRef = useRef();

    const [viewCreateWorker, setViewCreateWorker] = useState(false);

    const login = async () => {
        try {
            let objWorker = {
                password: passwordRef.current.value,
                email: emailRef.current.value
            };
            console.log(objWorker);
            const obj = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(objWorker)
            };
            const response = await fetch('http://localhost:4000/checkPermission', obj);
            const data = await response.json();
            console.log(data);
            if (data == false)
                setViewCreateWorker(true);
            else {
                setWorkerDetails(data);
                history.push("/dashboard");
            }

        }
        catch (error) {
            console.log(error);
        }
    }

    const createWorker = async () => {
        try {
            let objWorker = {
                password: passwordRef.current.value,
                email: emailRef.current.value,
                userName: userNameRef.current.value
            };
            console.log(objWorker);
            const obj = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(objWorker)
            };
            const response = await fetch('http://localhost:4000/setNewWorker', obj);
            const data = await response.json();
            console.log(data);
            if (data != false) {
                setWorkerDetails(data);
                history.push("/dashboard")
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Hello!</h1>
            <div>
                <label>email</label>
                <input ref={emailRef} type="text"></input>
            </div>
            <div>
                <label>password</label>
                <input ref={passwordRef} type="password" nimlength="8"></input>
            </div>
            <button onClick={() => login()} disabled={viewCreateWorker}>next</button>
            {viewCreateWorker ?
                <div>
                    <div>
                        <label>user name</label>
                        <input ref={userNameRef} type="text"></input>
                    </div>
                    <button onClick={() => createWorker()}>create worker</button>
                </div>
                : ''}
        </div>
    )
})