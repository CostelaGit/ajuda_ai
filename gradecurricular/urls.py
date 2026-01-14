from django.urls import path
from . import views

urlpatterns = [
    path('', views.gradecurricular_home, name='gradecurricular'),
]