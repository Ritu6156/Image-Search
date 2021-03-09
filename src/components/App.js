import React from "react";
import SearchBar from "./Searchbar";
import axios from "axios";
import Images from "./images.js";
class App extends React.Component{
    state ={images : []}
    onSubmit = async (term ) => {
        
        const response = await axios.get("https://api.unsplash.com/search/photos",{
            params : {
                query: term
            },
            headers : {
                Authorization : "Client-ID YThkE7jr4hZJkQFwZOJ3WfpH1Z_0oaqIEtGI2kQuFFk"
            }
        })
     this.setState({images : response.data.results})
    }
    render() {
return(
    <div className ="ui container">
        <SearchBar submit = {this.onSubmit} />
        Found: {this.state.images.length} images
        <Images images = {this.state.images}/>
    </div>
    
)
}
}

export default App;