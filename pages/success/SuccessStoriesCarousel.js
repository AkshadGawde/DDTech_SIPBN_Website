import { useState } from "react";
import styles from "@/styles/success.module.scss";
import successStories from "@/success/successStories"; // Importing the success stories

const SuccessStoriesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === successStories.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? successStories.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        {successStories.map((story, index) => (
          <div
            key={story.id}
            className={`${styles.card} ${
              index === currentIndex ? styles.active : styles.inactive
            }`}
          >
            <img src={story.image} alt={story.name} className={styles.image} />
            <div className={styles.content}>
              <p className={styles.quote}>"{story.quote}"</p>
              <div className={styles.author}>
                <h4>{story.name}</h4>
                <p>{story.position}</p>
                <p>{story.company}</p>
                <p>{story.employees}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.controls}>
        <button onClick={handlePrev} className={styles.prevBtn}>
          &lt;
        </button>
        <button onClick={handleNext} className={styles.nextBtn}>
          &gt;
        </button>
      </div>
      <div className={styles.dots}>
        {successStories.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.activeDot : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStoriesCarousel;
