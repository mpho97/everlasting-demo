from django.urls import path
from . import views

urlpatterns = [
    path('Contact/', views.Contact, name="Contact"),
]