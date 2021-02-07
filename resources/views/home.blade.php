@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        @auth
        <div class="col-md-8">
            <body>
                <div id="reactjs"></div>
            </body>
        </div>
        @endauth
        @guest
            <h1>Não autenticado</h1>
        @endguest
    </div>
</div>
@endsection
