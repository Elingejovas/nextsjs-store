
import styles from "./Description.module.sass";
import image from 'next/image';

export const Description = () => {
    return(
     <section className={styles.Description}>
     
     <img 
     src="/imagen/agregar una imagen" 
     alt="products marketplace"  
     width={500px} 
     height={300px}
     priority={false}
     quality={30}
     />
     <div className={Styles.Description__text}>
        
     <h2>Bring the future today</h2>
     <p>Future world: Your Gateway to Tomorrow`s Tech!</p>
     </div>
     </section>
    )
}