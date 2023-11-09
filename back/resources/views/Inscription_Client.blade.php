<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
</head>
<body>
	<h1>Inscription Client</h1>
	<form action="ajoutClient">
		<div>
			<label for="">Nom :</label>
			<input type="text" name="nom">
		</div>
		<div>
			<label for="">Prenom :</label>
			<input type="text" name="prenom">
		</div>
		<div>
			<label for="">Adresse :</label>
			<input type="text" name="adresse">
		</div>
		<div>
			<label for="">Date de naissance :</label>
			<input type="date" name="date_naisance">
		</div>
		<div>
			<label for="">Email :</label>
			<input type="text" name="email">
		</div>
		<div>
			<label for="">Mdp :</label>
			<input type="password" name="mdp">
		</div>
		<button type="submit">Confirmer</button>
	</form>
</body>
</html>