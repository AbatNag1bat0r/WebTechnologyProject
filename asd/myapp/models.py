from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
import os

class Car(models.Model):
    name = models.CharField( max_length=100, verbose_name="Название автомобиля")
    year = models.PositiveIntegerField( validators=[ MinValueValidator(1900), MaxValueValidator(2030)],verbose_name="Год выпуска")
    price = models.DecimalField( max_digits=10, decimal_places=2, verbose_name="Цена за день")
    price_currency = models.CharField( max_length=10, default="₸", verbose_name="Валюта" )
    is_available = models.BooleanField( default=True, verbose_name="Доступен для аренды" )
    
    class Meta:
        verbose_name = "Автомобиль"
        verbose_name_plural = "Автомобили"
        ordering = ['name']
        
    def __str__(self):
        return f"{self.name} ({self.year})"

class CarSpecification(models.Model):
    car = models.ForeignKey( Car, on_delete=models.CASCADE, related_name='specifications', verbose_name="Автомобиль" )
    specification = models.CharField( max_length=100, verbose_name="Характеристика" )

    class Meta:
        verbose_name = "Характеристика автомобиля"
        verbose_name_plural = "Характеристики автомобилей"
        
    def __str__(self):
        return f"{self.car.name} - {self.specification}"
    
def car_photo_upload_path(instance, filename):
    car_name = instance.car.name.replace(' ', '_')
    return f'cars/{car_name}/{filename}'

class CarPhoto(models.Model):
    car = models.ForeignKey( Car, on_delete=models.CASCADE, related_name='photos', verbose_name="Автомобиль")
    photo = models.ImageField( upload_to= car_photo_upload_path, verbose_name="Фотография")
    order = models.PositiveIntegerField( default=0,verbose_name="Порядок отображения")
    is_main = models.BooleanField( default=False, verbose_name="Главное фото")
    uploaded_at = models.DateTimeField( auto_now_add=True, verbose_name="Дата загрузки")

    class Meta:
        verbose_name = "Фотография автомобиля"
        verbose_name_plural = "Фотографии автомобилей"
        ordering = ['car', 'order', '-is_main']
        
        def __str__(self):
            return f"Фото {self.car.name}"

    def delete(self, *args, **kwargs):
        if self.photo:
            if os.path.isfile(self.photo.path):
                os.remove(self.photo.path)
        super().delete(*args, **kwargs)