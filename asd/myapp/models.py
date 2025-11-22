from django.db import models

class Car(models.Model):
    name = models.CharField(max_length=100)
    year = models.CharField(max_length=10)
    price = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name

class CarSpec(models.Model):
    car = models.ForeignKey(Car, related_name='specifications', on_delete=models.CASCADE)
    spec = models.CharField(max_length=100)
    
    def __str__(self):
        return self.spec

class CarPhoto(models.Model):
    car = models.ForeignKey(Car, related_name='photos', on_delete=models.CASCADE)
    photo = models.ImageField(upload_to='cars/')
    order = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['order']