import {useState,useRef} from "react"


function AddFoodForm({foods,setFoods}){

    const [form,setForm]= useState({
        name: "",
        image:"",
        calories:0,
        serving:0
    })
    function handleChange(e){
        setForm({...form, [e.target.name]:e.target.value})

    }
    function handleSubmit(e){
        e.preventDefault()
        let updateFood = [...foods,form]
        setFoods(updateFood)
    }
    console.log(form)
    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input  name="name" type="text" value={form.name} onChange={handleChange}></input>
            <label>Image</label>
            <input  name="image" type="text" value={form.image} onChange={handleChange}></input>
            <label>Calories</label>
            <input  name="calories" type="text" value={form.calories} onChange={handleChange}></input>
            <label>Servings</label>
            <input  name="serving" type="text" value={form.serving} onChange={handleChange}></input>
            <button type="submit">Create product</button>
        </form>
    )
}
export default AddFoodForm;