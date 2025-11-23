from django.urls import path
from myapp import views
from . import views

urlpatterns = [
    path('cars/', views.CarListView.as_view(), name='car-list'),
    path('cars/<int:id>/', views.CarDetailView.as_view(), name='car-detail'),
]


