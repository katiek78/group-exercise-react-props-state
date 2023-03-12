import Joke from "../joke";

interface ChuckJokeProps {
   chuckJoke: Joke;  
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({chuckJoke}) => <p>{chuckJoke.joke}</p>


export default ChuckJoke;
