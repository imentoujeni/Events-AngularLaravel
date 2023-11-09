<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
</head>
<body>
	<form action="Authentification">
		<div>
			<label for="">Email</label>
			<input type="text" name="email">
		</div>
		<div>
			<label for="">Mdp</label>
			<input type="password" name="mdp">
		</div>
		<div>
			<a href="{{route('client.inscription')}}">Inscription</a>
		</div>
		<button type="submit">Confirmer</button>
	</form>
</body>
</html>