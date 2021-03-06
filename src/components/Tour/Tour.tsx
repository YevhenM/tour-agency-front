import {Link, useParams} from "react-router-dom";
import data from "../../store/Data"
import {observer} from "mobx-react-lite";
import {useEffect} from "react";
//import "./Tour.scss"
import usersStore from "../../store/usersStore"
import {log} from "util";


interface IParams {
    id: string
}

const Tour = observer(() => {
    const params = useParams<IParams>();
    useEffect(() => {
        if (!data.currentTour) {
            //data.setLocation(props.history)
            console.log("params >", params.id)
            data.getTourById(+params.id);
        }
    }, [])
   

    return (
        <div>
            <Link to="/tours">
                <button className="tour-page-button">back to list</button>
            </Link>
            {
                data.currentTour ? (
                    <div className="tour">
                        <header className="tour__header">
                            <img src={data.currentTour.imageUrl} alt={data.currentTour.title}/>
                        </header>
                        <section>
                            <article>
                                <h3 className="tour__title">{data.currentTour.title}</h3>
                                <p className="tour__description">
                                    {data.currentTour.description}
                                </p>
                            </article>
                        </section>
                        <footer className="tour__footer">
                            {usersStore.isAuth && ( 
                                <div>
                                    {/* <button className="tour-page-button" onClick={() => usersStore.addTourToCart.call(usersStore, data.currentTour.id)}> add to cart</button> */}
                                    <button className="tour-page-button" > add to cart</button>
                                </div>
                             ) }
                            
                            <b>{data.currentTour.price}</b>
                        </footer>
                    </div>) : (<div>
                    <h2>"tour is not found"</h2>
                </div>)
            }
        </div>
    );
});
export default Tour;