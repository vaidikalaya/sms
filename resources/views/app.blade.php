<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>VMS</title>

        <!-- Scripts -->
        @viteReactRefresh
        @vite(['resources/js/app.jsx'])

        @php
            $url = url("/");
            $user = auth()->user();
            $isLoggedIn = $user != null ? 1 : 0;
        @endphp

        <script>
            window.auth = {
                apiUrl: @json($url),
                isLoggedIn:{{$isLoggedIn}},
                auth_user:@json($user),
            };
        </script>
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>

