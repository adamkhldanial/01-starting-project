import { useState } from 'react'; // functions that start with 'use' are hooks and must only be called from inside a function component or another hook

import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {

  const [ selectedTopic, setSelectedTopic ] = useState('Please click a button'); // returns an array with two elements: the current state value and a function to update it

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', or 'state'
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
}

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts 
              // 1. Props are custom HTML attributes set on components.
              // 2. React merges them into a single object
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts
              // If the prop name is the same as the variable name, we can use the spread operator to pass the entire object
              {...CORE_CONCEPTS[1]} 
            />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;