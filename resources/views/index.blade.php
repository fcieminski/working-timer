<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Timey</title>
        <!-- Styles -->
    </head>
    <body>
        <div id="app"></div>
        
        <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
        <script> 
            var csrf_token = '<?php echo csrf_token(); ?>'; 
        </script>
    </body>
    </html>