import './index.scss';

const AnimatedLetters = ({letterClass, strArray, idx}) => {
  const parsedletters =  strArray.map((char, i) => (
    <span key={char + i} className={`${letterClass} _${i + idx}`}>
      {char}
    </span>
  ))
  
  
  return (
    <span>
      {parsedletters}
    </span>
  )
}

export default AnimatedLetters