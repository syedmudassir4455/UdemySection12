import Card from "./Card";
import useCounter from "./Hooks/use-counter";

const ForwardCounter = () => {
  //   const [counter, setCounter] = useState(0);

  const counter = useCounter();
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCounter((prevInterval) => prevInterval + 1);
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }, []);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
