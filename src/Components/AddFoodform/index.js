import InternalPreviewGroup from "antd/lib/image/PreviewGroup"
import {useState,useRef} from "react"


function AddFoodForm({foods,setFoods}){

    const [form,setForm]= useState({
        name: "",
        image:"",
        calories:0,
        servings:0
    })
    function handleChange(e){
        setForm({...form, [e.target.name]:e.target.value})

    }
    function handleChangeNumber(e){
        setForm({...form, [e.target.name] : Number(e.target.value)})
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
            <input  name="calories" type="text" value={form.calories} onChange={handleChangeNumber}></input>
            <label>Servings</label>
            <input  name="servings" type="text" value={form.servings} onChange={handleChangeNumber}></input>
            <button type="submit">Create product</button>
        </form>
    )
}
export default AddFoodForm;