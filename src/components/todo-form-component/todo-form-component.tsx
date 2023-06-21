import React, { ChangeEvent, useState } from 'react';


interface MyProps {
}


const TodoFormComponent: React.FC<MyProps> = (props: MyProps) => {

    //Todo's State
    const [formValueIdState, setFormValueIdState] = useState(0);
    const [formValueUsernameState, setFormValueUsernameState] = useState("");
    const [formValuePasswordState, setFormValuePasswordState] = useState("");


    const todoOnChangeFunction = (synthEvent: ChangeEvent<HTMLInputElement>) => {
        /*
            TODO: create logic that will update the corresponding state for each of the 3 form input fields.

            Hint: The syntax necessary to convert a string to a number is  parseInt(...)
                The argument of the parseInt function is the string you want converted into an int.
        */
        //CODE HERE
    }




    return (
        <React.Fragment>
            <h3>Todo Form Component</h3>

            <p>TODO: finish the input fields below so that the state of this component is updated and rendered as the user types.
            </p>

            <form>
                {/* CODE HERE */}
                Id: <input type="number" name="idInput"></input>
                <br/>
                Username: <input type="text" name="usernameInput"></input>
                <br/>
                Password: <input type="password" name="passwordInput"></input>
            </form>

        </React.Fragment >
    );
}

export default TodoFormComponent;