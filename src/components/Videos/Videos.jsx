import axios from "axios";
import { useState, React } from "react";
import ReactPlayer from 'react-player';

const Videos = () => {

    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME; //VITE needed for import
    const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET;


    const [fileUpload, setFileUpload] = useState([]);
    const [fileMap, setFileMap] = useState([])

    const videoUpload = () => { //Uploads video to cloudinary and returns media url

      console.log(fileUpload);

      const formData = new FormData();
      formData.append('file', fileUpload);
      formData.append('upload_preset', uploadPreset);
      let apiUrl = `https://api.cloudinary.com/v1_1/${cloudName}/video/upload`; //appending cloud names & presets to url

      axios.post(apiUrl, formData)
      .then((r) => {  //creating an array for the video urls
        console.log(r.data.url);
        const videoUrl = r.data.url
        setFileMap([...fileMap, videoUrl])
      })
      .catch((e) => {
        console.log("Something went wrong with your video upload", e)
      })

    }



    return (
        <div id="container">
           Video Upload: 

        {/*Form to upload videos to Cloudinary*/}
        <form onSubmit={videoUpload}>
            <input type='file' accept='video/*' onChange={(e) => setFileUpload(e.target.files[0])}/>
            <button type='submit'>Upload Video</button>
        </form>

        {/*Temporary mapping until video urls connect to databse*/}
        {
            fileMap.length > 0 ? (
                fileMap.map((file) => {
                    return <>
                    <ReactPlayer url={file} controls />
                    </>
                })
            ) : (<p>No Videos To Display</p>)
        }
        

        

        </div>
    )

}

export default Videos;