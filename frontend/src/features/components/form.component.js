import React, {useState, useEffect} from 'react';

const Form = (props) => {
return(
<div>
    <form>
    <h1>message</h1>
    <input onChange={props.onChange}/>
    </form>
</div>
)};

export default Form;
