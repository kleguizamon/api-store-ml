import './style.scss';
import Country from '../../components/Country';
import arrCountries from '../../countries.json';

function App() {
  return (
    <section className='main'>
      <img
        className='main-logo'
        src='https://i.postimg.cc/GtqMrWj6/ml-logo.png'
        alt='logoML'
      />
      <ul>
        {arrCountries.map((value, key) => (
          <li>
            <Country value={value} key={key} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
