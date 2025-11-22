from rest_framework import serializers
from .models import Car, CarSpec, CarPhoto

class CarSpecSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarSpec
        fields = ['spec']

class CarPhotoSerializer(serializers.ModelSerializer):
    photo_url = serializers.SerializerMethodField()
    
    def get_photo_url(self, obj):
        request = self.context.get('request')
        if obj.photo and hasattr(obj.photo, 'url'):
            return request.build_absolute_uri(obj.photo.url)
        return None
    
    class Meta:
        model = CarPhoto
        fields = ['photo_url', 'order']

class CarSerializer(serializers.ModelSerializer):
    specs = serializers.SerializerMethodField()
    photos = serializers.SerializerMethodField()
    
    def get_specs(self, obj):
        return [spec.spec for spec in obj.specifications.all()]
    
    def get_photos(self, obj):
        photos = obj.photos.all()
        return CarPhotoSerializer(photos, many=True, context=self.context).data
    
    class Meta:
        model = Car
        fields = ['id', 'name', 'year', 'specs', 'price', 'photos']