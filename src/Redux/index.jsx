import { Provider } from "react-redux";
import store from "../app/Features/Counter/store";
import Counter from "./pembahasan/Counter";

const Redux = () => {
    return (
        <div>
            <Provider store={store} >
            <Counter />

            </Provider>

        </div>
    )
}

export default Redux;