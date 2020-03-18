import React from 'react';

export default class Search extends React.Component {

  
    render() {
        // const {original_title} = this.props;
        return(
            <div>
                {/* <form className="form" id="addItemForm"> */}
                    <input 
                    type="text"
                    className="input"
                    id="searchInput"
                    placeholder="Search movie..."
                    value={this.props.title}
                    onChange={this.props.onChangeValue}
                    />
                    <input type="submit" onClick={this.props.onClickSearch} value="Search" />
                {/* </form> */}
            </div>
        )




    }

    }