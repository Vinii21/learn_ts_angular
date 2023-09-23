/* interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details
};

interface Details {
    author: string;
    year: number;
}
 */
/* 
const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheran",
        year: 2015
    }
} */

/* const { audioVolume, songDuration: duration, song, details} = audioPlayer;
const { author, year } = details */

//console.log({audioVolume, duration, song, author, year})

const [ ,, p3 = "Not found", ]: string[] = ["Goku", "Vegeta"];

console.log("Personaje:", p3);



export {};