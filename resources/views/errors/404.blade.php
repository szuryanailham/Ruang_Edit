<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Not Found - 404</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: 'Roboto', sans-serif;
            background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
            color: #333;
        }
        .container {
            text-align: center;
            background: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        h1 {
            font-size: 5em;
            margin: 0;
            margin-bottom: 10px;
            color: #FF6B6B;
        }
        p {
            font-size: 1.5em;
            margin-bottom: 20px;
            color: #777;
        }
        a {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 1em;
            color: #fff;
            background-color: #007BFF;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease, transform 0.3s ease;
        }
        a:hover {
            background-color: #0056b3;
            transform: translateY(-2px);
        }
        img {
            max-width: 100%;
            height: auto;
            margin-bottom: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="/img/error.gif" alt="Error animation">
        <h1>404</h1>
        <p>Oops... your page is not found!</p>
        <a href="{{ url('/') }}">Go to Homepage</a>
    </div>
</body>
</html>