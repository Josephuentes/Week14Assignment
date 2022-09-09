import React from "react";
import Movies from "./Movies";
import Reviews from "./Reviews";
import StarRating from "./StarRating";
import Reviewform from "./Reviewform";

export default class Movielist extends React.Component {
    render()
    {
        const movies = [{
            name: 'Ace Ventura', img: '/images/aceventura.jpg', synopsis: 'A goofy detective specializing in animals goes in search of the missing mascot of the Miami Dolphins.'},
            {name: 'Idiocracy', img: '/images/idiocracy.jpg', synopsis: 'Joe Bauers, an average American, is selected as a subject for a secret hibernation program but is forgotten, awakening to a future so moronic he is the most intelligent person alive.'},
            {name: 'Step Brothers', img: '/images/stepbrothers.jpg', synopsis: 'Two aimless middle-aged losers still living at home are forced against their will to become roommates when their parents marry.'},
            {name: 'Office Space', img: '/images/officespace.jpg', synopsis: 'Three company workers who hate their jobs decide to rebel against their greedy boss.'},
            {name: 'The Twins', img: '/images/thetwins.jpg', synopsis: 'A physically perfect but innocent man goes in search of his long-lost twin brother, who is short, a womanizer, and small-time crook.'}]
           
        
            return (
                <div>
                
                {
                    movies.map(movie =>
                        {
                            return <p key={movie.name}><Movies name={movie.name} img={movie.img} synopsis={movie.synopsis} /> 
                              
                            <Reviewform /> 
                            <StarRating />
                            </p>
                        })
                }
                
                </div>
            )
    }
}