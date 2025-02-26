import Contact from "./assets/Contact";
import Hello from "./assets/Hello";
import Counter from "./assets/Counter";

function App() {
  const helloData = [
    { name: 'Jiyada', message: 'Hi'},
    { name: 'Cartoon', message: 'Hello..'},

  ];

  return(
    <div className='App' >
      <Counter />
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message} />
      ))}

      < Contact email="s6506021631018@email.kmutnb.ac.th" phone="0988267055" />
    </div>

  );
}

  

export default App;
