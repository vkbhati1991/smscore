import React, { Component } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


import NavBar from "./Navbar";
//import Content from "./Content";
//import AllStudents from "./AllStudents";
import StudentForm from "./StudentForm";
import Students from "./Students";

class Student extends Component {

    static displayName = "Student";

    render() {

        return (
            <div>
                <Router>
                   
                    <NavBar />
                    <Switch>
                        <Route exact path="/">
                            {/* <Content /> */}
                           <StudentForm btntype="post" title={"Add User"}/>
                        </Route>
                        <Route path="/students">
                            <Students />
                        </Route>
                        <Route path="/addstudents">
                            <StudentForm btntype="post" title={"Add User"}/>
                        </Route>

                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Student;