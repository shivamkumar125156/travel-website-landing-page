import Card from "./Card";
function Tours({tours,removeTour}){
    return (
        <div className="container">
            <div>
                <h2 className="title">Plan with Shivam</h2>
            </div>
            <div className="cards">
                {
                    tours.map((tour)=>{
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>;//Sending a copy of each object
                    })
                }
            </div>
        </div>
    );
}
export default Tours;