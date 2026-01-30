import Details from "./Details"

const Footer = () => {
  return (
    <footer className="h-[40vh]">
        <h1 className="flex justify-center items-center py-6 text-2xl font-bold">Why Choose Us?</h1><br/>
        <div className="flex justify-around items-center" >
            <Details icon="🚗" dec="Premium Collections"/>
            <Details icon="⚡" dec="Fast Delivery"/>
            <Details icon="💳" dec="Secure Payments"/>
        </div><br/><br/>
        <div className="bg-blue-950 text-white h-[50px] flex justify-center items-center">
          <p>&copy; 2025 Toy Cars Store -- All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer