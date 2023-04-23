


export const CardTeste = ({ id, name, budget, category }) => {
    return (
        <div>
            <p id={id}>{name} : {budget} : {category}</p>
        </div>
    )
}