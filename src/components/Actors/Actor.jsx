const Actor = ({ actor, selectHandleClick }) => {
    const { salary, role, name, image, country, age } = actor;
    return (
        <div className="w-[130%] border border-[#ff0000] mb-5 pl-5">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <div className="">
                        <p>Role: {role}</p>
                        <p>Country: {country}</p>
                        <p>Age: {age}</p>
                        <p>Salary: ${salary}</p>

                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => selectHandleClick(actor)}>Select</button>
                </div>
            </div>
        </div>
        </div >
    );
};

export default Actor;