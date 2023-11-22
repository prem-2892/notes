import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
  return (
    <div className='flex flex-row sm:flex-col justify-between max-h-screen h-[95vh] fixed'>
      <div className='cursor-pointer text-2xl font-bold'>Notes</div>
      <FontAwesomeIcon
        icon={faPlus}
        className='text-xl p-2.5 cursor-pointer hover:bg-gray-200 hover:rounded-full aspect-square'
      />
    </div>
  )
}

export default Navigation
