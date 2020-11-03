from django.urls import path
from .views import crearVehiculo

urlpatterns=[
    path('agregar/', crearVehiculo,name='crearVehiculo')
]