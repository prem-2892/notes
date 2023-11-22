import Card from '../components/Card'
import Data from '../data/notes.json'

const Home = () => {
  return (
    <div>
      <h2 className='text-xl font-medium'>Home</h2>
      <div className='flex flex-col gap-5 md:flex-row md:flex-wrap'>
        {Data.map((note) => (
          <Card key={note.id} card={note} />
        ))}
      </div>
    </div>
  )
}

export default Home
