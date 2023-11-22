import Card from '../components/Card'
import Data from '../data/notes.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div>
      <h2 className='text-3xl font-bold'>Notes</h2>
      <div className='flex items-center gap-3 bg-gray-50 w-80 max-w-full py-2 px-4 rounded-md my-5'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          type='text'
          placeholder='Search'
          className='bg-transparent text-lg outline-none focus:outline-none focus:border-none active:border-none'
        />
      </div>
      <div className='flex flex-col gap-5 md:flex-row md:flex-wrap'>
        {Data.map((note) => (
          <Card key={note.id} card={note} />
        ))}
      </div>
    </div>
  )
}

export default Home
