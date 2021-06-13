import React, { useEffect, useState, useRef } from 'react';
import history from '../../config/history';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        workerRedux: state.workerReducer.worker
    };
}

export default connect(mapStateToProps)(function AllWorkers(props) {

    const [allWorkers, setAllWorkers] = useState([]);

    useEffect(async () => {
        try {
            const obj = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
            const response = await fetch('http://localhost:3400/getAllWorkers', obj);
            const data = await response.json();
            console.log(data);
            data.map(element => {
                setAllWorkers(workers => workers.concat(element));
            });
            // setAllWorkers([...data]);
        }
        catch (error) {
            console.log(error);
        }
    }, []);


    return (
        <div>
            <h1>all workers</h1>
            <ul>
                {/* {allWorkers.map((worker, index) => (
                    <li>
                        <div>{worker.userName}</div>
                        <div>{worker.status}</div>
                    </li>
                ))} */}
            </ul>
        </div>
    )
})