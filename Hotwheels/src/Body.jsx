import Card from "./Card"

const Body = () => {
  return (<>
  <h1 className="flex h-[10vh] justify-center items-center text-2xl font-bold">Featured Toy Cars</h1>
  <div className="flex justify-around">
        <Card image="https://i.ytimg.com/vi/8DHdVqRbVvU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBNm1MKLuCM2rCdMQavC9cYMlOSxQ" name="HW Hot Truck" description="High Speed mini racer" price="499"/>

        <Card image="https://images.unsplash.com/photo-1648711727240-7ee250483923?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2hlZWxzfGVufDB8fDB8fHww" name="Dodge Charger" description="Speed like hell" price="599"/>

        <Card image="https://images.unsplash.com/photo-1648711085453-1ad7ef382e69?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2hlZWxzfGVufDB8fDB8fHww" name="52 Hudson Hornet" description="vintage" price="699"/>
    </div>
    </>
  )
}

export default Body