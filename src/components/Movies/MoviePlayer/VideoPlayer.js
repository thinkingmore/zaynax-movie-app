import styles from './VideoPlayer.module.css';

const VideoPlayer = ({ videoKey }) => {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className={styles.iframeContainer}>
          <iframe
            width="800"
            height="450"
            src={`https://www.youtube.com/embed/${videoKey}`}
            title="Embedded video player"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default VideoPlayer;
  