from rest_framework import generics
from rest_framework.response import Response
from .models import Car
from .serializers import CarSerializer

class CarListView(generics.ListAPIView):
    queryset = Car.objects.filter(is_available=True).prefetch_related('specifications', 'photos')
    serializer_class = CarSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context

class CarDetailView(generics.RetrieveAPIView):
    queryset = Car.objects.filter(is_available=True).prefetch_related('specifications', 'photos')
    serializer_class = CarSerializer
    lookup_field = 'id'

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context