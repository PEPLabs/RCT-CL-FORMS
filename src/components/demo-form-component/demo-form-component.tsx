import React, { ChangeEvent, useState } from 'react';


interface MyProps {
}


const DemoFormComponent: React.FC<MyProps> = (props: MyProps) => {

    //Demo's State
    const [formValueStateOne, setFormValueStateOne] = useState("Default State 1");
    const [formValueStateTwo, setFormValueStateTwo] = useState("Default State 2");


    const demoOnChangeFunction = (synthEvent: ChangeEvent<HTMLInputElement>) => {
        //you can put whatever complex logic you want in here.
        if (synthEvent.target.name === "inputOne")
            setFormValueStateOne(synthEvent.target.value);
        else if (synthEvent.target.name === "inputTwo")
            setFormValueStateTwo(synthEvent.target.value);
    }




    return (
        <React.Fragment>
            <h3>Demo Form Component</h3>

            <p>The following header is a series of examples, describing how forms work in React.</p>

            <form>
                <p>Demo 1: Notice how this input tag has no value attribute. Try to type data into the input field. No problems.</p>
                <input type="text"></input>
                
                <p>Demo 2: Notice how this input tag has a value set to "Hello World". Try to type data into the input field. It doesn't let you types into the
                    input field because the value has been set to specific static data. We want the value of the field to be a variable, so we need to set it as a variable.
                </p>
                <input type="text" value={"Hello World"}></input>

                <p>Demo 3: Here, we've changed the value attribute to be linked to a variable, but even still the field won't change. This is because React is actually read only.
                    We need to go one more step further in order to make tie the value of a input field to a variable in React.
                </p>
                <input type="text" value={formValueStateOne}></input>

                <p>Demo 4: Here, we add an "onChange" attribute and give it a function. Now, whenever we type in the form field it will trigger the form's onChange event but it will
                    NOT change the state of the input field in the view because React is read only. Now, the function we happened to give the onChange attribute will update the state
                    and because the value is set equal to tht state the new state will be rerendered into the view.

                </p>
                {/* Name attributes have been added to the input fields so that they can be identified in the demoOnChangeFunction above. React doesn't NEED this field, though its a good idea to have. */}
                <input type="text" value={formValueStateOne} onChange={demoOnChangeFunction} name="inputOne"></input>
                <input type="text" value={formValueStateTwo} onChange={demoOnChangeFunction} name="inputTwo"></input>
            </form>

        </React.Fragment>
    );
}

export default DemoFormComponent;