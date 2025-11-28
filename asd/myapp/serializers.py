from rest_framework import serializers
from .models import Car, CarSpecification, CarPhoto


"""
class CarSpecificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarSpecification
        fields = ['specification']

class CarPhotoSerializer(serializers.ModelSerializer):
    photo_url = serializers.SerializerMethodField()

    class Meta:
        model = CarPhoto
        fields = ['photo_url', 'order', 'is_main']

    def get_photo_url(self, obj):
        request = self.context.get('request')
        if obj.photo and hasattr(obj.photo, 'url'):
            if request:
                return request.build_absolute_uri(obj.photo.url)
            return obj.photo.url
        return None

class CarSerializer(serializers.ModelSerializer):


    specs = serializers.SerializerMethodField()
    photos = serializers.SerializerMethodField()
    price_display = serializers.SerializerMethodField()

    class Meta:
        model = Car
        fields = [
            'id', 'name', 'year', 'specs', 
            'price_display', 'photos', 'is_available'
        ]

    def get_specs(self, obj):
        return [spec.specification for spec in obj.specifications.all()]

    def get_photos(self, obj):
        photos = obj.photos.all().order_by('-is_main', 'order')
        return CarPhotoSerializer(photos, many=True, context=self.context).data

    def get_price_display(self, obj):
        return f"от {obj.price:.0f} {obj.price_currency}/день"
    
"""


class CarPhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarPhoto
        fields = ['photo']

class CarSpecificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarSpecification
        fields = ['specification']

class CarSerializer(serializers.ModelSerializer):
    specs = serializers.SerializerMethodField()
    photos = serializers.SerializerMethodField()
    price = serializers.SerializerMethodField()

    class Meta:
        model = Car
        fields = ['id', 'name', 'year', 'price', 'specs', 'photos']

    def get_specs(self, obj):
        return [s.specification for s in obj.specifications.all()]

    def get_photos(self, obj):
        return [p.photo.url for p in obj.photos.all().order_by('order')]

    def get_price(self, obj):
        return f"{obj.price} {obj.price_currency}/сутки"
