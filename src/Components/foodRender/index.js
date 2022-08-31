
function RenderSimpleList ({foodsList}){
    return (
        <div>
            {foodsList.map((food)=>{
                return (
                <>
                    <p key={food.name}>{food.name}</p>
                    <img style={{height:"50px"}} src={food.image} />
                </>
                )
            })}
        </div>
    )
}
export default RenderSimpleList