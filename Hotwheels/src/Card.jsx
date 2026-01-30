const Card = ({image, name, description, price}) => {
  return (
    <div className="border-2 h-[300px] w-[400px] rounded-[10px] flex flex-wrap px-2 border">
        <img src={image} alt={name} className="h-[200px] w-[380px] rounded-[10px] py-1"/>
        <aside className="flex flex-col justify-start items-start gap-1">
            <h2 className="text-xl">{name}</h2>
            <p className="text-[12px] text-[rgba(0,0,0,0.5)]">{description}</p>
            <p className="text-[16px] text-blue-700">₹{price}/-</p>
        </aside>
    </div>
  )
}

export default Card