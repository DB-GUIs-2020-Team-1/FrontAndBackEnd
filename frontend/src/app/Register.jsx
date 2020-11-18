import React from "react";

export class Register extends React.Component{

    render() {
        return(
            <div className="p-5 container-sm">
                <div className = "p-2 card text-center w-50 mx-auto">
                    <div className = "form-group">
                    <div className= "card-header">
                        <h5 className="card-title">Register</h5>
                    </div>
                    <div className = "card-body">
                        <form>
                            <div className="form-row">
                                <div className="form-group col text-left">
                                    <label for="exampleFormControlInput1">Username</label>
                                    <input type="text" className="form-control" placeholder="JohnDoeRules"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col text-left">
                                    <label for="exampleFormControlInput1">Password</label>
                                    <input type="password" className="form-control" placeholder="SecretCode"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col text-left">
                                    <label for="exampleFormControlInput1">Password Confirmation</label>
                                    <input type="password" className="form-control" placeholder="SecretCode"/>
                                </div>
                            </div>
                        </form>
                    </div>
                
                    <div className="footer">
                    <button className="btn btn-lg btn-primary" onClick={e => this.submit()}>Register</button>
                </div>
                </div>
                </div>
            </div>
        )}

}