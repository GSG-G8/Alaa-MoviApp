import React from 'react';

export default class Movies extends React.Component {

    constructor(props){
        super(props)
        this.state = {
        error : null ,
        isLoaded : false ,
        items: []
    };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/search/movie?api_key=304ac5e762f0abd7fc2c27e96bd42840&query=movie')
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                this.setState({
                    isLoaded : true ,
                    items : result
                });
            },

           (error) => {
                this.setState({
                    isLoaded : true ,
                    error
                });
            }
        ) 
    }
render() {
    const {error , isLoaded , items} = this.state;
    if (error) {
    return <div>Error : {error.message}</div>
    }else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <div class = "container">
                <div class = "item">
                    {items.results.map(item => (
                        <div>

                            <h3 key={item.id}>
                            {item.original_title}
                            </h3>
                            <img src ={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt = "movie "/>
                        </div>
                    )) }
                </div>
            </div>
        )
    }
                
            }
        }