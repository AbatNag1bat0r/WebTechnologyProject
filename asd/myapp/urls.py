from django.urls import path, include
from rest_framework.routers import DefaultRouter
from myapp import views

router = DefaultRouter()
router.register(r'cars', views.CarViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/cars-list/', views.car_list, name='car_list'),
]

