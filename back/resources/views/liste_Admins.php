<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
</head>
<body>
	<table border="1" width="100%">
		<thead>
			<tr>
				<th>Nom</th>
				<th>prenom</th>
			</tr>
		</thead>
		<tbody>
			@foreach ($admin as $item)	
			<tr>
				<td>{{$item->nom}}</td>
				<td>{{$item->$prenom}}</td>
			</tr>
			@endforeach

		</tbody>
	</table>
</body>
</html>