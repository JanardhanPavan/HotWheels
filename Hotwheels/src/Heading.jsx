const Heading = () => {
  return (
    <header className=" h-[80vh] bg-[url(https://images.hdqwalls.com/wallpapers/hot-wheels-and-jet-21.jpg)] bg-center bg-cover flex justify-center items-center">
      <div className="bg-[rgba(0,0,0,0.7)] h-[150px] w-[350px] rounded-2xl flex justify-center items-center flex-col text-white gap-2" >
            <h1 className="text-4xl">Premium Toy Cars</h1>
            <p className="text-[14px]">Collect the coolest miniature Cars</p>
            <button className="bg-blue-700 rounded-2xl text-[12px] h-[24px] w-[80px] hover:bg-red-900">Shop Now</button>
        </div>
    </header>
  )
}

export default Heading