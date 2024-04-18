interface CategoryProps{

    params: {

        category: String
    }
}


export default function category(props: CategoryProps){
    const {category} = props.params
    return(
        <h1>Categoria Dinamica: {category}</h1>
    );
}