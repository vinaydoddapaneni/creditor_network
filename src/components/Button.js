import React,{Component} from 'react';

class Button extends Component{
    render(){
        return(
            <button type="submit" class="btn btn-primary btn-lg button_size" name="Search" style={{ padding: '0.7rem 1rem' }}> Search</button>
        )
    }
}

export default Button;