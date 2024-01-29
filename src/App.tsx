import Welcome from './Welcome'

const App = () => {
  const person = {name: 'John', age: 25, location: 'Finland'}
  return (
    <> {/* can be div element */}
      <h1>DuckBat's React App</h1>
      <Welcome name={person.name + " you are in " + person.location }/>
      <Welcome name="Sara"/>
      <Welcome name="Ville"/>
      <Welcome name="Jussi"/>
      <p>test text</p>
    </>
  )
}

export default App
