import Cart2 from "./Cart2";

const Cart = ({selectedActrs, cost}) => {
    console.log(selectedActrs);
    return (
        <div>
            <div className="border border-[#ff0000] md:w-[450px] p-5">
                <h1 className="text-xl mb-4">Selected Actors: {selectedActrs.length}</h1>
                {
                    selectedActrs.map(actor => <Cart2 key={actor.id} actor={actor}/>)
                }
                <p>Total Cost: {cost}</p>
            </div>
        </div>
    );
};

export default Cart;