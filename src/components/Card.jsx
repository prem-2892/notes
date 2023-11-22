import PropTypes from 'prop-types'

const Card = ({ card }) => {
  function formatDate(timestamp) {
    const date = new Date(timestamp)
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return date.toLocaleDateString('en-US', options)
  }

  return (
    <div
      className='max-w-xs w-full h-56 p-3 rounded-xl flex flex-col gap-4 '
      style={{ backgroundColor: card.background }}
    >
      <h3 className='text-2xl font-medium flex-1 w-3/4'>{card.title}</h3>
      <p className='text-lg' style={{ flex: '3 3 0%' }}>
        {card.content}
      </p>
      <p className='flex-1'>{formatDate(card.timestamp)}</p>
    </div>
  )
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
}

export default Card
