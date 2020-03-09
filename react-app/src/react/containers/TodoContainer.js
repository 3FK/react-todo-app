import React from "react";
import { withUiComponent } from "../hoc";

import { InputText } from "../components";

const TodoContainer = props => {
  const { todoList, fire, todoCreators } = props;
  console.log("todo List", todoList);

  const onKeyPress = e =>{
      console.log("eee", e.which)
  }
  const onValueChange = e => {
    console.log("eee", e.target.value)
  }
  return (
    <div>
      <div>my todo app</div>
      <div>
        <InputText onSubmit={onKeyPress} onValueChange={onValueChange} />
      </div>
      <div>
          
      </div>
    </div>
  );
};
export default withUiComponent(TodoContainer);
