
interface CategoryProps{

    params: {

        categories: String[],
         
        SearchsParams: String
    }
}


export default function category(props: CategoryProps){
    const {categories} = props.params
    return(
        <h1>Categoria Dinamica: {categories}</h1>
    );
}