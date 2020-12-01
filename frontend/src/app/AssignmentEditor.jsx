import React from "react";
//import { Redirect } from 'react-router-dom'
import { AssignmentRepository } from '../Api/assignmentRepository'
import { Header } from './Header';

export class AssignmentEditor extends React.Component{
  
    assignment = new AssignmentRepository();

    state = {
 
    };

    render() {
        return(<>
            <Header />
            <nav className="navbar bg-white">
                <span className="mb-0 h5 text-primary">Edit Assignment</span>
            </nav>
            <div className="p-5 container-fluid container-sm">
                <div className = "p-2 card text-center w-50 mx-auto">
                    <div className = "form-group">
                    <div className= "card-header bg-dark text-white">
                        <h5 className="card-title">Edit Assignment</h5>
                    </div>
                    <div className = "card-body">
                        <form>
                            <div className="form-row">
                                <div className="form-group col text-left">
                                    <label htmlFor="assignmentName">Assignment Name</label>
                                    <input type="text" className="form-control" placeholder="Current Assignment Name" onChange={e => this.setState({description: e.target.value})}/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col text-left">
                                    <label htmlFor="courseInput">Course</label>
                                    <input type="text" className="form-control" placeholder="Current Course Name"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col text-left">
                                    <label htmlFor="dateInput">Due Date</label>
                                    <input type="text" className="form-control" placeholder="Current Due Date"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col text-left">
                                    <label htmlFor="descriptionInput">Description</label>
                                    <input type="text" className="form-control" placeholder="Current Due Date"/>
                                </div>
                            </div>
                            <div className="dropdown">
                              <button className="btn btn-dark btn-lg dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Assignment Type
                              </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {/* <a className="dropdown-item" href="#">Exam</a>     */}
                                {/* <a className="dropdown-item" href="#">Quiz</a>     */}
                                {/* <a className="dropdown-item" href="#">Paper</a>    */}
                                {/* <a className="dropdown-item" href="#">Homework</a> */}
                                {/* <a className="dropdown-item" href="#">Project</a>  */}
                               </div>
                            </div>
                        </form>
                    </div>
                
                    <div className="footer">
                        <div className ="p-3 btn-group" role="group" >
                          <button type="button" className="btn btn-primary btn-md btn-primary" onClick={e => this.submit()}>Save Changes</button>
                          <button type="button" className="btn btn-primary btn-md btn-primary" onClick={e => this.submit()}>Mark As Complete</button>
                          <button type="button" className="btn btn-primary btn-md btn-primary" onClick={e => this.submit()}>Delete</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </>
        )}
}
