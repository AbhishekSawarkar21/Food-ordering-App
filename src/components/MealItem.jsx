import { useContext } from "react"
import Button from "./UI/Button"
import { currencyFormatter } from "./util/formatting"
import CartContext from "../store/CartContext";

export default function MealItem({meal}) {
   const cartCtx = useContext(CartContext);

    function handleAddMealToCart() {
       cartCtx.addItem(meal);
    }

    return <li  className="meal-item">
        <article>
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name}/>
            <div>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                <p className="meal-item-desciption">{meal.desciption}</p>

            </div>
            <p className="meal-item-actions">
                <Button onClick={handleAddMealToCart}>
                    Add to cart
                </Button>
            </p>
        </article>
    </li>

}