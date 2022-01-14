import { useState } from "react";
import { useForm } from "react-hook-form";

function CreateRegForm (){
    const {register, handleSubmit} = useForm()
    const [response, setResponse] = useState(""
    )

    function handleClick(){
        document.body.classList.toggle("regForm-open")
    }

    function clickSubmit(data){
        const url = `http://localhost:8000/teams/`
        const info = {
            name: data.name,
            coach: data.coach,
            manager: {
                name: data.manager,
                phone: data.phone,
                email: data.email
            },
            record: {
                wins: 0,
                loss: 0,
                tie: 0
              },
            age: data.age,
            tier: data.tier,
            status: "pending"
        }

        fetch (url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch (err => setResponse(err.message))

        setResponse(`Thank You. After reviewing your application we will contact ${data.manager}.`)
    }

    return (
        <div className="regForm">
            <button className="regForm__exit scale" onClick={handleClick}>X</button>
            <p>Registration does not guarantee entry.  Our tournament committee will contact you after reviewing your application.</p>
            <form onSubmit={handleSubmit(clickSubmit)}>
                <label className="regFrom__label"> Team Name:</label> 
                <input className="regForm__input" placeholder="Team Name" required {...register("name")}/>
                <br/>

                <label className="regFrom__label"> Age:</label>
                    <select {...register("age")}>
                        <option value="U9">U9</option>
                        <option value="U11">U11</option>
                        <option value="U13">U13</option>
                    </select> 
                
                <label className="regFrom__label"> Tier: </label>
                <select {...register("tier")}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select> 
                <br/>

                <label className="regFrom__label"> Coach: </label> 
                <input className="regForm__input" placeholder="Coach" required {...register("coach")}/>
                <br/>
                <label className="regFrom__label"> Manager: </label> 
                <input className="regForm__input" placeholder="Manager" required {...register("manager")}/>
                <br/>
                <label className="regFrom__label"> Phone Number: </label> 
                <input className="regForm__input" placeholder="Manager's Phone Number" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required {...register("phone")}/>
                <br/> 
                <label className="regFrom__label"> Email: </label>   
                <input type="email" className="regForm__input" placeholder="Manager's Email" required {...register("email")}/>
                <br/>
                <input className="regForm__btn scale" type= "submit" />  
                <input className="regForm__btn scale" type= "reset" />
                {response && <div className="message">{response}</div>}
            </form>
        </div>
    )
}

export default CreateRegForm