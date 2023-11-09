<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
</head>
<body>
    <!--$E -> nom=$request->nom;
        $E ->prix=$request->prix;
        $E ->proprietaire=$request->proprietere;
        $E ->date=$request->date;
        $E ->lieu=$request->lieu;
        $E ->etat=$request->etat;-->
	<table border="1" width="100%">
		<thead>
			<tr>
				<th>Nom</th>
				<th>prix</th>
                <th>proprietere</th>
                <th>date</th>
                <th>lieu</th>
                <th>etat</th>
			</tr>
		</thead>
		<tbody>
			@foreach ($event as $item)	
			<tr>
				<td>{{$item->nom}}</td>
				<td>{{$item->$prix}}</td>
                <td>{{$item->proprietaire}}</td>
				<td>{{$item->$date}}</td>
                <td>{{$item->lieu}}</td>
				<td>{{$item->etat}}</td>

			</tr>
			@endforeach

		</tbody>
	</table>
</body>
</html>