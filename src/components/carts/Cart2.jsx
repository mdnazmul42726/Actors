const Cart2 = ({actor}) => {
    const {name} = actor
    return (
        <div>
            <div className="flex gap-5">
                <img className="rounded-full w-12 mb-3" src={actor.image} alt="" />
             <div className="">
             <p>Name: {name} </p>
                <p>Country: {actor.country}</p>
             </div>
            </div>
        </div>
    );
};

export default Cart2;