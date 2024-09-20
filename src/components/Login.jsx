import styles from './Login.module.scss'
function Login(){

    function handleClick(){
        alert("click");
    }

    return(
        <div className={styles.Container}>
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Black.png" alt="Spotify" />
            <button onClick={handleClick}>Connect Spotify</button>
        </div>
    );
}

export default Login;