import Welcome from './components/Welcome'
import Home from './components/Home';

const App = () => {
  const person = {name: 'John', age: 25, location: 'Finland'}
  return (
    <> {/* can be div element */}
      <Home/>
      <Welcome name={person.name + " you are in " + person.location }/>
      <Welcome name="Sara"/>
      <Welcome name="Ville"/>
      <Welcome name="Jussi"/>
      <p>test text</p>
    </>
  )
}

export default App
