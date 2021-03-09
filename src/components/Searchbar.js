import React from "react";
class SearchBar extends React.Component {
    state = {serachinput : ""}
     formSubmit= (event)  => {
event.preventDefault();
this.props.submit(this.state.serachinput)
    }
    render() {
        return(
            <div className ="ui segment">
                <form onSubmit = {this.formSubmit} className = "ui form">
                    <div className ="field">
                        <label>Image Search</label>
                        <input type ="text"
                         value = {this.state.serachinput} 
                         onChange= {(e) => this.setState({serachinput : e.target.value})}/>
                    </div>
                    
                </form>
            </div>
        )
    }
}
export default SearchBar;