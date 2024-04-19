'use client';
import { useState } from "react";
import Image from "next/image";
import styles from "./Description.module.sass";
import classNames from "classnames/bind";

const placeHolderImage = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCADCAMIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAQACAwX/xAAWEAEBAQAAAAAAAAAAAAAAAAAAARH/xAAXAQEBAQEAAAAAAAAAAAAAAAABAAID/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwDzUk0kCiAUmgiCkTAYkYVCzSiiyUkgkCkgCCmQ1Q1AAQ0EkkmUUw2EUQEUQkiQo1AYEY1BGoCiiygmsQLKawYkyGqzSmaK1Wa0ACGgkkkkU5tgFFBFNBJEgwwRqAGNQRqArDhkOBDFjWLAmcGN4LAmLGa3RSmKzWqzWkzQ1QUEkg0inN0ZRBARTSRBhBjUEaiBjUEagBkOKNBDDhxYCyK3gsSYrNbrNSc6zW6zSmKDQUEUU2CnNsAgpAohGAxoGNxmNRBqNQRqBGNQRqAJFBAVoVJis1usVFisVusUpmstVkpJJJ0BDm2EkUEk0kYDCGo1GY3EGo3GI3EGo1GY1ACkgkzWhUmKzW6xUmKxW6xSWKzWqzUkkkW0kw0EgUkE0iYDCmo1GY1Ey3G4xGog3GozDAGkkEhSzUmazWqzUmKxWqxUWazWqyUkEi2gmSgkikE0iYy1Cmo1GI3EG43HONwBuNRiNRBpBaAWatFSFZprNSZrFarFRZoNZpSSSRWjVrJSCJSCKaMZMRajcc43Kk3GoxGpUHSUysStSgNatZ06gdFo0WoKs02s1Jms01mlM0GhJIIoatGrQdICSKCTTRjJiLUalYjUSblalYlalCblalYlOgN6tZ1ag1o0aLUFazabWbSBWaazShQaCkgkmNWhagUEiUCmoTGTA01GoxGoE3DKzDAm5TrErWpNatZ1ag1o0atQVoqoIFFVFIFBBCSSTkgkyUCmoiEmo0WSG2jGWoC1DGYQmiEA0gkCgiEECFWTQWQkikkiHFJIJJBqFJJqEpBotRINGFIIlIIpJBJIsgJEAJFkJJoBJJP/2Q==";

export function Description() {
  const [borderImage, setBorderImage] = useState(false);

  function handleClick() {
    setBorderImage(!borderImage);
  }

  const cx = classNames.bind(styles);
  const buttonStyles = cx('Description_button', {
    'Description_button--border': borderImage,
  });

  return (
    <section className={styles.Description}>
      <button className={buttonStyles} onClick={handleClick}>
        <div className={styles.Description_imageContainer}>
          <Image
            src="/images/description.jpeg"
            alt="products marketplace"
            width={500}
            height={300}
            placeholder="blur"
            blurDataURL={placeHolderImage}
          />
        </div>
      </button>
      <div className={styles.Description_text}>
        <h2>Bring the future today</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui illo
          amet ipsa reprehenderit neque cum, iusto incidunt totam eos
          asperiores repellendus libero perspiciatis accusamus quos expedita
          modi adipisci delectus labore?
        </p>
      </div>
    </section>
  );
}