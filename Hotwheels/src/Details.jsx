const Details = ({icon, dec}) => {
  return (
    <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl">{icon}</h1>
        <h2>{dec}</h2>
    </div>
  )
}

export default Details