
import styles from "./Description.module.sass";
import image from 'next/image';

const PLACEHOLDER_IMAGE = ''

export const Description = () => {
    return(
     <section className={styles.Description}>
     
     <div className={styles.Description__imageContainer}>
     
        <image  

        src="/imagen/Description.jpeg"
     
        alt="products marketplace"

        fill

        placeholder='blur'
        blurDataURL='./imagen/description.jpeg'

     />
     </div>
     <div className={styles.Description__text}>
        
     <h2>Bring the future today</h2>
     <p>Future world: Your Gateway to Tomorrow`s Tech!</p>
     </div>
     </section>
    )
}