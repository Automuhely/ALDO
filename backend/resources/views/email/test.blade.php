<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email küldése</title>
</head>

<body>
    <h4>Név: {{ $mailData['name'] }}</h4>
    <h4>E-mail cím: {{ $mailData['email'] }}</h4>
    <h4>Rendszám: {{ $mailData['rendszam'] }}</h4>
    <p>{!! nl2br(e($mailData['uzenet'])) !!}</p>
</body>

</html>