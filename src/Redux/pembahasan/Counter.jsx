import { useDispatch, useSelector } from "react-redux";
import { decrementwithCheckingAction, increment } from "../../app/Features/Counter/actions.js";

const Counter = () => {
    let {count} = useSelector(state => state.counter)
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(decrementwithCheckingAction(1))}>-</button>
            {' '} <span>{count}</span> {' '}
            <button onClick={() => dispatch(increment(1))}>+</button>
        </div>
    )
}

export default Counter;