from django.urls import path
from . import views

urlpatterns = [
    path('usuarios/', views.listar_usuarios, name='listar_usuarios'),
    path('login/', views.fazer_login, name='fazer_login'),
    path('cadastro/', views.cadastrar_usuario, name='fazer_cadastro'),
]
