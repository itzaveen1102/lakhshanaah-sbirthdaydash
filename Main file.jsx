<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Surprise for Lakhshanaah</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #fbe8e7;
            padding: 20px;
            background-image: url('https://i.imgur.com/W9y3KXw.png'); /* Kuromi background */
            background-size: cover;
            background-position: center;
        }
        .container {
            max-width: 600px;
            margin: auto;
            background: rgba(255, 255, 255, 0.9);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #a64ac9; /* Kuromi theme color */
            font-family: 'Comic Sans MS', cursive;
        }
        .btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            background: #a64ac9;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            font-family: 'Comic Sans MS', cursive;
        }
        .btn img {
            width: 25px;
            height: 25px;
            margin-right: 10px;
        }
        .btn:hover {
            background: #722f8b;
        }
        video {
            width: 100%;
            display: none;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>
            <img src="https://i.imgur.com/6YpT78M.png" alt="Kuromi" width="50"> 
            Hey Lakhshanaah, this is for you! 💜
        </h1>
        <button class="btn" onclick="showVideo('video1')">
            <img src="https://i.imgur.com/6YpT78M.png" alt="Kuromi"> Watch Video About You
        </button>
        <button class="btn" onclick="showVideo('video2')">
            <img src="https://i.imgur.com/6YpT78M.png" alt="Kuromi"> Watch Our Friendship Moments
        </button>
        <button class="btn" onclick="showVideo('video3')">
            <img src="https://i.imgur.com/6YpT78M.png" alt="Kuromi"> A Message from Me
        </button>
        
        <video id="video1" controls>
            <source src="video1.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <video id="video2" controls>
            <source src="video2.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <video id="video3" controls>
            <source src="video3.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>

    <script>
        function showVideo(id) {
            document.querySelectorAll('video').forEach(video => {
                video.style.display = 'none';
                video.pause();
            });
            
            let video = document.getElementById(id);
            video.style.display = 'block';
            video.play();
        }
    </script>
</body>
</html>
