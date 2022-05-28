import Card from './Card';
import useCounter from '../hooks/use-counter';

const ForwardCounter = () => {
 const counter = useCounter();  //calling custon hook

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
