from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login

def crear_cuenta(request):
    if request.method == 'POST':
        nombre = request.POST['nombre']
        email = request.POST['email']
        password = request.POST['password']
        user = User.objects.create_user(username=email, email=email, password=password, first_name=nombre)
        user.save()
        return redirect('ini-sesion')
    return render(request, 'pagina/cre-cuenta.html')

def iniciar_sesion(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        user = authenticate(request, username=email, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')  # Página de inicio después de iniciar sesión
        else:
            return render(request, 'pagina/ini-sesion.html', {'error': 'Credenciales incorrectas'})
    return render(request, 'pagina/ini-sesion.html')
