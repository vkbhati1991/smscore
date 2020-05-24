import React from "react";
import {
    Switch,
    Route,
    useParams,
    useRouteMatch
} from "react-router-dom";
import AllStudents from "./AllStudents";
import StudentForm from "./StudentForm";


function Students() {

    const { path } = useRouteMatch();
    const { id } = useParams();

    return (
        <div>
            <Switch>
                <Route exact path={path}>
                    <AllStudents />
                </Route>
                <Route path={`${path}/:studentId`}>
                     <StudentForm btntype="update" title={"Edit User"} path={window.location.pathname} id={id} />

                </Route>
            </Switch>
        </div>
    );
}

export default Students;