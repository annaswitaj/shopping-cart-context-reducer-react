import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

type RatingProps = {
  rating: number
  onClick?: (numberOfStars: number) => void
  style?: React.CSSProperties
}

const Rating: React.FC<RatingProps> = ({ rating, onClick, style }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          onClick={onClick ? () => onClick(i) : undefined}
          style={style}
        >
          {rating > i ? (
            <AiFillStar fontSize='15px' />
          ) : (
            <AiOutlineStar fontSize='15px' />
          )}
        </span>
      ))}
    </>
  )
}

export default Rating
