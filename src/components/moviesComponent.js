import React from 'react';

export default class Movies extends React.Component {
 
render() {
    const { items} = this.props;
        return (
            <div className = "container">
                <div className = "item">
                    {items.map(item => (
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
